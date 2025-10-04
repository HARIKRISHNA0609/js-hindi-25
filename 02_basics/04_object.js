//const tinderUser = new Object()   //WAY  OF DECLARING OBJECT

const tinderUser = {}  // ANOTHER WAY OF DECLARING OBJECT 

tinderUser.id = "123abc"
tinderUser.name = "hari"
tinderUser.isLoggedIn =false


//console.log(tinderUser)


const regularUser = {

    email: "some@gmail.com",

  fullname: {

    userfullname: {
        firstname: "hari",
        lastname: "km"
    }
}
}

//console.log(regularUser.fullname)


const obj1 = {1:"a", 2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3 ={obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)


const obj3 ={...obj1,...obj2}
//console.log(obj3)



   //studying about obj destructuring 
const course ={

  courseName: "js in eng",
  price: "999",

  courseInstructor : "hitrsh"

}

//course.courseInstructor   used for printing the output 


const{courseInstructor}= course

//console.log(courseInstructor)


