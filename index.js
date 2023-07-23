
function ValidateEmail(exampleInputEmail) 
{
  var email = document.getElementById('exampleInputEmail');
  var emailregex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;

 if(!emailregex.test(email))
  {
    alert("You have entered an invalid email address!");
    return false;
  }
  else{

    alert("Valid email id");
    return true;
  }

}
function mssgcheck(){
  var mssg = document.getElementById('Feedback');
  if(!mssg<5){
    alert("Write atleast one Message!")
  }
}
// const email = document.getElementById('exampleInputEmail');
// const feedback = document.getElementById('Feedback')
// const form = document.getElementById('Feedbackform')
// const errormssg = document.getElementById('error')
// form.addEventListener('submit', (e) => {
//   let messages=[]
//   if(feedback.value.length<=4){
//     messages.push('wirte atleast 5 words')
//   }
//   if(messages.length>=0){
//     e.preventDefault()
//     errormssg.innerText = messages.push('hi');
//   }
// })

