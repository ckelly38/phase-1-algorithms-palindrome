function isPalindrome(word) {
  // Write your algorithm here
  if (word == undefined || word == null)
  {
    throw "word must be defined and not null!";
  }
  //else if (word.length == 0) return true;
  else
  {
    for(let n = 0; n < word.length/2; n++)
    {
      if (word.charAt(word.length - 1 - n) === word.charAt(n));
      else return false;
    }
    return true;
  }
}

/* 
  Add your pseudocode here
  palendromes are symetric
  meaning aba is a palendrome
  where the first character matches the last character in the word
  but not only that but acbca is also a palendrome
  the first character matches the last character and
  the second to last matches the second character and so on...
  but is an example of something that is not
  racecar is another palendrome of odd length (7)
  abba is a palendrome of even length (4)
  
  so a shortcut would be:
  base case length 0 is a palendrome return true
  base case the string must be defined, and it must not be null throw error
  divide the string length in half then get two parts
  if odd leave middle out
  aba has 3 characters in it
  the middle character is 3/2=1.5 but integer rounds down (truncates) to 1
  OPTION 1: we need to reverse the first part of the string
  then see if it matches the second part leaving out middle character if odd length
  if even length, both parts must equal each other for a return value of true
  OPTION 2: for each character at length - 1 - n and at n will match
  increment n and repeat
  if we get to the middle return true
  if at any time no match return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
