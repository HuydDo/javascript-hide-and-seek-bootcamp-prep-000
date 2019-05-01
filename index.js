function getFirstSelector (selector){
  return document.querySelector(selector);
}


function nestedTarget(){
   return document.querySelector('div.target')
}

function deepestChild(){
  let div = document.getElementById('grand-node');
  let nextdiv = div.children[0];
  while (nextdiv){
    div = nextdiv;
    nextdiv = div.children[0];
  }
  return div;
}

function increaseRankBy(n){
  const div = document.querySelectorAll('.rankedlist')
  for (let i = 0; i< div.length; i++){
   div[i].innerHTML = parseInt(i + n);
  }
}