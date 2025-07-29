//////////////////////////////////////////////////////////BUSINESS NAME GENERATOR////////////////////////////////////////////////////////////////

/*
ADJECTIVES:
crazy
amazing
fire

SHOP NAME:
engine 
foods
garments

ANOTHER WORD:
bros
limited 
hub
*/

let adj = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};

let shop = {
  1: " Engines ",
  2: " Foods ",
  3: " Gaments ",
};

let word = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

let a=Math.floor(Math.random()*3)+1
let b=Math.floor(Math.random()*3)+1
let c=Math.floor(Math.random()*3)+1

let SHOP= adj[a]+shop[b]+word[c]

console.log(SHOP)
