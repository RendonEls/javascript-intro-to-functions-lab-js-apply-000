function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

whisper("I'M SHOUTING HELLO")

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }
    if(string.toUpperCase() === string) {
  return "YES INDEED!"
}

if("I love you, Grandma." === string) {
  return "I love you, too."
}

}
=======
  if (string.toLowerCase() === string)
    return "I can't hear you!"
    
    if(string.toUpperCase() === string) {
  return "YES INDEED!"
}
}
>>>>>>> e18771c639f2e56665ced0dcbccdc39f2480dbdd
