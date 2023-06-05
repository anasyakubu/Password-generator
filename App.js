
// 1CD1049468FD82C5E3CDD602514B824E86AA PASSWORD
// 864e6dbb-9d31-47ca-8af1-4371d598e59f SECURITY TOKEN

const email = document.querySelector("#email")
const send = document.querySelector("#send")
const form = document.querySelector("form")

send.addEventListener("click", (e) => {
  e.preventDefault();
  function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
    var password = "";

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }

  var passwordLength = 12; // Specify the desired length of the password
  var generatedPassword = generatePassword(passwordLength);
  console.log(generatedPassword);

  // console.log('clicked')
  alert(email.value);

  Email.send({
    SecureToken: "864e6dbb-9d31-47ca-8af1-4371d598e59f",
    To: email.value,
    From: 'yakubuanas04@gmail.com',
    Subject: "Generated Password",
    Body: "<h3>Your password has been successfully generated.... Your Password is " + "<span style='font-weight: bold;'>" + generatedPassword + "</span>" + "</h3>" +
      "<h6>Thank You..</h6>",
  }).then(
    form.reset(),
    message => alert(message)
  );
})

