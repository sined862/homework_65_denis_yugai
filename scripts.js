//Задание 1
const listProducts = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']

for (let i=0; i < listProducts.length; i++) {
    if (listProducts[i] == 'молоко') {
        console.log('хорошо')
    }
    else {
        console.log('плохо')
    }
}

//Задание 2
const arrayNumbers1 = [1, 5, 12, 4, 3]
const arrayNumbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayNumbers3 = [3, 10, 17]

function avgNumbers(anyArray) {
    let sumNumbers = 0
    for (i=0; i < anyArray.length; i++) {
        sumNumbers += anyArray[i]
    }
    let avgNumbers = sumNumbers / anyArray.length
    return avgNumbers
}

console.log(avgNumbers(arrayNumbers1))
console.log(avgNumbers(arrayNumbers2))
console.log(avgNumbers(arrayNumbers3))