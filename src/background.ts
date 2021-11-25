import { isValidSiteURL } from "./shared/services/validation";
import { buildNodeFilter } from "./shared/services/nodeFilter";
import { restoreOptions } from "./shared/services/store";

chrome.browserAction.onClicked.addListener(({ url = "" }) => {
  if (!isValidSiteURL(url)) {
    return;
  }
  restoreOptions(options => {
    const { replacemetText, ignoreSelectors } = options;
    chrome.tabs.executeScript({
      code: `
    ;(function() {
      let node;
      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, ${buildNodeFilter(ignoreSelectors)}, false);
      while (node = walk.nextNode()) {
        if (node.textContent.trim()) {
          node.textContent = "${replacemetText}";
        }
      }
    })();
    `,
    });
  });
});
