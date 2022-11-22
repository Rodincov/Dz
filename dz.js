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

