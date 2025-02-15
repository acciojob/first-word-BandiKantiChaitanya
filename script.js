function firstWord(s) {
  // your code here
  char=' '
  let res=''
  let trimmedText=s.trim()
  let space=trimmedText.indexOf(char)
  if(space>0){
  for(i=0;i<space;i++){
      res+=trimmedText[i]
  }}else{
      return s
  }
  return res 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
