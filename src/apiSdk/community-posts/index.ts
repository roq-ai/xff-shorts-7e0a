import axios from 'axios';
import queryString from 'query-string';
import { CommunityPostInterface, CommunityPostGetQueryInterface } from 'interfaces/community-post';
import { GetQueryInterface } from '../../interfaces';

export const getCommunityPosts = async (query?: CommunityPostGetQueryInterface) => {
  const response = await axios.get(`/api/community-posts${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCommunityPost = async (communityPost: CommunityPostInterface) => {
  const response = await axios.post('/api/community-posts', communityPost);
  return response.data;
};

export const updateCommunityPostById = async (id: string, communityPost: CommunityPostInterface) => {
  const response = await axios.put(`/api/community-posts/${id}`, communityPost);
  return response.data;
};

export const getCommunityPostById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/community-posts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCommunityPostById = async (id: string) => {
  const response = await axios.delete(`/api/community-posts/${id}`);
  return response.data;
};
