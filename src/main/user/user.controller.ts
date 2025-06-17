// src/main/user/user.controller.ts
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/common/guard/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    console.log('📦 UserController initialized');
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
getMe(@Req() req) {
  console.log('➡️ GET /user/me endpoint called');

  if (!req || !req.user) {
    console.log('❌ No req.user found in request');
    return { message: 'Unauthorized - no user in request' };
  }

  console.log('✅ req.user exists:', req.user);
  console.log('🔍 Fetching user by ID (from req.user.sub):', req.user.sub);

  return this.userService.getMe(req.user.sub); // ✅ use sub
}
}
