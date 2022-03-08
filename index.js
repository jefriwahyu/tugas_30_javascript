function regex(kata){
  let str1 = kata.match(/e/g);
  let str2 = kata.match(/s/g);
  str1.splice(2,0,...str2)
  console.log(str1)
}

regex("Para tetua adat mendiskusikan masalah kejahatan ynag terjadi di rumah adat");
