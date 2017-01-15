function repeatStringNumTimes(str, num) {
  // repeat after me
  palavra = "";
  if (num >= 0){
    for (x = 0; x<num ;x++){
      palavra = palavra + str;
    }
    return palavra;
  }else{
    return "";
  }
}
