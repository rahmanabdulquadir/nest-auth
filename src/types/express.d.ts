// src/types/express.d.ts
import { User } from '@prisma/client';

declare module 'express' {
  interface Request {
    user: Partial<User>; // or a custom type like { id: string; email: string }
  }
}
