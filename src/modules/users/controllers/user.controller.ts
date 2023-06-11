import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/modules/auth/guards/auth.guard";

@Controller()
export class UserController {
  @UseGuards(JwtGuard)
  @Get("secret")
  async secret() {
    return 'win';
  }
}