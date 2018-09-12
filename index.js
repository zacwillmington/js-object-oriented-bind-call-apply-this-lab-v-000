//Your code here
function justInvoke (arg) {
        return function(){
            return console.log(this);
        }.call(this);
 }
