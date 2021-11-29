import "./options.css";

import { applyMassage } from "./shared/services/i18n";
import { isValidCSSSelector } from "./shared/services/validation";
import { storeOptions, restoreOptions } from "./shared/services/store";

applyMassage();

const $replacemetText =
  document.getElementById("replacement_text") as HTMLTextAreaElement;
const $ignoreSelectors = document.getElementById(
  "ignore_selectors"
) as HTMLTextAreaElement;

document.addEventListener("DOMContentLoaded", () => {
  restoreOptions((options) => {
    const { replacemetText, ignoreSelectors} = options;
    $replacemetText.value = replacemetText.toString();
    $ignoreSelectors.value = ignoreSelectors.toString();
  });
});

$replacemetText.addEventListener("input", (e) => {
  const { value } = e.target as HTMLTextAreaElement;
  storeOptions({ replacemetText: value });
});

$ignoreSelectors.addEventListener("input", (e) => {
  const { value } = e.target as HTMLTextAreaElement;
  const isValid = value
    .trim()
    .split("\n")
    .every((selector) => isValidCSSSelector(selector));
  if (isValid) {
    $ignoreSelectors.closest("div").classList.remove("has-error");
    storeOptions({ ignoreSelectors: value });
  } else {
    $ignoreSelectors.closest("div").classList.add("has-error");
  }
});
