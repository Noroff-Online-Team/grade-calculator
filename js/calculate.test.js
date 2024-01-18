import { calculate } from "./calculate.js";
import {
  totalAboveZeroError,
  valueAndTotalTypeStringError,
  valueBetweenZeroAndTotalError,
} from "./errors.js";

describe("Calculate function", () => {
  it("returns an A for a 10/10 score", () => {
    expect(calculate(10, 10)).toEqual("A");
  });

  it("returns a B for a 8/10 score", () => {
    expect(calculate(8, 10)).toEqual("B");
  });

  it("returns a C for a 7/10 score", () => {
    expect(calculate(7, 10)).toEqual("C");
  });

  it("returns a D for a 5/10 score", () => {
    expect(calculate(5, 10)).toEqual("D");
  });

  it("returns an E for a 4/10 score", () => {
    expect(calculate(4, 10)).toEqual("E");
  });

  it("returns an F for a 0/10 score", () => {
    expect(calculate(0, 10)).toEqual("F");
  });

  it("does something for a 0.1/0.1", () => {
    expect(calculate(0.1, 0.1)).toEqual("A");
  });

  it("throws an error for a -10/10 score", () => {
    expect(() => {
      calculate(-10, 10);
    }).toThrow(valueBetweenZeroAndTotalError);
  });

  it("throws an error for a 10/-10 score", () => {
    expect(() => {
      calculate(10, -10);
    }).toThrow(totalAboveZeroError);
  });

  it("throws an error for a '10'/10 score", () => {
    expect(() => {
      calculate("10", 10);
    }).toThrow(valueAndTotalTypeStringError);
  });

  it("throws an error for a 10/'10' score", () => {
    expect(() => {
      calculate(10, "10");
    }).toThrow(valueAndTotalTypeStringError);
  });
});
