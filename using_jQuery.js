window.onload = function(){

    $.get("data/tweets.json", function(data){
        console.log(data);
    });
};


/*
The function defined there is the asynchronous callback 
function that will fire when the request is successful.
The callback function doesn't have to be defined in 
the argurment list for the .get method.  It can be 
defined above:

function callback(val){
    console.log(val);
}

var fruits = ['banana', 'apple', 'pear'];
fruits.forEach(callback);

Not that this an example of a synchronous callback.
*/
