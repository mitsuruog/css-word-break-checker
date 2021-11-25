
export function buildNodeFilter(ignoreSelectors: string) {
  const selectors = ignoreSelectors.split("\n").map(selector => `"${selector.trim()}"`);
  return `function nodeFilter(node) {
    if (
      [${selectors}].some(
        (item) => node.parentElement.closest(item) !== null
      )
    ) {
      return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  }
  `;
}