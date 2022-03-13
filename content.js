
setInterval(mainOperation, 3000);

var savedData, proposalsText, countriesText;
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
        proposalsText = jobPosts[i].querySelector('[data-test="proposals"]').innerText;
        countriesText = jobPosts[i].querySelector('.d-none > strong').innerText;

        if (proposalsText == "Less than 5"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.lt5;
        }else if (proposalsText == "5 to 10"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f5to10;
        }else if (proposalsText == "10 to 15"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f10to15;
        }else if (proposalsText == "15 to 20"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f15to20;
        }else if (proposalsText == "20 to 50"){
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.f20to50;
        }else {//bid count others
            jobPosts[i].style.backgroundColor = savedData.configuration.proposal.color.proother;
        }
        for (var j = 0; j < blockedCountriesLength; j++) {
            if (countriesText == savedData.configuration.countries.blocked.list[j]){//blocked country
                jobPosts[i].style.backgroundColor = savedData.configuration.countries.blocked.color;
            }
        }
        for (var j = 0; j < highlightedCountriesLength; j++) {
            if (countriesText == savedData.configuration.countries.highlighted.list[j]){//highlighted country
                jobPosts[i].style.backgroundColor = savedData.configuration.countries.highlighted.color;
            }
        }
    }
}

document.querySelectorAll('.up-card-list-section')
