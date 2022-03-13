
setInterval(mainOperation, 3000);

var savedData;
var promise_pms = browser.storage.sync.get('configuration');
// console.log(savedData);
promise_pms.then((res) => {
  savedData = res;
});



function mainOperation() {
    console.log(savedData.configuration);
    var blockedCountriesLength = savedData.configuration.countries.blocked.list.length;
    var highlightedCountriesLength = savedData.configuration.countries.highlighted.list.length;

    var jobPosts = document.querySelectorAll('.up-card-list-section');
    var len = jobPosts.length;
    for (var i = 0; i < len; i++) {
        if (jobPosts[i].querySelector('[data-test="proposals"]').innerText == savedData.configuration.proposal.trigger){//bid count
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.less;
        }
        for (var j = 0; j < blockedCountriesLength; j++) {
            if (jobPosts[i].querySelector('.d-none > strong').innerText == savedData.configuration.countries.blocked.list[j]){//blocked country
                jobPosts[i].style.backgroundColor = savedData.configuration.countries.blocked.color;
            }
        }
        for (var j = 0; j < highlightedCountriesLength; j++) {
            if (jobPosts[i].querySelector('.d-none > strong').innerText == savedData.configuration.countries.highlighted.list[j]){//highlighted country
                jobPosts[i].style.backgroundColor = savedData.configuration.countries.highlighted.color;
            }
        }
    }
}

document.querySelectorAll('.up-card-list-section')
