const csv = require('./csv.js');
const fs = require('fs');

const buf = fs.readFileSync('./data.csv', 'utf8');
let arr = csv.parse(buf);
let titlearr = arr.shift();
arr = arr.map(function(item, i){
	var obj = {};
	for(let i=0; i<titlearr.length; i++) {
		obj[titlearr[i]] = item[i];
	}
	return obj;
})

fs.writeFile('./data.js', JSON.stringify(arr), err => {
	if(err) throw err;

	console.log('the file is written done!');
})