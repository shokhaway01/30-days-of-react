let newLine = 'Hello my name is kitty!'
let newLineArr = newLine.split(' ');
console.log(newLineArr);
// Тут вы можете заметить как работает метод сплит/split

let asli = Array(5).fill('xxx')

let first = Array(1).fill(1);
let second = Array(1).fill(2);
let third = Array(1).fill(3);

let both = first.concat(second.concat(third));


// Привет как ты и что делаешь


let berries = ['Strawberries', 'Bluebery','cherry'];
let exotics = ['banana','apple', 'orange','pineapple']

let fruits = berries.concat(exotics);

let index = fruits.indexOf('Bluebery');
console.log(index);



index != -1 
    ? console.log('This fruit does exist in the array')
    : console.log('Does not exist!!!');

// Чудо юдо
// а также существует метод тустринг, который переводит тип массива в строку

let arrToString = berries.toString();

// А еще здесь вы можете использовать оченнь большое количество новых методов для облегчения ваших задач 

console.log(arrToString);