import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentVoteService } from './comment-vote.service';
import { CreateCommentVoteDto } from './dto/create-comment-vote.dto';
import { UpdateCommentVoteDto } from './dto/update-comment-vote.dto';

@Controller('comment-vote')
export class CommentVoteController {
  constructor(private readonly commentVoteService: CommentVoteService) {}

  @Post()
  create(@Body() createCommentVoteDto: CreateCommentVoteDto) {
    return this.commentVoteService.create(createCommentVoteDto);
  }

  @Get()
  findAll() {
    return this.commentVoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentVoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentVoteDto: UpdateCommentVoteDto) {
    return this.commentVoteService.update(+id, updateCommentVoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentVoteService.remove(+id);
  }
}
