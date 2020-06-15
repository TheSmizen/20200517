console.log("Node project starting. " + Date());
let time = 501;
//global object:
let timer = setTimeout(function(){ //setTimeout runs once
    time += 2;
    console.log(time + " milliseconds have passed in setTimeout");
}, time)
time = 500;
let timer2 = setInterval(function(){
    console.log(time + " milliseconds have passed in setInterval")
    time += 2;
    if (time > 510){
        clearInterval(timer2);
    }
}, time);
let timer3 = setTimeout(function(){ //setTimeout runs once
    console.log("2000 milliseconds have passed in setTimeout");
}, 2000);

//Here in app.js all three timers get launched at the same time.
//They will all fire only as and when their timers run out.

console.log(__filename + " starting in " + __dirname);
