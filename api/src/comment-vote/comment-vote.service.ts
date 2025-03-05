import { Injectable } from '@nestjs/common';
import { CreateCommentVoteDto } from './dto/create-comment-vote.dto';
import { UpdateCommentVoteDto } from './dto/update-comment-vote.dto';

@Injectable()
export class CommentVoteService {
  create(createCommentVoteDto: CreateCommentVoteDto) {
    return 'This action adds a new commentVote';
  }

  findAll() {
    return `This action returns all commentVote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentVote`;
  }

  update(id: number, updateCommentVoteDto: UpdateCommentVoteDto) {
    return `This action updates a #${id} commentVote`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentVote`;
  }
}
