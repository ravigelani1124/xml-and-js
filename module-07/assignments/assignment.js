const data = [
	{ born: 1870, died: 1924 },
	{ born: 1893, died: 1976 },
	{ born: 1869, died: 1948 },
	{ born: 1901, died: 1989 },
];

const ages = data.map(({ born, died }) => died - born);
console.log("Added age--",ages);

const filtered = ages.filter((age) => age > 75);
console.log('filtered--', filtered);

const oldest = filtered.reduce((acc, age) => {
	if (age > acc) {
		acc = age;
	}
	return acc;
}, 0);
console.log('oldest--', oldest);

// using chain
const age = data
	.map(({ born, died }) => died - born)
	.filter((age)=> age > 75)
	.reduce((age, temp) => {
		if (age > temp) {
			temp = age;
		}
		return temp;
	}, 0);

console.log("Using chain--",age)
