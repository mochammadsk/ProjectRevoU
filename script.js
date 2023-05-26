function validateForm(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var optionInput = document.getElementById("option");

  var name = nameInput.value;
  var email = emailInput.value;
  var option = optionInput.value;

  if (name == "") {
    alert("Nama Tidak Boleh Kosong");
    return false;
  }

  if (email == "") {
    alert("Email Tidak Boleh Kosong");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Email Tidak Valid");
    return false;
  }

  if (option == "") {
    alert("Anda Belum Memilih");
    return false;
  }

  alert("Berhasil Terkirim");
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

var navbarLinks = document.querySelectorAll("button a");

// Menambahkan event listener pada setiap link
navbarLinks.forEach(function (link) {
  link.addEventListener("click", smoothScroll);
});

// Fungsi untuk scroll halus
function smoothScroll(event) {
  event.preventDefault();

  // Mendapatkan target dari link yang diklik
  var targetId = this.getAttribute("href");

  // Mendapatkan elemen target
  var targetElement = document.querySelector(targetId);

  // Menggunakan scrollIntoView dengan opsi smooth untuk scroll halus
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// function showNextImage() {
//   var sliderImages = document.querySelectorAll(".slider img");
//   var currentImageIndex = 0;

//   sliderImages[currentImageIndex].classList.remove("active");
//   currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
//   sliderImages[currentImageIndex].classList.add("active");
// }
// setInterval(showNextImage, 3000);
