import { Test, TestingModule } from '@nestjs/testing';
import { CommentVoteService } from './comment-vote.service';

describe('CommentVoteService', () => {
  let service: CommentVoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentVoteService],
    }).compile();

    service = module.get<CommentVoteService>(CommentVoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
