function PascalTriangle(n) {
    if (n <= 0) {
      return [];
    }
  
    const tg = [[1]];
  
    for (let i = 1; i < n; i++) {
      const t = tg[i - 1];
      const s = [1];
  
      for (let j = 1; j < i; j++) {
        s[j] = t[j - 1] + t[j];
      }
  
      s.push(1);
      tg.push(s);
    }
  
    return tg;
  }
  
  console.log(PascalTriangle(5));
  
  console.log(PascalTriangle(1));