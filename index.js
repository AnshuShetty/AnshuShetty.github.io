let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('navbar li a');
window.onscroll=()=>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
  });
};
 
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

const email = document.getElementById('exampleInputEmail');
const feedback = document.getElementById('Feedback')
const form = document.getElementById('Feedbackform')
const errormssg = document.getElementById('error')
form.addEventListener('submit', (e) => {
  let messages=[]
  if(feedback.value.length<=4){
    messages.push('wirte atleast 5 words')
  }
  if(messages.length>=0){
    e.preventDefault()
    errormssg.innerText = messages.join(', ');
  }
})