const marvel_heros =["ironman","spiderman","thor"]

const dc_heros =["batman","superman","flash"]


//marvel_heros.push(dc_heros)
//console.log(marvel_heros)

//console.log(marvel_heros[3][2])


//newArray =  marvel_heros.concat(dc_heros)

//console.log(newArray)


//const newArray = [...marvel_heros,...dc_heros]

//console.log(newArray)

const anotherArray = [1,2,3,[4,5],6,[7,8,9,[10,11]]]

const realanotherArray= anotherArray.flat(Infinity)
console.log(realanotherArray)



console.log(Array.isArray("harikrishnaa"))

console.log(Array.from("harikrishna"))


console.log(Array.from({name:"harikrishna"}))  //interesting 

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))