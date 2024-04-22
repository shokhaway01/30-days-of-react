let newLine = 'Hello my name is kitty!'
let newLineArr = newLine.split(' ');
console.log(newLineArr);
// Тут вы можете заметить как работает метод сплит/split

let asli = Array(5).fill('xxx')
// console.log(asli);

// А тут вы можете наблюдать как наш пустой массив заполняется статичными данными


// Чтобы вы могли прибавлять или объединить два или более массивов то вы можете использовать метод concat

let first = Array(1).fill(1);
let second = Array(1).fill(2);
let third = Array(1).fill(3);

let both = first.concat(second.concat(third));

// console.log(both);


let berries = ['Strawberries', 'Bluebery','cherry'];
let exotics = ['banana','apple', 'orange','pineapple']

let fruits = berries.concat(exotics);

let index = fruits.indexOf('Bluebery');
console.log(index);

index != -1 
    ? console.log('This fruit does exist in the array')
    : console.log('Does not exist!!!');
