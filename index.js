//Your code here
function justInvoke (arg) {
        return function(){
            return this;
        }.call(arg);
 }
