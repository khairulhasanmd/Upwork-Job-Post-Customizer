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

