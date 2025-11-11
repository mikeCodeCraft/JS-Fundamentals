const args = process.argv.slice(2);

const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);

if (!isNaN(a) && args[1] !== undefined && !isNaN(b)) {
  console.log(a + b);
} else {
  console.log('NaN');
}
