function dichuyen0(nums) {
    let a = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == 0){
            a.push(0);
        }
        else {
            a.unshift(nums[i]);
        }
    }
    return a;
}

console.log(dichuyen0([0,1,0,3,12]));
console.log(dichuyen0([0]));