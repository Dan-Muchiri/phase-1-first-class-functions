function eat() {
    console.log("lunch");
  }
function visit() {
    console.log("usa");
  }
function receivesAFunction(toDo) {
    toDo();
  }
receivesAFunction(eat);
function returnsANamedFunction(){
    visit();
     return function progress (){
        console.log('USA is on the list')
     }
}
returnsANamedFunction()
const visitProgress =returnsANamedFunction()
visitProgress();
function returnsAnAnonymousFunction(){
    visit();
     return function (){
        console.log('USA is on the list')
     }
}

