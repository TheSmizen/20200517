console.log("Node project starting. " + Date());
let time = 500;
//global object:
let timer = setTimeout(function(){ //setTimeout runs once
    time += 2;
    console.log(time + " milliseconds have passed in setTimeout");
},time)
time = 500;
let timer2 = setInterval(function(){
    console.log(time + " milliseconds have passed in setInterval")
    time += 2;
    if (time > 510){
        clearInterval(timer2);
    }
},time);

//.

console.log("App starting");