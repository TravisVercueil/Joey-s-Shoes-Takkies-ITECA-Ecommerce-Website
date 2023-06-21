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
    const sendRequest = (url, email, password) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          if (data.status === "success") {
            document.getElementById("modal").style.display = "none";
            alert(url === 'pages/login.php' ? "Login Successful" : "Registration successful");
          } else {
            alert(url === 'pages/login.php' ? "Login Failed" : "Registration Failed");
          }
        } else {
          alert("HTTP error occurred: " + xhr.statusText);
        }
      };
  
      xhr.onerror = function () {
        alert("Network error occurred");
      };
  
      xhr.send(JSON.stringify({ email: email, password: password }));
    };
  
    document
      .getElementById("login_form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("login_email").value;
        const password = document.getElementById("login_password").value;
        sendRequest('pages/login.php', email, password);
      });
  
    document
      .getElementById("register_form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("register_email").value;
        const password = document.getElementById("register_password").value;
        sendRequest('pages/register.php', email, password);
      });
  });
  