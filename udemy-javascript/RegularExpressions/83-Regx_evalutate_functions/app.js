let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // Global search

// console.log(re);
//실제로 안에 있는 값을 알려준다.
// console.log(re.source);

// exec() - Return result in an array or null
// 배열 형태로 내보낸다. 찾은 문자열의 index를 같이 리턴하고 만약 없으면 null을 리턴한다.
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]); //hello
// console.log(result.index); //0
// console.log(result.input);// hello world

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found returns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);