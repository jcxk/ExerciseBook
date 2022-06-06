import { Exercise } from './exercise.entity';

describe('ExerciseEntity', () => {
  it('should be defined', () => {
    expect(new Exercise()).toBeDefined();
  });
});
