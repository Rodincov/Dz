// let arr = [1,3,4,5,6,7,8,9]

// let obj = {
//     name: 'test1',
//     lastname: 'test2',
//     age: 33,
//     city: 'test4',
//     status: 'test5'
// }

// for (let value of arr) { /// for array
//     console.log(value);
// }

// for (let key in obj) { /// for object
//     console.log(key, obj[key]);
// }




// let arr = [1,3,4,5,6,7,8,9]
// let arr2 = []
// arr.forEach( function(value) {
//     if(value < 4 ) {
//         arr2.push(value)
//     }
// })
// console.log(arr2);





// let arr = [
//     {
//         id: 1,
//         username: 'username1',
//         city: 'test1'
//     },
//     {
//         id: 2,
//         username: 'username2',
//         city: 'test2'
//     },
//     {
//         id: 3,
//         username: 'username3',
//         city: 'test3'
//     },
// ];

// arr.forEach( (value) => {
//     console.log(value.id, value.username);
// })





// let arr = [1,4,8,2,99,55,33,11,22];

// arr.sort( (a, b) => b > a ? 1:-1 )
// // arr.sort( (a, b) => b - a )
// console.log(arr);


// let cities = [
//     {
//         cityName: 'Almaty',
//         population: 2000000
//     },
//     {
//         cityName: 'Moscow',
//         population: 20000000
//     },
//     {
//         cityName: 'Astana',
//         population: 1000000
//     },
//     {
//         cityName: 'New-York',
//         population: 8500000
//     },
//     {
//         cityName: 'Taraz',
//         population: 200000
//     },
// ]

// cities.sort( (a, b) => a.population - b.population ) /// sorturivka po populyatsii
// console.log(cities)
// cities.sort(function(a, b) {
//     if (b.cityName > a.cityName) {
//         return 1
//     } else {
//         return -1
//     }
// }) // sortirovka po alfavity

// cities.sort( (a, b) => a.cityName > b.cityName ? 1:-1) /// pregpochtitelnee takaya zapis'

// console.log(cities)




// cities.sort( function(a, b) {
//     if (a.population > b.population) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(cities);

// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0
// arr.forEach( (value) => {
//     sum = sum + value
    
// })
// console.log(sum)
// let deg = []
// arr.forEach( (value) => {
//     deg.push(value ** value)
    
// })
// console.log(deg)



/// 1 используя forEach верните сумму всех чисел в массиве
// let sum = 0
// arr.forEach( value => { //forEach
//     sum += value
// })
// console.log(sum);

// for (let i = 0; i < arr.length; i++) { // for
//     sum += arr[i]
// }

// for (let value of arr) { // for of
//     sum += value
// }
// console.log(sum);


// let sum = arr.reduce( (prev, curr) => { return prev+curr }, 0)
// console.log(sum);

// // prev = 0 + 1 = 1
// //        1 + 2 = 3

// Способ рещения к задаче 1


/// 2 используя forEach вернуть массив где все значения возведены в собственную степень

// let test = []
// arr.forEach( value => {
//     test.push(value**value)
// })
// console.log(test);



// let test = arr.map( value => value**value);
// console.log(test);

// // рещение к задаче 2


// let arr = [-1, -2, 4, 8, 22, 15, 33, 55]

// // let test = []
// // arr.forEach( value => {
// //     if (value > 10) {
// //         test.push(value)
// //     }
// // })
// // console.log(test);

// // let test = arr.filter( value => value > 10)
// //               .sort( (a, b) => a > b ? 1:-1);
// // console.log(test);

// Пример фильтрации



const products = [
    {
      id: 1,
      img: 'macbook.jpg',
      title: 'MacBook',
      price: 100,
    },
    {
      id: 2,
      img: 'apple-watch.jpg',
      title: 'Apple watch',
      price: 40,
    },
    {
      id: 3,
      img: 'mac-pro.jpg',
      title: 'Mac Pro',
      price: 190,
    },
    {
      id: 4,
      img: 'ipad.jpg',
      title: 'iPad',
      price: 60,
    },
    {
      id: 5,
      img: 'iphone.jpg',
      title: 'iPhone',
      price: 40,
    },
  ];

  // let sum = 0;

  // products.forEach(value => {
  //   sum = sum + value.price
  //   console.log('Price is $' + sum)
  // })/ ///1111111

  // products.forEach(value => {
  //   console.log(value.title)
  // }) ///// 2222222222222222


//   let sum = 0
//   products.forEach(value => {
//     if(value.price > 50) {
//       sum = sum + value.price
//     }
//   })
// console.log(sum) /// 3 33333




  // 1
  
  // из массива врернуть сумму всех продуктов
  
  // 2
  // вернуть название всех продуктов в коносль
  
  // 3 Отоброать продукты, цена которых больше 50, и вернуть сумму этих товаров
  

    /////11111111111111111111111111111 2222222222222222222222222

  let arr = [1, -2, 3, 0, 4, -5, 6, -11];
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      break
    } else {
      sum += arr[i]    
    }
  }
  console.log(sum)


  let arrReverse = arr.reverse()
  let sumRev = 0 
    for (let i = 0; i < arrReverse.length; i++) {
      if(arrReverse[i] === 0) {
        break
      } else {
        sumRev += arrReverse[i]    
      }
    }
    console.log(sumRev)






// arr.forEach(value => {
//   if (value != 0){
//     sum = sum + value
//     console.log(sum)   
//   } else if (value === 0){
//     console.log(sum)
//     return
//   }
// }
// )


// 1 нужно вернуть сумму чисел до первого нуля
// 2 вернуть сумму чисел с конца, до первого нуля в массиве

