document.getElementById("acceptTerms").addEventListener("change", function () {
  const form = document.getElementById("bookingForm");
  form.classList.toggle("hidden", !this.checked);
});

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("https://sheetdb.io/api/v1/whd6u4z37o74e", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("confirmation").classList.remove("hidden");
      this.classList.add("hidden");
    })
    .catch(error => {
      alert("Something went wrong. Please try again.");
      console.error(error);
    });
});