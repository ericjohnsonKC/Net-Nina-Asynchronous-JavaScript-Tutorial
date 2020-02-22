/* Notes:

    Ready states:

    0 - request not initialized
    1 - request has been set up
    2 - request has been sent
    3 - request is in process
    4 - request is complete

*/


// Beginning of code...

window.onload = function(){

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){ 
            console.log(JSON.parse(http.response));
        }  
    };

    http.open('GET', "data/tweets.json", true);

// The open method sets up the request.
// The parameters: 
//     1. Type of request
//     2. Data to be retrieved
//     3. Boolean - Asynchronous method of request? (true or false)

    http.send();
    
};