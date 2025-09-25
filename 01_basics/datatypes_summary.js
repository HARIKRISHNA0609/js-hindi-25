// primtive 

// 7 types:  string, number, boolean, null, undefined, symbol, big int

// js is dynamically typed language 


//symbol declare karne ke liye

//eg 
//const id = Symbol('123')

//const anotherId = ('123')

//console.log(id === anotherId)



// reference type (non primitive)

//types: Array, objects,functions

//const hero = ["shaktiman", "raj", "powerranger"]

//{
//name = harikrishna 
//age =  21

//}

//function(){}



// ***********************************************************

// stack (primitive) ,  heap (non primitive)


let myYoutubename = "hkdotcom"

let anotherName = myYoutubename

anotherName = "rkdotcom"

console.log(anotherName)
console.log(myYoutubename)



let userOne = {
    email: "kamalagmail.com"
        

}

let userTwo = userone

usertwo.email = "hk@123"

console.log(userOne.email)
console.log(userTwo.email)


