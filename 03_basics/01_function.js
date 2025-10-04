


function sayMyname () {
console.log("h")
console.log("k")
console.log("k")
console.log("m")

}

sayMyname()   //sayMyname: now became REFERENCE ;   //sayMyname(): now became execution


function addTwoNumbers(num1,num2){

    //console.log(num1+num2)

}

addTwoNumbers(3,4)


function loginUserMessage (username= "harikrishna" ){
    if(username=== undefined){
        console.log("please enter name")
        return
    }

return`${username} just logged in`


}
   
//console.log(loginUserMessage("hari")) // gives op HARI JUST LOGGED IN    

console.log(loginUserMessage())   // OP: UNDEFINED JUST LOGGED IN 


