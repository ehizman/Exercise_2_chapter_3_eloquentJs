console.log('💵 💵 💵 💵');
console.log('Welcome to my program!');

let N = Number(prompt('Enter a whole number'));
if (!Number.isInteger(N)){
    console.log('You can enter only integers');
}
else {
    console.log(N + isEven(N));
}

function isEven(M) {
    if (M === 0) {
        return (' is even');
    }
    
    else if (M === 1) {
        return (' is odd');
    }
    
    else if (M > 1) {
        let state = isEven (M - 2);
        return (state);
    }
    
    else{
        let state = isEven (M + 2);
        return (state);
    }
}