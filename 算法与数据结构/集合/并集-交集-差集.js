// 并集
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);

// 并集
console.log(new Set([...setA, ...setB]));


// 交集
console.log(new Set([...setA].filter(x => setB.has(x))));

// 差集
console.log(new Set([...setA].filter(x => !setB.has(x))));
