
setInterval(mainOperation, 3000);

var blockedCountries = ["India", "Pakistan", "Bangladesh", "Israel"];
var blockedCountriesLength = blockedCountries.length;

function mainOperation() {
    var jobPosts = document.querySelectorAll('.up-card-list-section');
    var len = jobPosts.length;
    for (var i = 0; i < len; i++) {
        if (jobPosts[i].querySelector('[data-test="proposals"]').innerText == "Less than 5"){//bid count
            jobPosts[i].style.backgroundColor = "#6fda44";
        }
        for (var j = 0; j < blockedCountriesLength; j++) {
            if (jobPosts[i].querySelector('.d-none > strong').innerText == blockedCountries[j]){//country
                jobPosts[i].style.backgroundColor = "silver";
            }
        }
    }
}

document.querySelectorAll('.up-card-list-section')
