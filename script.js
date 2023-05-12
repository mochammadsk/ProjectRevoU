function validateForm(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var optionInput = document.getElementById('option');

    var name = nameInput.value;
    var email = emailInput.value;
    var option = optionInput.value;
  
    if(name == ''){
      alert('Nama harus diisi');
      return false;
    }
  
    if(email == ''){
      alert('Email harus diisi');
      return false;
    }
  
    if(!isValidEmail(email)){
      alert('Email tidak valid');
      return false;
    }

    if(option === 'Select option'){
      alert('Anda belum memilih');
      return false;
    }
    
    alert('Form berhasil terkirim');
}
  
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}