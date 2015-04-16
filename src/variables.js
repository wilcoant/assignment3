/*
Input:
a: a whole, positive number

Output:
plus5: a number that is the sum of 5 and `a`
asString: a string that is just `a` converted to a string
yourNumberIs: a string that says "Your Number is `x`." where `x` is replaced by
in input `a`
a: the original a number
*/
//adding a comment to test git for windows
function variableModification(a) {
  var plus5;
  var asString;
  var yourNumberIs;
  //your code here
  plus5 = a + 5;
  asString = a.toString();
  yourNumberIs = "Your Number is " + a + ".";
  //end your code
  return [plus5, asString, yourNumberIs, a];
}

/*
Input:
b: could be anything

Output:
return true if b is a primitive string value (also known as a string literal),
false otherwise
*/
function isString(b) {
  //your code here
  //got technique of checking for string literal here: http://stackoverflow.com/questions/12254882/easy-way-to-check-if-a-variable-is-a-string
  if(typeof b === "string")  
    return true;
  else
    return false;
    
  //end your code
}

/*
Input:
c: could be anything

Output:
return true if c is null, false otherwise
*/
function isNull(c) {
  //your code here
  //used basis for this found here: http://www.htmlgoodies.com/beyond/javascript/testing-for-variable-emptiness-in-javascript.html#fbid=jvCu6KDPea0
  var key, idx, len;
  var empty [0, "0", "", null, false]
  len = empty.length;
  for(idx = 0; idx < len; idx++)
  {//for all null values, check if c is one, if so return true
        if(c === empty[idx]){
            return true;
        }
  }
  if(typeof c === "object"){
      for(key in c){ //if c is an object, if it has a key, then it's not empty, return false
          return false;
      }
  }
  else{//if c is an object and there's not keys in it, it's empty, return true
      return true;
  }
  return false; //return false if it's not an empty var or object
  //end your code
  
}
