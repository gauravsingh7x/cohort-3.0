
function parent(){
    let a=10;
    // return function child(){
    //     a++;
    //     console.log(a);
    //     return a;
    // }
    
    function child(){
        a++;
        console.log(a);
        return a;
    }
    return child;
}

let fn = parent();
fn();
fn();

//closures are function that remembers the lexical-scoped variables
