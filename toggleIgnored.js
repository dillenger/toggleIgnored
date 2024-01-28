function handleClick() {
  browser.toggleIgnoredApi.toggleIgnored();
};

browser.browserAction.onClicked.addListener(handleClick);
