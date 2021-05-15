let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character . 자리에 뭐가 와도 된다~ 꼭 1개
re = /h*llo/i;      // Matches any character 0 or more times 0개 이상
re = /gre?a?y/i;    // Optional character e와 a는 optional
re = /gre?a?y\?/i;    // Escape character 


// String to match
const str = 'Gray?';


// Log Results
const result = re.exec(str);
console.log(result);

//정규표현식이 문자열과 맞는지 확인하는 함수
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);