
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    return [...cats, name]
}

function prependCat(name) {
     return [name, ...cats]
}

function removeLastCat(name){
    const Cats = cats.slice(); 
     Cats.pop(name);   
      return Cats;
 }


function removeFirstCat(name){  
  const Cats = cats.slice();    
  Cats.shift(name);   
   return Cats;
}

