import { z } from 'zod';

export const NumberTransformedString = z
  .string()
  .regex(/^\d+$/)
  .transform(Number);
