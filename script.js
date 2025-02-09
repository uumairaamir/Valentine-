// Function to send an email with the response
function sendResponse(response) {
  fetch("https://formsubmit.co/ajax/umairaamir1212@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      answer: response,
      timestamp: new Date().toLocaleString()
    })
  })
  .then(response => response.json())
  .then(data => console.log("Email sent:", data))
  .catch(error => console.error("Error:", error));
}

// Handle "YES 💕" button click
function sayYes() {
  sendResponse("Yes 💕");
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

// Handle "NO 🥺" button click
function sayNo() {
  sendResponse("No 🥺");
  for (let i = 0; i < 100; i++) {
    const yes = document.createElement("div");
    yes.textContent = "YES 💖";
    yes.style.position = "absolute";
    yes.style.left = Math.random() * 100 + "vw";
    yes.style.top = Math.random() * 100 + "vh";
    yes.style.color = "#ff69b4";
    yes.style.fontSize = Math.random() * 2 + 1 + "rem";
    yes.style.animation = "float 4s ease-in-out infinite";
    document.body.appendChild(yes);
  }
}