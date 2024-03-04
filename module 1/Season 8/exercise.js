////////////// EXERCISE ////////////////////////

function convertLetterToNumber(str) {
    const start = 96;
    const len = str.length;
    const out = [...str.toLowerCase()].reduce((out, char, pos) => {
      const val = char.charCodeAt(0) - start;
      const pow = Math.pow(26, len - pos - 1);
      return out + val * pow;
    }, 0);
    return out;
  }
  const testCase = ["AB"];
  const converted = testCase.map(convertLetterToNumber);
  console.log(converted);
  ///////////////////////////////////////////////////////////////////
  
  const arr = [4, 1, 2, 1, 2];
  
  findDup = (num) => {
    let result = num.filter((item, index) => {
      num.splice(index, 1);
      let hasil = !num.includes(item);
      num.splice(index, 0, item);
      return hasil;
    });
    return result;
  };
  
  console.log(findDup(arr));
  //////////////////////////////////////////////////////////////////
  
  const s = "anagram";
  const t = "nagaram";
  
  anagram = (str1, str2) => {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  };
  
  console.log(anagram(s, t));
  //////////////////////////////////////////////////////////////////
  
  findWays = (n) => {
    let n1 = 1;
    let n2 = 1;
    for (let i = 2; i <= n; i++) {
      let curr = n1 + n2;
      n2 = n1;
      n1 = curr;
    }
    return n1;
  };
  
  console.log(findWays(3));