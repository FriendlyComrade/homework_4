

function concatStrings (str, separator) {
    return function (nextStr) {
        if (typeof nextStr !== 'string'){

            return str;
            
        } else {

            if (separator && typeof separator === 'string') {

                return concatStrings (`${str}${separator}${nextStr}`, separator);

            
            } else {

            return concatStrings (`${str}${nextStr}`);

            }    
            
        } 
    };
}



class Calculator {

    constructor(num1, num2) {

        if (Number.isSafeInteger(num1) || Number.isSafeInteger(num2)) {
            this.num1 = num1;
            this.num2 = num2;
            this.setX = this.setX.bind(this);
            this.setY = this.setY.bind(this); 
            this.logSum = this.logSum.bind(this);
            this.logSub = this.logSub.bind(this);
            this.logMul = this.logMul.bind(this);
            this.logDiv = this.logDiv.bind(this);
        } else {
            throw new Error ('Ошибка!');
        }
    }

    setX(num) {

        if (num && Number.isSafeInteger(num)) {
            this.num1 = num;
        } else {
            throw new Error ('Ошибка!');
        }    
    }

    setY(num) {

        if (num && Number.isSafeInteger(num)) {
            this.num2 = num;
        } else {
            throw new Error ('Ошибка!');
        }    
    }
    
    logSum() {
        console.log(this.num1 + this.num2); 
    }

    logMul() {
        console.log(this.num1 * this.num2);
    }

    logSub() {
        console.log(this.num1 - this.num2);
    }

    logDiv() {

        if (this.num2 !== 0) {
            console.log(this.num1 / this.num2);
        } else {
            throw new Error ('Ошибка!');
        }
    }
}


