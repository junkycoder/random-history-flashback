chrome.history.search(
  {
    text: "",
    maxResults: 100_000_000,
    startTime: Date.now() - 1000 * 60 * 60 * 24 * 30 * 2, // 2 months ago
    endTime: Date.now() - 1000 * 60 * 60 * 24 * 30 * 1, // 1 month ago
  },
  function redirectCurrentTabToRandomHistoryItemURL(data) {
    console.info(`Found ${data.length} history items.`);
    var randomHistoryItem = data[Math.floor(Math.random() * data.length)];
    var randomHistoryItemURL = randomHistoryItem.url;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.info(`Redirecting current tab to ${randomHistoryItemURL}.`);
      chrome.tabs.update(tabs[0].id, { url: randomHistoryItemURL });
      debugger;
      window.close();
    });
  }
);
