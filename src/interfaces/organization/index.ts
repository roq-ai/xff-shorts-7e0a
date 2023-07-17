import { CommunityPostInterface } from 'interfaces/community-post';
import { VideoInterface } from 'interfaces/video';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  community_post?: CommunityPostInterface[];
  video?: VideoInterface[];
  user?: UserInterface;
  _count?: {
    community_post?: number;
    video?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
