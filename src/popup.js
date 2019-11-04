import React from 'react'
import ReactDOM from 'react-dom'
import TabContoller from './tab-controller'
import { closeAllTabs, closeLeftTabs, cloesRightTabs } from "./close-tabs";



chrome.contextMenus.create({
  title: "他のすべてのタブを閉じる",
  type: "normal",
  contexts:["all"],
  onclick: function() {
    closeAllTabs()
  }
});

chrome.contextMenus.create({
  title: "右側のタブを閉じる",
  type: "normal",
  contexts:["all"],
  onclick: function(info) {
    cloesRightTabs()
  }
});

chrome.contextMenus.create({
  title: "左側のタブを閉じる",
  type: "normal",
  contexts:["all"],
  onclick: function() {
    closeLeftTabs()
  }
});

ReactDOM.render(
  <TabContoller />,
  document.getElementById('app'),
)
