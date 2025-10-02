//singleton

//object literal

const mySym =Symbol("key1")


const jsUser = { 
    name: "harikrishna",
    "full name":"harikrishna sivaji",
    [mySym]: "mykey1",
age: 21,
location:"mumbai",
email: "hkgoogle.com",
isLoggedin : false 

}

//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])



jsUser.email ="hkasd@mail.com"
//Object.freeze(jsUser)

jsUser.email ="hk@123mail.com"
//console.log(jsUser)


jsUser.greeting =function(){

    console.log(`hello js user,${this["full name"]}`)
}

console.log(jsUser.greeting());

