chrome.devtools.panels.create("Jonner",
    "MyPanelIcon.png",
    "panel.html",
    function(panel) {
      // code invoked on panel creation
    }
);
chrome.devtools.panels.elements.createSidebarPane("Jonner",
    function(sidebar) {
        // sidebar initialization code here
        sidebar.setObject({ some_data: "Some data to show" });
});
console.log(chrome)

chrome.devtools.panels.elements.onSelectionChanged.addListener(function(){
  // chrome.devtools.inspectedWindow.eval("$0.innerText='hehe'");
});
