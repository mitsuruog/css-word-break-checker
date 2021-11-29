export function isValidSiteURL(url: string): boolean {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return false;
  }
  // due to "Unchecked runtime.lastError: The extensions gallery cannot be scripted."
  if (url.startsWith("https://chrome.google.com/webstore")) {
    return false;
  }
  return true;
}

export function isValidCSSSelector(value: string): boolean {
  try {
    document.querySelector(value);
    return true;
  } catch(e) {
    return false;
  }
}