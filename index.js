//Your code here
function justInvoke (arg) {
    debugger;
        return function(){
            return this + arg
        }.bind(this);
 }
