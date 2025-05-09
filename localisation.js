function localisation(direction){
  let table=["NORD","SUD"]
    let array=["EST","OUEST"];
    let str=[]
    for (let i=0; i<direction.length;i++){
  if ((i>1)&&(i<direction.length-1)) {
    if (((direction[i]==table[0])&&(direction[i+1]==table[1]))||((direction[i]==table[1])&&(direction[i+1]==table[0]))) {
      str.push(direction[i+1])
    }else if(((direction[i]==array[0])&&(direction[i+1]==array[1]))||((direction[i]==array[1])&&(direction[i+1]==array[0]))){
str.push(direction[i+1])
    }
  }
    }
    return str
}

console.log(localisation(["NORD","SUD","SUD","EST","OUEST","NORD","OEST"]));

console.log(localisation(["NORD","SUD","EST","NORD","OEST"]));