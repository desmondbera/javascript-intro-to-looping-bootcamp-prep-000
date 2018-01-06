function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 0 || i ===1) {
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops`);
    }
  }
  return array;
}

function whileLoop(num) {
  let countdown = num 
  while(countdown > 0) {
    console.log(--countdown)
  }
}



