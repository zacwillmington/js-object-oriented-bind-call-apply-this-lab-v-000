//Your code here
function justInvoke (arg) {
        return function(){
            return console.log("teset.");
        }.bind(this);
 }
