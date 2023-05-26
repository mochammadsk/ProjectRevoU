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

var slideIndex = 0;
var slides = document.querySelectorAll(".slider img");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlide, 3000); // Mengatur interval waktu untuk perpindahan slide (dalam milidetik)
}

showSlide();
// showSlide(); // Memulai slideshow saat halaman dimuat
