import { dongCalculator } from "..";
const entries = [
  {
    name: "mehdi",
    amount: 0,
  },
  {
    name: "alireza",
    amount: 120,
  },
  {
    name: "amin",
    amount: 183,
  },
  {
    name: "mamad",
    amount: 0,
  },
  {
    name: "hossein",
    amount: 570,
  },
];
const result = [
  {
    from: "mehdi",
    to: "amin",
    amount: 8.4,
  },
  {
    from: "mehdi",
    to: "hossein",
    amount: 166.2,
  },
  {
    from: "alireza",
    to: "hossein",
    amount: 54.6,
  },
  {
    from: "mamad",
    to: "hossein",
    amount: 174.6,
  },
];
describe("calc dong", () => {
  it("should calculate", () => {
    const founded = dongCalculator(entries);

    expect(founded).toMatchSnapshot();
  });
});
