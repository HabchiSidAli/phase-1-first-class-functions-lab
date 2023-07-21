const returnFirstTwoDrivers = function (drivers) {
    return (drivers.slice(0, 2));
}

const returnLastTwoDrivers = function (drivers) {
    return (drivers.slice(drivers.length - 2, drivers.length));
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return ((fare) => fare * multiplier);
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, selectDifferentDrivers) {
    return selectDifferentDrivers(drivers);
}