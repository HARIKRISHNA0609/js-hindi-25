const accountId = 144553
let accountEmail = "harikrishna.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;
//accountId = 2

/* prefer not to use var because of issue in block scope and functional scope

*/
accountEmail = "hk123.com"
accountPassword = "2468"
accountCity = "jaipur"

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountId,accountState])