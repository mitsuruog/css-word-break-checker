import "./options.css";

import { applyMassage } from "./shared/services/i18n";
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
  storeOptions({ ignoreSelectors: value });
});
