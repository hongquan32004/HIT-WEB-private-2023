function incrementDigits(digits) {
    return (BigInt(digits) + 1n).toString().split('').map(Number);
  }
  
  
  console.log(incrementDigits(1234));  
  console.log(incrementDigits(99999));