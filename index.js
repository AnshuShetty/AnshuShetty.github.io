function validateEmail() {
  var email = document.getElementById('exampleInputEmail').value;
  // var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // return emailregex.test(email);
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
  
  // If the word count is less than 2, alert the user.
  if (wordCount < 2) {
    alert("Write atleast 3 words");
    console.log("write");
  }
  
}

const formElement = document.getElementById("Feedbackform");
const messageElement = document.getElementById("message");

formElement.addEventListener("submit", (event) => {
  // Prompt the user to confirm whether they want to send the feedback.
  const confirm = window.confirm("Do you want to send this feedback?");

  // Prevent the form from submitting if the user clicks **No**.
  if (!confirm) {
    event.preventDefault();
    return;
  }

  // Display the message that the form has been submitted.
  messageElement.innerHTML = "Message sent!";

  // Reset the form.
  document.getElementById('Feedbackform').reset();
});


function downloadPDF() {
  // Get the path of the PDF file.
  const pdfPath = "Images/Anshu%20_Resume.pdf";

  // Create a new anchor element.
  const anchor = document.createElement("a");

  // Set the anchor element's href attribute to the path of the PDF file.
  anchor.href = pdfPath;

  // Set the anchor element's download attribute to the filename of the PDF file.
  anchor.download = "my_pdf.pdf";

  // Click the anchor element to download the PDF file.
  anchor.click();
}
function storeMessage(email, message) {
  var spreadsheetId = 'AKfycbxR7LFNxFLJSCUqijh2DdOfn57uJ3KFFJMWALUkTZshdzm0uuo3zXyAYTN_cLYd7R0jDQ';
  var range = 'Sheet1!A:B';
  var values = [[email, message]];

  var request = gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: values,
    },
  });

  request.execute(function(response) {
    console.log('Message stored successfully.');
  });
}
