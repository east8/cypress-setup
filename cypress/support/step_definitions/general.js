// import { defineSupportCode } from 'cucumber';
const defineSupportCode = require('cucumber').defineSupportCode;


defineSupportCode(function ({Given, Then}) {
    Given(/^I launch "([^"]*)?"$/, function (url) {
        browser.url(url);
    })

    Then(/^go to the weather screen$/, function () {
        var weatherLink = $('.orb-nav-weather');
        weatherLink.waitForVisible(2000);
        weatherLink.click();
    })

    Then(/^search for weather by with postcode "([^"]*)?"$/, function (postcode) {
        var weatherSearch = $('#ls-c-search__input-label');
        weatherSearch.waitForVisible(2000);
        weatherSearch.setValue(postcode);
        browser.click('.ls-c-search__submit');
    })

    Then(/^I will see the results heading "([^"]*)?"$/, function(heading) {
        browser.waitForVisible('#wr-location-name-id', 3000);
        expect(browser.getText('h1#wr-location-name-id')).to.include(heading);
    })
});