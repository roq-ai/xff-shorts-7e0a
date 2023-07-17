import * as yup from 'yup';

export const communityPostValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
