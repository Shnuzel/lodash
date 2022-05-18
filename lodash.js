const { sum } = require("lodash");
const _ = require("lodash")

// 3
const randomBetween2nums = (min, max) => {
    return _.random(min, max);
}

// 4
const minNum= (num)=>{
    return _.min(num);
}

// 5
const sumNum= (num)=>{
    return _.sum(num);
}
// 6
const capitalaize = (word)=>{
    return _.upperCase(word);
}
