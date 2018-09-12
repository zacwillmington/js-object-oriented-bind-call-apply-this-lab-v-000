//Your code here
function justInvoke (arg) {
        return function(arg){
            return this;
        }.call(this);
 }
