import { isValidSiteURL, isValidCSSSelector } from "./validation";

describe.each([
  ["", false],
  ["mitz.com", false],
  ["ftp://mitz.com", false],
  ["http://mitz.com", true],
  ["https://mitz.com", true],
  ["https://chrome.google.com/webstore", false],
])("Test isValidSiteURL", (input, expected) => {
  test(`should return ${expected} with ${input}`, () => {
    expect(isValidSiteURL(input)).toBe(expected);
  });
});

describe.each([
  [".class", true],
  [".class.class", true],
  [".class .class", true],
  ["#id", true],
  ["*", true],
  ["element", true],
  ["element.class", true],
  ["element,element", true],
  ["element element", true],
  ["element>element", true],
  ["element+element", true],
  ["element~element", true],
  ["[attribute]", true],
  ["[attribute=value]", true],
  ["[attribute~=value]", true],
  ["[attribute|=value]", true],
  ["[attribute^=value]", true],
  ["[attribute$=value]", true],
  ["[attribute*=value]", true],
  ["", false],
  ["[", false],
])("Test isValidCSSSelector", (input, expected) => {
  test(`should return ${expected} with ${input}`, () => {
    expect(isValidCSSSelector(input)).toBe(expected);
  });
});