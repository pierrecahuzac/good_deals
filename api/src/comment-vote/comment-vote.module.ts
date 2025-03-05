import { Module } from '@nestjs/common';
import { CommentVoteService } from './comment-vote.service';
import { CommentVoteController } from './comment-vote.controller';

@Module({
  controllers: [CommentVoteController],
  providers: [CommentVoteService],
})
export class CommentVoteModule {}
