// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Photo, PhotoTag } = initSchema(schema);

export {
  Tag,
  Photo,
  PhotoTag
};