import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CommunityPostInterface {
  id?: string;
  content: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface CommunityPostGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  organization_id?: string;
}
