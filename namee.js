function go(){
console.log("hell")
let rand=Math.random()
let first,sec,thir
if(rand<0.33){
  first="crazy"
}
else if(rand>=0.33 && rand<0.66){
     first="amazing"                                     
    }
else{
    first="fire"
}
rand=Math.random()
if(rand<0.33){
    sec="engine"
  }
  else if(rand>=0.33 && rand<0.66){
       sec="food"                                     
      }
  else{
      sec="garment"
  }
  rand=Math.random()
  if(rand<0.33){
    thir="bros"
  }
  else if(rand>=0.33 && rand<0.66){
       thir="limited"                                     
      }
  else{
      thir="hub"
  }
  alert("rendom name is created..")
 alert(`${first} ${sec} ${thir}`)
}