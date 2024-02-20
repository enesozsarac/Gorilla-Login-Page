let checkbox = document.getElementById("checkBox");
let image = document.getElementById("image");
function boxChecked() {
  let label = document.getElementById("cblabel");

  if (checkbox.checked == true) {
    image.src = "./img/look-(one eye open).png";
    label.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    passwordInput.type = 'text';
  } else {
    image.src = "./img/look-(closed eyes).png";
    label.innerHTML = '<i class="fa-solid fa-eye"></i>';
    passwordInput.type = 'password';
  }
}

let textInput = document.getElementById("textInput");
let passwordInput = document.getElementById("passwordInput");
let mailClick = false;
let passwordClick = false;


textInput.addEventListener('click' ,function(){
  image.src = "./img/look-1.png";
  mailClick = true;
  passwordClick = false;
});

passwordInput.addEventListener('click', function(){
  if (checkbox.checked == false) {
    image.src = "./img/look-(closed eyes).png";
  }
  
  passwordClick =true;
  mailClick = false;

});


function changeImage() {
  let textInputV = textInput.value.length;
  let passwordInputV = passwordInput.value.length;

  if (mailClick == true && passwordClick == false) {
    if (textInputV >= 1 && textInputV <= 4) {
      image.src = "./img/look-1.png";
    } else if (textInputV >= 5 && textInputV <= 9) {
      image.src = "./img/look-2.png";
    } else if (textInputV >= 10 && textInputV <= 20) {
      image.src = "./img/look-3.png";
    } else if (textInputV >= 21 && textInputV <= 25) {
      image.src = "./img/look-4.png";
    } else if (textInputV >= 26 && textInputV <= 30) {
      image.src = "./img/look-5.png";
    }
  }

}

