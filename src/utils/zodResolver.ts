import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Resolver } from 'react-hook-form';

export const createZodResolver = <TSchema extends z.ZodTypeAny>(schema: TSchema): Resolver<z.infer<TSchema>> => {
  return zodResolver(schema);
};
