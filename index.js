//Your code here
function justInvoke (arg) {
    return arg.call(this);
 }

 function setThisWithCall (func, name, age){
     return func.call(name, age);
 }
