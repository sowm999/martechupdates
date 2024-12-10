document.getElementById("newsletter").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");

  fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, emailid })
    })
  .then(response => response.json())
  .then(data => {
      console.log(data);
      // Show success message
      document.querySelector(".alert").style.display = "block";
      setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
      }, 3000);

      // Reset the form
      document.getElementById("newsletter").reset();
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting your message!');
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
