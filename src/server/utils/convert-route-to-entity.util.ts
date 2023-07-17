const mapping: Record<string, string> = {
  'community-posts': 'community_post',
  organizations: 'organization',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
