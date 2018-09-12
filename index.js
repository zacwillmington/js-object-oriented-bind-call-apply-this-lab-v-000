//Your code here
function justInvoke (arg) {
    // debugger;
        return function(){
            return this;
        }.bind(this);
 }
