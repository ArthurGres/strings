let str = 'Dima Kolya Dima Tanya Vova Igor Vova Dima';
let count = 0;
let subStr = (prompt('Enter: Dima Kolya Tanya Vova Igor'));
let p = str.toLowerCase().indexOf( subStr.toLowerCase() );


function countSubStr() {

    if (count >= 1) {
        alert ('Find matches ' + count);
    }
}

while (p !== -1) {
    
    p = str.toLowerCase().indexOf(subStr.toLowerCase(), p + 1);
    count++;
    if (count >= 1) {
        countSubStr();
    } else {
        alert ('No matches');
    }
}
console.log(count);