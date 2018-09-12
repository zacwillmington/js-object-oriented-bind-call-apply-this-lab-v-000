//Your code here
function justInvoke (arg) {
        return function(arg){
            return console.log(arg());
        }.call(this);
 }
