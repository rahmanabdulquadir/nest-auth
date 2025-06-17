// src/main/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
        firstName: true,
        lastName: true,
        bio: true,
        email: true,
        phoneNumber: true,
        role: true,
        sellerRequest: true,
        createdAt: true,
        updatedAt: true,
        // addresses: true, // if related
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
