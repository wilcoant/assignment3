/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/
var snack = {type: "Goldfish", brand: "Pepperidge Farm", flavor: "Cheddar", count: 2000}


function returnObjectLiteral() {
  //your code here
    return this.type + " " + this.brand + " " + this.flafor + " " + this.count; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user) {
    this.user = user;
    this.sent = 0; //sent message counter, initialize to 0 at object creation
    this.received = 0;
    this.ReceivedMessage = newArray(); //store received messages somewhere
    this.SentMessage = new Array(5);  //get a new array of 5 elements to store text of sent messages in
    this.logMessage = function(messageText, number){
        this.number = number;
        if(number != 1 && number != 0){ //tell user must be 0 or 1
        return 'Enter 1 for received or 0 for sent';}
        if(number == 1){ //increment if 1
            this.received++;
            this.ReceivedMessage.unshift(messageText); //store in array and resize it
            this.messageText = messageText; //we just need to see the last message received so each time we receive a message, keep it here and overwrite
        }
        else if(number == 0){
            this.sent++; //it was a sent message so increment
            if(this.SentMessage.length < 5){
                 this.SentMessage.unshift(messageText); //place beginning of array
            }
            else if(this.SentMessage.length == 5){
                 this.SentMessage.pop(); //remove last element to prevent resizing
                 this.SentMessage.unshift(messageText); //place at beginning and shift all messages over one spot
            }
            
        }
    }//exit messagelog
    
    this.totalSent = function(){return this.sent;} //return running total of sent messages
    this.totalReceived = function(){return this.received;} //return running total of received messages
    
        
    
    
}
    

//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.LastReceivedMessage = function(){
    return this.messageText; //this will be stored here and will always be the last message received
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog(BlackHatGuy);
myLog.logMessage(foo, 1); //log messages to myLog as received.
myLog.logMessage(bar, 1);
myLog.logMessage(baz, 1);

//end your code
