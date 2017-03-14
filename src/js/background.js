window.yo = function() {
  alert('ha')
}
chrome.contextMenus.create({
  title: "Yo",
  contexts:["all"],
  onclick: yo,
});
