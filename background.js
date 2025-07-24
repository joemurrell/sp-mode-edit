chrome.action.onClicked.addListener((tab) => {
  if (!tab.url) return;

  try {
    let url = new URL(tab.url);

    // If "Mode" isn't already set, add it correctly
    if (!url.searchParams.has("Mode")) {
      const newParams = url.search ? `${url.search}&Mode=Edit` : `?Mode=Edit`;
      const baseUrl = url.origin + url.pathname + newParams + url.hash;
      chrome.tabs.update(tab.id, { url: baseUrl });
    }
  } catch (e) {
    console.error("Invalid URL or failed to update:", e);
  }
});