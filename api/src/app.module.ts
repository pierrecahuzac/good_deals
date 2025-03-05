import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealController } from './deal/deal.controller';
import { DealModule } from './deal/deal.module';
import { DealService } from './deal/deal.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { CommentModule } from './comment/comment.module';
import { ReportModule } from './report/report.module';
import { TagModule } from './tag/tag.module';
import { VoteModule } from './vote/vote.module';
import { CommentVoteModule } from './comment-vote/comment-vote.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DealModule, UserModule, CommentModule, ReportModule, TagModule, VoteModule, CommentVoteModule, AuthModule],
  controllers: [AppController, DealController, UserController],
  providers: [AppService, DealService, UserService],
})
export class AppModule {}
