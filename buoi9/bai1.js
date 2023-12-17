let obj1 = {
    fullName: "Trần Hồng Quân",
    height: 1.68, 
    weight: 55,
    calcBMI: function() {
        return this.weight / (this.height * this.height);
    }
};

let obj2 = {
    fullname: "Nguyễn Nhật Huy",
    height: 1.65, 
    weight: 60, 
    calcBMI: function() {
        return this.weight / (this.height * this.height);
    }
}


console.log(`BMI obj1: ${obj1.calcBMI()}`);
console.log(`BMI obj2: ${obj2.calcBMI()}`);
if (obj1.calcBMI() > obj2.calcBMI()) console.log(`${obj1.calcBMI()} > ${obj2.calcBMI()}`);
else if(obj1.calcBMI() === obj2.calcBMI()) console.log(`${obj1.calcBMI()} = ${obj2.calcBMI()}`)
else console.log(`${obj1.calcBMI()} < ${obj2.calcBMI()}`);