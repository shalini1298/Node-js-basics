const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.alloc(10, 1);
console.log(buf2);
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);
