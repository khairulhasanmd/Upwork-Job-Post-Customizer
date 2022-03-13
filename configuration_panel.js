document.addEventListener("click", (e) => {

    // function getCurrentWindow() {
    //   return browser.windows.getCurrent();
    // }
  
    // if (e.target.id === "window-update-size_768") {
    //   getCurrentWindow().then((currentWindow) => {
    //     var updateInfo = {
    //       width: 768,
    //       height: 1024
    //     };
  
    //     browser.windows.update(currentWindow.id, updateInfo);
    //   });
    // }
  
    // if (e.target.id === "window-update-minimize") {
    //   getCurrentWindow().then((currentWindow) => {
    //     var updateInfo = {
    //       state: "minimized"
    //     };
  
    //     browser.windows.update(currentWindow.id, updateInfo);
    //   });
    // }
  
    // else if (e.target.id === "window-create-normal") {
    //   let createData = {};
    //   let creating = browser.windows.create(createData);
    //   creating.then(() => {
    //     console.log("The normal window has been created");
    //   });
    // }
  
    // else if (e.target.id === "window-create-incognito") {
    //   let createData = {
    //     incognito: true,
    //   };
    //   let creating = browser.windows.create(createData);
    //   creating.then(() => {
    //     console.log("The incognito window has been created");
    //   });
    // }
  
    // else if (e.target.id === "window-create-panel") {
    //   let createData = {
    //     type: "panel",
    //   };
    //   let creating = browser.windows.create(createData);
    //   creating.then(() => {
    //     console.log("The panel has been created");
    //   });
    // }
  
    // else if (e.target.id === "window-create-detached-panel") {
    //   let createData = {
    //     type: "detached_panel",
    //   };
    //   let creating = browser.windows.create(createData);
    //   creating.then(() => {
    //     console.log("The detached panel has been created");
    //   });
    // }
  
    // else if (e.target.id === "window-create-popup") {
    //   let createData = {
    //     type: "popup",
    //   };
    //   let creating = browser.windows.create(createData);
    //   creating.then(() => {
    //     console.log("The popup has been created");
    //   });
    // }
  
    // else if (e.target.id === "window-remove") {
    //   getCurrentWindow().then((currentWindow) => {
    //     browser.windows.remove(currentWindow.id);
    //   });
    // }
  
    // else if (e.target.id === "window-resize-all") {
    //   var gettingAll = browser.windows.getAll();
    //   gettingAll.then((windows) => {
    //     var updateInfo = {
    //       width: 1024,
    //       height: 768
    //     };
    //     for (var item of windows) {
    //       browser.windows.update(item.id, updateInfo);
    //     }
    //   });
    // }
  
    // else if (e.target.id === "window-preface-title") {
    //   getCurrentWindow().then((currentWindow) => {
    //     let updateInfo = {
    //       titlePreface: "Preface | "
    //     }
    //     browser.windows.update(currentWindow.id, updateInfo);
    //   });
    // }
  
    // e.preventDefault();
  });
  
  function saveOptions(e) {
    browser.storage.sync.set({
      configuration: {
        countries: {
          blocked: {
            list: document.querySelector("#blocked_countries").value.split(","),
            color: document.querySelector("#blocked_countries_color").value
          },
          highlighted: {
            list: document.querySelector("#highlight_countries").value.split(","),
            color: document.querySelector("#highlight_countries_color").value
          },
        },
        proposal: {
          trigger: document.querySelector("#proposals_trigger").value,
          color: {
            less: document.querySelector("#proposals_trigger_less_than_equal_color").value,
            greater: document.querySelector("#proposals_trigger_greater_than_color").value
          }
        }
      }
    });
    e.preventDefault();
    console.log("saved");
    var savedData = browser.storage.sync.get('configuration');
    savedData.then((res) => {
      console.log(res.configuration.countries);
    });
  }
  
  function restoreOptions() {
    var savedData = browser.storage.sync.get('configuration');
    savedData.then((res) => {
      document.querySelector("#blocked_countries").value = res.configuration.countries.blocked.list.join(",") || "India,Bangladesh,Pakistan";
      document.querySelector("#blocked_countries_color").value = res.configuration.countries.blocked.color || "silver";
      document.querySelector("#highlight_countries").value = res.configuration.countries.highlighted.list.join(",") || "United States";
      document.querySelector("#highlight_countries_color").value = res.configuration.countries.highlighted.color || "#8ab7ff";
      document.querySelector("#proposals_trigger").value = res.configuration.proposal.trigger || "Less than 5";
      document.querySelector("#proposals_trigger_less_than_equal_color").value = res.configuration.proposal.color.less || "#8ab7ff";
      document.querySelector("#proposals_trigger_greater_than_color").value = res.configuration.proposal.color.greater || "silver";
    });

    console.log("Restored");
  }
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.querySelector("#form").addEventListener("submit", saveOptions);