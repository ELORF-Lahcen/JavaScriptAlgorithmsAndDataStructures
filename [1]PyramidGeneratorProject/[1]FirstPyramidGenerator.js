const character = "#";
const count = 20;
const rows = [];


for (let i=0; i < count; i++) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);