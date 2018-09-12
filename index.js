//Your code here
function justInvoke (arg) {
        return function(){
            return console.log(arg());
        }.call(this);
 }
