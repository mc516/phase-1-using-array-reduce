const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let intialValue = 0;
let totalBatteries = batteryBatches.reduce(function (accumulator, element) {
    return element + accumulator;
}, intialValue)
