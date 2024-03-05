
setInterval(mainOperation, 3000);

var savedData, proposals, countries, jobPosts, blockedCountriesLength, highlightedCountriesLength;
var promise_pms = browser.storage.sync.get('configuration');
promise_pms.then((res) => {
  savedData = res;
});

function mainOperation() {
    // console.log(savedData.configuration);
    blockedCountriesLength = savedData.configuration.countries.blocked.list.length;
    highlightedCountriesLength = savedData.configuration.countries.highlighted.list.length;

    jobPosts = document.querySelectorAll('[data-ev-sublocation="job_feed_tile"]');
    if(jobPosts.length == 0){
        jobPosts = document.querySelectorAll('.job-tile');
    }

    var len = jobPosts.length;
    for (var i = 0; i < len; i++) {
        proposals = jobPosts[i].querySelector('[data-test="proposals"]');
        if(proposals === undefined || proposals === null){
            proposals= jobPosts[i].querySelector('[data-test="proposals-tier"]');
        }

        countries = jobPosts[i].querySelector('[data-test="client-country"]');
        if(countries === undefined || countries === null){
            var countries = jobPosts[i].querySelector('[data-test="location"]');
        }
        // console.log(proposals, countries);
        if (proposals.innerText == "Less than 5"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.lt5;
        }else if (proposals.innerText == "5 to 10"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f5to10;
        }else if (proposals.innerText == "10 to 15"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f10to15;
        }else if (proposals.innerText == "15 to 20"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f15to20;
        }else if (proposals.innerText == "20 to 50"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f20to50;
        }else {//bid count others
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.proother;
        }
        for (var j = 0; j < blockedCountriesLength; j++) {
            if (countries.innerText == savedData.configuration.countries.blocked.list[j]){//blocked country
                jobPosts[i].style.backgroundColor = savedData.configuration.countries.blocked.color;
            }
        }
        for (var j = 0; j < highlightedCountriesLength; j++) {
            if (countries.innerText == savedData.configuration.countries.highlighted.list[j]){//highlighted country
                jobPosts[i].style.backgroundColor = savedData.configuration.countries.highlighted.color;
            }
        }
    }
}

