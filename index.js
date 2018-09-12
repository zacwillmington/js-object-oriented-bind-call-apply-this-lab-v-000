//Your code here
function justInvoke (arg) {
        return function(){
            return arg;
        }.call(this);
 }
