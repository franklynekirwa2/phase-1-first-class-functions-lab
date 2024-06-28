const drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
 return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

     const createFareMultiplier = (multiplier)=>{
        return function (fare) {
            return fare * multiplier;
        };
    };
     const fareDoubler = createFareMultiplier(2);

     const fareTripler = createFareMultiplier(3);

     const selectDifferentDrivers = (drivers, selection)=>{
        return selection (drivers);
     };

 //const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

