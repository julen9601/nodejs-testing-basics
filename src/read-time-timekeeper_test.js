import tk from 'timekeeper';
import {is_afternoon} from './read-time';

test("Tells if it's afternoon or not (bis)", () => {
  [
    [0, false],
    [1, false],
    [2, false],
    [3, false],
    [4, false],
    [5, false],
    [6, false],
    [7, false],
    [8, false],
    [9, false],
    [10, false],
    [11, false],
    [12, true],
    [13, true],
    [14, false],
    [15, false],
    [16, false],
    [17, false],
    [18, false],
    [19, false],
    [20, false],
    [21, false],
    [22, false],
    [23, false],
  ].forEach(([hour, expectedResult]) => {
    const time = new Date(2014, 8, 1, hour, 0, 0, 0);
    tk.travel(time);
    expect(is_afternoon()).toBe(expectedResult);
    tk.reset();
  })
});