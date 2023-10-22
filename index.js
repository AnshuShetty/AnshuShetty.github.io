function validateEmail() {
  var email = document.getElementById('exampleInputEmail').value;
  //var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var emailregex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  if (!emailregex.test(email)) {
    alert('Invalid email!');
    return false;
  } else {
    return true;
  }
}
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
    console.log("write");
  }
}

const formElement = document.getElementById("Feedbackform");
const messageElement = document.getElementById("message");
formElement.addEventListener("submit", (event) => {
  alert("do you want to send ");

  // Prevent the form from submitting.
  event.preventDefault();

  // Display the message that the form has been submitted.
  messageElement.innerHTML = "Message sent!";
  document.getElementById('Feedbackform').reset();
});

function downloadPDF() {
  // Get the path of the PDF file.
  const pdfPath = "Images/Anshu_Resume.pdf";

  // Create a new anchor element.
  const anchor = document.createElement("a");

  // Set the anchor element's href attribute to the path of the PDF file.
  anchor.href = pdfPath;

  // Set the anchor element's download attribute to the filename of the PDF file.
  anchor.download = "my_pdf.pdf";

  // Click the anchor element to download the PDF file.
  anchor.click();
}
// function storeMessage(email, message) {
//   var spreadsheetId = 'AKfycbxR7LFNxFLJSCUqijh2DdOfn57uJ3KFFJMWALUkTZshdzm0uuo3zXyAYTN_cLYd7R0jDQ';
//   var range = 'Sheet1!A:B';
//   var values = [[email, message]];

//   var request = gapi.client.sheets.spreadsheets.values.append({
//     spreadsheetId: spreadsheetId,
//     range: range,
//     valueInputOption: 'USER_ENTERED',
//     resource: {
//       values: values,
//     },
//   });

//   request.execute(function(response) {
//     console.log('Message stored successfully.');
//   });
// }



