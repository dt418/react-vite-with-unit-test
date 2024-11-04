import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  age: z
    .number()
    .min(18, { message: 'You must be at least 18' })
    .max(200, { message: 'The maximum is 200' })
    .or(z.number().optional()),
  subject1: z.string().optional(),
  subject2: z.string().optional(),
  message: z.string().optional(),
});

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const signUpFormSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().min(1, { message: 'Email is required' }),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z.string().min(1, { message: 'Confirm is required' }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Passwords must match!',
    path: ['confirmPassword'],
  });

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
export type SignUpFormSchemaType = z.infer<typeof signUpFormSchema>;
