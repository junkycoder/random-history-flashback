chrome.history.search(
  { text: "", maxResults: 100_000_000 },
  function redirectCurrentTabToRandomHistoryItemURL(data) {
    var randomHistoryItem = data[Math.floor(Math.random() * data.length)];
    var randomHistoryItemURL = randomHistoryItem.url;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: randomHistoryItemURL });
    });
  }
);
