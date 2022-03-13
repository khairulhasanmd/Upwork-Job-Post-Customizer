
setInterval(mainOperation, 3000);

var savedData = browser.storage.sync.get('configuration');
console.log(savedData);
// savedData.then((res) => {
//   document.querySelector("#blocked_countries").value = savedData.countries.blocked.list.join(",") || "India,Bangladesh,Pakistan";
//   document.querySelector("#blocked_countries_color").value = savedData.countries.blocked.color || "silver";
//   document.querySelector("#highlight_countries").value = savedData.countries.highlighted.list.join(",") || "United States";
//   document.querySelector("#highlight_countries_color").value = savedData.countries.highlighted.color || "#8ab7ff";
//   document.querySelector("#proposals_trigger").value = savedData.proposal.trigger || "Less than 5";
//   document.querySelector("#proposals_trigger_less_than_equal_color").value = savedData.proposal.color.less || "#8ab7ff";
//   document.querySelector("#proposals_trigger_greater_than_color").value = savedData.proposal.color.greater || "silver";
// });

var blockedCountriesLength = savedData.countries.blocked.list;

function mainOperation() {
    var jobPosts = document.querySelectorAll('.up-card-list-section');
    var len = jobPosts.length;
    for (var i = 0; i < len; i++) {
        if (jobPosts[i].querySelector('[data-test="proposals"]').innerText == savedData.proposal.trigger){//bid count
            jobPosts[i].style.backgroundColor = savedData.proposal.color.less;
        }
        for (var j = 0; j < blockedCountriesLength; j++) {
            if (jobPosts[i].querySelector('.d-none > strong').innerText == savedData.countries.blocked.list[j]){//country
                jobPosts[i].style.backgroundColor = "silver";
            }
        }
    }
}

document.querySelectorAll('.up-card-list-section')
