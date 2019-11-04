const closeAllTabs = () => {
  chrome.tabs.query({}, function (tabs) {
    for (let tab of Object.values(tabs)) {
      const { active, id, pinned, audible } = tab;
      if (pinned || audible) {
        continue
      }
      if (!active) {
        chrome.tabs.remove(id, () => { });
      }
    }
  });
};

const closeLeftTabs = () => {
  chrome.tabs.query({}, function (tabs) {
    for (let tab of Object.values(tabs)) {
      const { active, id, pinned, audible } = tab;
      if (pinned || audible) {
        continue
      }
      if (!active) {
        chrome.tabs.remove(id, () => { });
      } else {
        break
      }
    }
  });
}

const cloesRightTabs = () => {
  let isRight = false
  chrome.tabs.query({}, function (tabs) {
    for (let tab of Object.values(tabs)) {
      const { active, id, pinned, audible } = tab;
      if (pinned || audible) {
        continue
      }
      if (active) {
        isRight = true
        continue
      } else if (isRight) {
        chrome.tabs.remove(id, () => { });
      }
    }
  });
}

export {
  closeAllTabs,
  closeLeftTabs,
  cloesRightTabs
}