function firstWord(s) {
  // your code here
	char=' '
  let res=''
  let space=s.indexOf(char)
  if(space>0){
  for(i=0;i<space;i++){
      res+=s[i]
  }}else{
      return s
  }
  return res
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
