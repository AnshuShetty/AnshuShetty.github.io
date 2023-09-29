
function ValidateEmail(exampleInputEmail) 
{
  var email = document.getElementById('exampleInputEmail').value;
  var emailregex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
  var mssg = document.getElementById('Feedback').value;
  if(!mssg.length<5){
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
// function open(About){

//   const btn = document.querySelector('.btn');
//   btn.addEventListener('click', () =>{
//    document.getElementsByTagName('About');
//   })
// }
const linkElement = document.getElementById("sbtn");

linkElement.addEventListener("click", redirectToOtherPartOfPage);

function redirectToOtherPartOfPage() {
  // Get the href attribute of the clicked element.
  var href = event.target.getAttribute("href");

  // Redirect to the href URL.
  window.location.href = href;
  console.log('About section visited');
}

function checkWordCount() {
  // Get the text from the textarea.
  var text = document.getElementById("Feedback").value;

  // Split the text into words.
  var words = text.split(" ");

  // Count the number of words.
  var wordCount = words.length;

  // If the word count is less than 5, alert the user.
  if (wordCount < 5) {
    alert("Write atleast 10 words");
    console.log("write")
  }
}

const formElement = document.getElementById("Feedbackform");
const messageElement = document.getElementById("message");

formElement.addEventListener("submit", (event) => {
  // Prevent the form from submitting.
  event.preventDefault();

  // Display the message that the form has been submitted.
  messageElement.innerHTML = "Message sent!";
});

function downloadPDF() {
  // Get the path of the PDF file.
  const pdfPath = "file:///D:/vscode/Projects/bootstrap/Images/Anshu%20_Resume.pdf";

  // Create a new anchor element.
  const anchor = document.createElement("a");

  // Set the anchor element's href attribute to the path of the PDF file.
  anchor.href = pdfPath;

  // Set the anchor element's download attribute to the filename of the PDF file.
  anchor.download = "my_pdf.pdf";

  // Click the anchor element to download the PDF file.
  anchor.click();
}


