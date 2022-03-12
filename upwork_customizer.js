setInterval(mainOperation, 3000);

var blockedCountries = ["India", "Pakistan", "Bangladesh", "Israel"];
var blockedCountriesLength = blockedCountries.length;

function mainOperation() {
    var countriesOfJobPosts = document.querySelectorAll('.d-none > strong');
    var len = countriesOfJobPosts.length;
    for (var i = 0; i < len; i++) {
        if (countriesOfJobPosts[i].parentElement.parentElement.previousSibling.previousSibling.childNodes[0].childNodes[2].innerText == "Less than 5"){//bid count
            countriesOfJobPosts[i].parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "#6fda44";
        }
        for (var j = 0; j < blockedCountriesLength; j++) {
            if (countriesOfJobPosts[i].innerText == blockedCountries[j]){//country
                countriesOfJobPosts[i].parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "silver";
            }
        }
    }
}

// browser.contextMenus.create({
//     title: "Block Country",
//     id: "upwork-block-country",
//     documentUrlPatterns: ["*://*.upwork.com/*"],
//     contexts: ["selection", "audio", "editable", "frame", "image", "link", "page", "password", "video"],
//     // onclick(info, tab) {
//     //   browser.tabs.executeScript(tab.id, {
//     //     frameId: info.frameId,
//     //     code: `console.log(browser.menus.getTargetElement(${info.targetElementId}));browser.menus.getTargetElement(${info.targetElementId}).remove();`,
//     //   });
//     // },
//   });

//   browser.contextMenus.onClicked.addListener(function(info, tab) {
//     switch (info.menuItemId) {
//       case "upwork-block-country":
//         console.log(info.selectionText);
//         console.log(info.targetElement);
//         break;
//     }
//   })

browser.contextMenus.create({
    id: "log-selection",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["selection"]
  }, onCreated);

browser.contextMenus.onClicked.addListener(function(info, tab) {
switch (info.menuItemId) {
    case "log-selection":
    console.log(info.selectionText);
    break;
}
})

function onCreated{
    console.log("created");
}
  