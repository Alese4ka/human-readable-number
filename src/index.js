const arrFromNull = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const arrFromTwenty = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
module.exports = function toReadable (number) {
    if (number < 20 && number > 0){
        const word = arrFromNull[number];
        return word;
      }
      else if (number >= 20 && number < 100) {
        let digits = [];
        while (number) {
            digits.push(number % 10);
            number = Math.floor(number/10);
        }
        const word = `${arrFromTwenty[digits[1]]} ${arrFromNull[digits[0]]}`;
        return word.trim();
      }
      else if (number >= 100) {
        let digits = [];
        while (number) {
            digits.push(number % 10);
            number = Math.floor(number/10);
        }
        let to = (' ' + digits[1] + digits[0])*1;
        if(to < 20) {
            to = to.toString();
            to = Array.from([to]);
            const word = `${arrFromNull[digits[2]]} hundred ${arrFromNull[to[0]]}`;
            return word.trim();
        }
        else {
            const word = `${arrFromNull[digits[2]]} hundred ${arrFromTwenty[digits[1]]} ${arrFromNull[digits[0]]}`;
            return word.trim();
        }   
    }
    else if (number === 0) {
        return 'zero';
    }
    }

