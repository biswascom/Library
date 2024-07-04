const a = [12, 22, 44, 56, 1, 3, 0, 10];
const b = 45;

function sum(arr) {
    let result = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result = result + arr[i]
        }
    }
    return result;
}

console.log(sum(a));