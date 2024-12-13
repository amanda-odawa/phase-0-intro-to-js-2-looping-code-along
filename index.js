// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
const names = ["Guadalupe", "Ollie", "Aki"]

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  };

  return gifts;
};

wrapGifts(gifts);


function writeCards(names) {
    let messages = [];
    for(let a = 0; a < names.length ; a++) {
        messages.push(`Thank you, ${names[a]}, for the wonderful surprise gift!`);
        debugger;
    };

    return messages;
};

writeCards(names);


function countDown(x) {
    while(x >= 0) {
        console.log(x);
        x--;
    };
};

countDown(10)