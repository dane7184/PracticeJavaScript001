// Path 1
let regex = /^(0)\d{2}-\d{3}-\d{4}$/;

function checkPhone() {
  let phoneInput = document.getElementById("phoneInput").value;

  if (!regex.test(phoneInput)) {
    alert(phoneInput + " Phone number is wrong format");
  } else {
    alert("Your phone number is " + phoneInput + " was right");
  }

  console.log(regex.test(phoneInput));
}

// Path 2
let time = null;
const display = document.getElementById("display");

function showDateTime() {
    const now = new Date();
    display.innerHTML = now.toLocaleString("kh");
}


function startClock() {
    if (time !== null) return; 
    showDateTime(); 
    time = setInterval(showDateTime, 1000);
}

function stopClock() {
    clearInterval(time);
    time = null;
}

function resetClock() {
    stopClock();
    display.innerHTML = "00/00/0000,00:00:00 M"; 
}