function validateForm(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var optionInput = document.getElementById('option');

    var name = nameInput.value;
    var email = emailInput.value;
    var option = optionInput.value;
  
    if(name == ''){
      alert('Nama Tidak Boleh Kosong');
      return false;
    }
  
    if(email == ''){
      alert('Email Tidak Boleh Kosong');
      return false;
    }
  
    if(!isValidEmail(email)){
      alert('Email Tidak Valid');
      return false;
    }

    if(option == ''){
      alert('Anda Belum Memilih');
      return false;
    }
    
    alert('Berhasil Terkirim');
}
  
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}