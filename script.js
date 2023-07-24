
// for date,year
var now = new Date();
var year = now.getFullYear(year)
document.getElementById("year").innerText = year

// clear output
function clearOutput(){
    document.getElementById('output').innerHTML=""
}
//output function
const showOutput = (output) =>{
    document.getElementById('output').innerHTML=output;
}

// IF ELSE
function ifElse(){
    var now=new Date();
    var today = now.getDay();
// console.log(today)
// var today=4;
if (today===0){
    alert("It's a Sunday");
    showOutput("It's a Sunday")
}else if (today===1) {
    alert("It's a Monday");
    showOutput("It's a Monday");
} else if(today===5){
    alert("It's a Friday");
    showOutput("It's a Friday");
}else if(today===6){
    alert("It's a saturday");
    showOutput("It's a saturday");
}else{
    alert("It's another day");
    showOutput("It's another day");
}
}

// switch statement
function Switch(){
    var now=new Date();
    var today= now.getDay();
    // var today=4;
    switch (today) {
        case 0:
            showOutput("It's a Sunday");
            break;
            case 1:
            showOutput("It's a Monday");
            break;
            case 5:
                showOutput("It's a Friday");
                break;
                case 6:
                    showOutput("It's a Saturday");
                    break;
                    default:
                         showOutput("It's another Sunday");
    }
}


// for loop

// for (var i=0;i <=3;i++){
//     output.innerHTML += i +"<br>"
// }



// do while loop

// var i=0;          (is me variable ko pahly declare krvana prta ha )
// while (i<=3){
//     output.innerHTML += i +"<br>";
//     i++;
// }


// keep asking the name
function keepAskName(){
    do{
        var name=prompt("Enter The Name");
    }while(name===null  || !name);
    showOutput(name)
}
// hange the system using it
// var i=0;
// do{
//     console.log(i);
//     i++;  (remove this line)
// }while(i<=1)   