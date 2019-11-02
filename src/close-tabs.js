export default () => {
    chrome.tabs.query({}, function(tabs) {
      for (let tab of Object.values(tabs)) {
        const { active, id } = tab;
        if (!active) {
          chrome.tabs.remove(id, () => {});
        }
      }
    });
  };