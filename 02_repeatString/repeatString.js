const repeatString = function(string, num) {
    let value = "";
    if(num >= 0){
        for (let i = 0; i < num; i++) {
            value += string
        }
        return value;
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
