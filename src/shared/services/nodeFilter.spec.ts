import { buildNodeFilter } from "./nodeFilter";

describe.each([
  ["#id", "[\"#id\"]"],
  ["#id\n.test", "[\"#id\",\".test\"]"],
  ["#id\n.test\n\n", "[\"#id\",\".test\"]"],
  ["#id\n\n\n.test", "[\"#id\",\".test\"]"],
])("Test buildNodeFilter", (input, expected) => {
  test(`should have ${expected} selector string`, () => {
    expect(buildNodeFilter(input)).toEqual(expect.stringContaining(expected));
  });
});
