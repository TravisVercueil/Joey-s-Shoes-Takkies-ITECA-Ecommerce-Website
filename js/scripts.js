document.addEventListener("DOMContentLoaded", function () {
  const closebtn = document.querySelector(".close-btn");
  const openmodalBtn = document.querySelector(".open-modal");
  const modal = document.querySelector(".modal");
  const counter = document.querySelector(".total");

  if (closebtn && openmodalBtn && modal) {
    closebtn.addEventListener("click", () => {
      console.log("clicked hide");
      modal.classList.remove("show");
    });
    openmodalBtn.addEventListener("click", () => {
      console.log("clicked show");
      modal.classList.add("show");
    });
  } else {
    console.log("Could not find the elements");
  }

  counter.addEventListener("click", () => {
    alert("Order Placed");
  });
  

});


document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("login_email").value;
      var password = document.getElementById("login_password").value;

      if (email === "admin@joeyshoetakkie.co.za" && password === "admin1234") {
        window.location.href = "admin.html";
      } else if (email === "john123@gmail.com" && password === "john123") {
        window.location.href = "";
      } else {
        // Handle incorrect login details
        alert("Incorrect login details");
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("register_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("User Registered Succesfully");
      window.location.href = "";
    });
});
