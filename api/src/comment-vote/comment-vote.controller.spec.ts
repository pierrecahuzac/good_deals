import { Test, TestingModule } from '@nestjs/testing';
import { CommentVoteController } from './comment-vote.controller';
import { CommentVoteService } from './comment-vote.service';

describe('CommentVoteController', () => {
  let controller: CommentVoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentVoteController],
      providers: [CommentVoteService],
    }).compile();

    controller = module.get<CommentVoteController>(CommentVoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
