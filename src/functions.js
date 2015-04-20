/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction(){return null;} //return null value from useless function
//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here
bar = function(){
    var doubleArray = new Float32Array([]); //typcast as 32 bit floating point number
    non_num = doubleArray.filter(function(x){return x = nan;})
    if(non_num.length > 0){
        return false; //can't be successful if nan values were in it
    }
    else{
        doubleArray.forEach(value){value = 2 * value;}
        return true; all vals were numbers
    }
    
    
}
//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    "use strict";
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here
function parseGit(logArray){
    
    var size = logArray.length;
    var i;
    var git_log = []; //declare array for gitlogs
    for(i = 0; i < size, i++){
        var log = logArray[i];
        var pos = log.length - 1; //get last position of string
        var hash = substr(0, log.indexof(" "); //hash is everything up to the first space
        var date_string = substr(log.indexof(" ") + 1, log.indexof(" \""); //get the substring from the space to the space followed by quotes for date
        var d = new Date(date_string); //put datestring into date object
        var message = substr(log.indexof(" \"") + 1, pos); //message is everyting form the " "" (+ 1 to start at quotes not space) substring to the pos var last psn in the string
        var g = new GitLog(hash, d, message); //new GitLog message with vars including date object
        git_log.push(g); //push to gitlot array each entry for each execution of loop
    }
    return git_log; //array of gitlog entries    
}

//end your code
