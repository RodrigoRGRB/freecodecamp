
function titleCase(str) {
  string = str.split(" ");
  nova = "";
  teste = [];
  for(x  = 0; x < string.length;x++){
    
    for(i = 0;i < string[x].length;i++){
      if(i === 0){
        nova = nova + string[x][i].toUpperCase();
        
      }else{
        nova = nova + string[x][i].toLowerCase();
      }
     
       
    }
    teste.push(nova);
    nova = "";
     
    
  }
  return teste.join(" ");
   
}

titleCase("I'm a little tea pot");
