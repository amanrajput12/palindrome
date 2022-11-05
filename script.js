// let value ="Aman rajput"
// let split = value.split();
// console.log(split);
// console.log(split.reverse());
function reverseString(str){
    let splitStrig =str.split("");
    let reverseArray =splitStrig.reverse();
    let joinArray  =reverseArray.join("");
    return joinArray
    // return str.split('').reverse().join('')
}



function palindrome(){
    let message = document.getElementById("input").value
    let ans = document.getElementById("answer")
    message=message.toLowerCase();
    if(message=="") {
alert("plese enter value")
    }
    else {
    if(message == reverseString(message)){
        ans.innerHTML ="It's Pallindrome"
    }
    else {
        ans.innerHTML ="It's not pallindrome"
    }
}
}