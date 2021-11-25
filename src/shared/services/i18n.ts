const MESSAGE_ATTRIBUTE_SELECTOR = "[data-message-key]";

export function applyMassage() {
  document.querySelectorAll(MESSAGE_ATTRIBUTE_SELECTOR).forEach($element => {
    const message = chrome.i18n.getMessage(($element as HTMLElement).dataset.messageKey);
    $element.textContent = message;
  });
}
