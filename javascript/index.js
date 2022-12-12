const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  document.body.classList.toggle('o');
});

const suBtn = document.querySelector('.subContact');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const eMail = document.getElementById('email');
const mEssage = document.getElementById('textarea');

suBtn.onclick = () => {
  if (fname.value == '') {
    document.querySelector('.req').style.display = "block"
  } else document.querySelector('.req').style.display = "none"

  if (lname.value == '') {
    document.querySelector('.req1').style.display = "block"
  } else document.querySelector('.req1').style.display = "none"

  if (eMail.value == '') {
    document.querySelector('.req2').style.display = "block"
  } else document.querySelector('.req2').style.display = "none"

  if (mEssage.value == '') {
    document.querySelector('.req3').style.display = "block"
  } else document.querySelector('.req3').style.display = "none"

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}