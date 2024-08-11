let data = "jaya radha rani"
class user {
  constructor (name , email) {
    this.name = name;
    this.email = email;
  }
  viewData (){
    console.log ("You have access to data of website:"+ data)
  }
}
let kaanha = new user('Bashudeva Shree Krishna','bashudevkaanha@unimail.com') ;
kaanha.viewData()
console.log (kaanha)

class admin extends user{
  constructor (name,email) { 
    super(name,email);//invoking user class constructor
    console.log (`${name} edited the data`)
  }
  editData (){
    console.log ("Some data edited");
  }
  
}
let bishnu = new admin('vishnu','vishnutheprotector@hindu.com') // creating bishnu object and passing args to child constructor

console.log (bishnu)