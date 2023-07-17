import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { communityPostValidationSchema } from 'validationSchema/community-posts';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.community_post
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCommunityPostById();
    case 'PUT':
      return updateCommunityPostById();
    case 'DELETE':
      return deleteCommunityPostById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCommunityPostById() {
    const data = await prisma.community_post.findFirst(convertQueryToPrismaUtil(req.query, 'community_post'));
    return res.status(200).json(data);
  }

  async function updateCommunityPostById() {
    await communityPostValidationSchema.validate(req.body);
    const data = await prisma.community_post.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCommunityPostById() {
    const data = await prisma.community_post.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
