import { type SchemaTypeDefinition } from 'sanity';
import { ContributorSchema } from './types/contributor.type';
import { ProjectSchema } from './types/project.type';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ContributorSchema, ProjectSchema],
};
