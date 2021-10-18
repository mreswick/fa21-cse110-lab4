let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

function isOdd(num) {
    return (num % 2) != 0;
}

function startsWithR(string) {
    // note that I purposefully only
    // return the string if it starts with r,
    // not R, as the canvas question
    // stated the letter r without
    // explicitly stating the insignificance of
    // case.
    return string[0] === 'r';
}

for(let property in statistics)
{
    if(startsWithR(`${property}`) ||
     isOdd(statistics[`${property}`]))
    {
        console.log(property);
    }
}
