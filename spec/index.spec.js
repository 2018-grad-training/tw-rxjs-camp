import mapObservable from '../src/index';

describe('rxjs', () => {
  it('should map', () => {
    mapObservable().subscribe(value => {
      expect(value).toBe(2);
    });
  });
});
