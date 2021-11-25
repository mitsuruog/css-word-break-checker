export type Options = {
  replacemetText: string;
  ignoreSelectors: string;
}

const DEFAULT_VALUES = Object.freeze({
  replacemetText:
    "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
  ignoreSelectors: "button\niframe",
});

export function restoreOptions(callback?: (options: Options) => void) {
  chrome.storage.sync.get(Object.keys(DEFAULT_VALUES), (result) => {
    const { replacemetText, ignoreSelectors } = result;
    const options = {
      replacemetText: replacemetText || DEFAULT_VALUES.replacemetText,
      ignoreSelectors: ignoreSelectors || DEFAULT_VALUES.ignoreSelectors,
    };
    if (typeof callback === "function") {
      callback(options);
    }
  });
}

export function storeOptions(options: Partial<Options>, callback?: (options: Options) => void) {
  chrome.storage.sync.set(options, () => {
    restoreOptions(callback);
  });
}
