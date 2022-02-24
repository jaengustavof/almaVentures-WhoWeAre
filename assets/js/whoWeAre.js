
/***NavBar***/
  window.onscroll = function() {scrollFunction()};
function scrollFunction() {

      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      $("#navbar").fadeIn(200);
      document.getElementById("navbar").style.top = "0";
      }else{
      document.getElementById("navbar").style.top = "-188px";
      }

  
}

/***Top Carousel***/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("wwaCarrPicture");
  var dots = document.getElementsByClassName("dotpag");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedotpag", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " activedotpag";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


/*****Profile Cards*****/
var deviceWidth = window.innerWidth;    
//console.log(deviceWidth);    
var slidesP = document.getElementsByClassName("myDivs2");
var slidesProfile = document.getElementsByClassName("containerProfile");

  for(let i = 0; i < slidesProfile.length; i++){
            var actual = slidesProfile[i];
            $(actual).css('height', '0px');
            $(actual).find('*').hide();
            $(actual).hide();
        }

  var shown =true;
  var contSize = 0;
    $('.myDivs2').click(function(){
      /*Device Width*/
      if(deviceWidth > 1600){
        contSize = '815px';
      }else if(deviceWidth <= 1600 && deviceWidth >1536){
        contSize = '783px';
      }else if(deviceWidth <= 1536 && deviceWidth >1400){
        contSize = '732px';
      }else if(deviceWidth <= 1400 && deviceWidth > 1280){
        contSize = '678px';
      }else if(deviceWidth <= 1280 && deviceWidth > 1152){
        contSize = '626px';
      }else if(deviceWidth <= 1152 && deviceWidth > 1024){
        contSize = '567px';
      }else if(deviceWidth <= 1024 && deviceWidth > 800){
        contSize = '489px';
      }else if (deviceWidth <= 800){
        contSize = '378px';
      }
        var text = $(this).attr("id");
      
      switch(shown){

        case true:
          $('#cont'+text).show();
          $('#cont'+text).css('height', contSize);//will modify the size according to the device
          $('#cont'+text).find('*').fadeIn(700);
        shown = false;
        break;

        case false:
        for(let i = 0; i < slidesProfile.length; i++){
          var actual = slidesProfile[i];
          $(actual).css('height', '0px');
          $(actual).find('*').fadeOut(150);

        }
        shown = true;
        break;
      } 
    
  });


/*****************MOBILE MENU************************/

  var logo = document.getElementById("imagenMobileLogo");
  var burger = document.getElementById("burgerMobile");
  var menuContainer = document.getElementById("mobileMenuContainer");
  logo.src= "assets/rsc/img/logo.png";
  burger.style.color = "black";
  menuContainer.style.background ="rgba(255,255,255,0.7)";


    function desplegar(){
      document.getElementById('menuMobile').style.transform = 'translate(0%, 0%)';
    }

    function cerrarMenu(){
      document.getElementById('menuMobile').style.transform = 'translate(100%, 0%)';
    }

/**Footer Clock**/
 var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();


    if(day != 6 || day !=0){
      if(hour >= 9 && hour <19){
        document.getElementById("open").style.display ="block";
      }else{
        document.getElementById("close").style.display ="block";
      }
      
    }else{
      document.getElementById("close").style.display ="block";
    }


/************* Slider Mobile *****************/

const slider = document.querySelector('.slider-container-Wwa'),
  slides = Array.from(document.querySelectorAll('.slideWwa'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('.content')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})



function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}


/*****Responsive Imgs Our Founders******/

var foundersPic1 = document.getElementById("ourFoundersBioPic1");
var foundersPic2 = document.getElementById("ourFoundersBioPic2");

console.log(deviceWidth);
console.log(foundersPic1.src);

if (deviceWidth <= 768) {

  foundersPic1.src = 'assets/rsc/img/Sample2IpadVersion.jpg';
  foundersPic2.src = 'assets/rsc/img/Sample1IpadVersion.jpg';
}


/*******************Slider our Team**************************/
 const slider2 = document.querySelector('.slider-container-ot'),
  slidesOt = Array.from(document.querySelectorAll('.slideOt'))

let isDraggingOt = false,
  startPosOt = 0,
  currentTranslateOt = 0,
  prevTranslateOt = 0,
  animationIDOt = 0,
  currentIndexOt = 0

slidesOt.forEach((slide, index) => {
  const slideImage = slide.querySelector('.contentOt')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStartOt(index))
  slide.addEventListener('touchend', touchEndOt)
  slide.addEventListener('touchmove', touchMoveOt)

  // Mouse events
  slide.addEventListener('mousedown', touchStartOt(index))
  slide.addEventListener('mouseup', touchEndOt)
  slide.addEventListener('mouseleave', touchEndOt)
  slide.addEventListener('mousemove', touchMoveOt)
})



function touchStartOt(index) {
  return function (event) {
    currentIndexOt = index
    startPosOt = getPositionX(event)
    isDraggingOt = true

    // https://css-tricks.com/using-requestanimationframe/
    animationIDOt = requestAnimationFrame(animationOt)
    slider2.classList.add('grabbing')
  }
}

function touchEndOt() {
  isDraggingOt = false
  cancelAnimationFrame(animationIDOt)

  const movedBy = currentTranslateOt - prevTranslateOt

  if (movedBy < -100 && currentIndexOt < slidesOt.length - 1) currentIndexOt += 1

  if (movedBy > 100 && currentIndexOt > 0) currentIndexOt -= 1

  setPositionByIndexOt()

  slider2.classList.remove('grabbing')
}

var moveToRight = 0;
/*
function hey() {
  console.log('hola');
  moveToRight -=deviceWidth;
  slider2.style.transform = `translateX(${moveToRight}px)`;

}
*/
function touchMoveOt(event) {
  if (isDraggingOt) {
    const currentPosition = getPositionX(event)
    currentTranslateOt = prevTranslateOt + currentPosition - startPosOt
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animationOt() {
  setSliderPositionOt()
  if (isDraggingOt) requestAnimationFrame(animationOt)
}

function setSliderPositionOt() {
  slider2.style.transform = `translateX(${currentTranslateOt}px)`
  console.log(currentTranslateOt);
}

function setPositionByIndexOt() {
  currentTranslateOt = currentIndexOt * -window.innerWidth
  prevTranslateOt = currentTranslateOt
  setSliderPositionOt()
}

/********Mobile Menu***********/
var burgerCont = document.getElementById("mobileBurgerContainer");
var burger = document.getElementById("burgerMobile");
var mobileMenuContainer = document.getElementById("mobileMenuContainer");

if(deviceWidth <=768 && deviceWidth > 540){
  mobileMenuContainer.style.height = "125px";
  burgerCont.style.paddingTop = "34px";
}else if (deviceWidth <=540 && deviceWidth > 478){
  mobileMenuContainer.style.height = "110px";
  burgerCont.style.paddingTop = "37px";
}else if (deviceWidth <=478){
  mobileMenuContainer.style.height = "78px";
  burgerCont.style.paddingTop = "18px";
}


/**********Mission, vission, values *****************/

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
   console.log(scroll);
   var fp1 = $("#fp1");
   var ftb1 = $("#ftb1");
   var ftcb1 = $("#ftcb1");
   var fth1 = $("#contHead1");
   var ftp1 = $("#contPar1");

    var fp2 = $("#fp2");
   var ftb2 = $("#ftb2");
   var ftcb2 = $("#ftcb2");
   var fth2 = $("#contHead2");
   var ftp2 = $("#contPar2");

    var fp3 = $("#fp3");
   var ftb3 = $("#ftb3");
   var ftcb3 = $("#ftcb3");
   var fth3 = $("#contHead3");
   var ftp3 = $("#contPar3");

if(deviceWidth> 1400){
   if(scroll < 550) {
      ftb1.css("height", "0");
      ftb1.css("width", "0");
      fp1.fadeOut();
      fp1.css("left", "-100%");
      ftcb1.fadeOut( 800, function() {
          fth1.fadeOut();
          ftp1.fadeOut();
      });

   }else if(scroll >= 550) {
      ftb1.css("height", "100%");
      ftb1.css("width", "32%");
      fp1.fadeIn("fast", function(){
        fp1.css("left", "0");
      });
      ftcb1.fadeIn( 800, function() {
          fth1.fadeIn(500);
          ftp1.fadeIn(1500);
      });      
   }

   if(scroll < 1200) {
      ftb2.css("height", "0");
      ftb2.css("width", "0");
      fp2.fadeOut();
      fp2.css("right", "-100%");
      ftcb2.fadeOut( 800, function() {
          fth2.fadeOut();
          ftp2.fadeOut();
      });

   }else if(scroll >= 1200) {
      ftb2.css("height", "100%");
      ftb2.css("width", "32%");
      fp2.fadeIn("fast", function(){
        fp2.css("right", "0");
      });
      ftcb2.fadeIn( 800, function() {
          fth2.fadeIn(500);
          ftp2.fadeIn(1500);
      });      
   }

      if(scroll < 1900) {
      ftb3.css("height", "0");
      ftb3.css("width", "0");
      fp3.fadeOut();
      fp3.css("left", "-100%");
      ftcb3.fadeOut( 800, function() {
          fth3.fadeOut();
          ftp3.fadeOut();
      });

   }else if(scroll >= 1900) {
      ftb3.css("height", "100%");
      ftb3.css("width", "32%");
      fp3.fadeIn("fast", function(){
        fp3.css("left", "0");
      });
      ftcb3.fadeIn( 800, function() {
          fth3.fadeIn(500);
          ftp3.fadeIn(1500);
      });      
   }

  
}else if(deviceWidth<= 1400 && deviceWidth >1024){

   if(scroll < 400) {
      ftb1.css("height", "0");
      ftb1.css("width", "0");
      fp1.fadeOut();
      fp1.css("left", "-100%");
      ftcb1.fadeOut( 800, function() {
          fth1.fadeOut();
          ftp1.fadeOut();
      });

   }else if(scroll >= 400) {
      ftb1.css("height", "100%");
      ftb1.css("width", "32%");
      fp1.fadeIn("fast", function(){
        fp1.css("left", "0");
      });
      ftcb1.fadeIn( 800, function() {
          fth1.fadeIn(500);
          ftp1.fadeIn(1500);
      });      
   }

   if(scroll < 1050) {
      ftb2.css("height", "0");
      ftb2.css("width", "0");
      fp2.fadeOut();
      fp2.css("right", "-100%");
      ftcb2.fadeOut( 800, function() {
          fth2.fadeOut();
          ftp2.fadeOut();
      });

   }else if(scroll >= 1050) {
      ftb2.css("height", "100%");
      ftb2.css("width", "32%");
      fp2.fadeIn("fast", function(){
        fp2.css("right", "0");
      });
      ftcb2.fadeIn( 800, function() {
          fth2.fadeIn(500);
          ftp2.fadeIn(1500);
      });      
   }

      if(scroll < 1467) {
      ftb3.css("height", "0");
      ftb3.css("width", "0");
      fp3.fadeOut();
      fp3.css("left", "-100%");
      ftcb3.fadeOut( 800, function() {
          fth3.fadeOut();
          ftp3.fadeOut();
      });

   }else if(scroll >= 1467) {
      ftb3.css("height", "100%");
      ftb3.css("width", "32%");
      fp3.fadeIn("fast", function(){
        fp3.css("left", "0");
      });
      ftcb3.fadeIn( 800, function() {
          fth3.fadeIn(500);
          ftp3.fadeIn(1500);
      });      
   }

}else if(deviceWidth <= 1024 && deviceWidth > 800){

    if(scroll < 267) {
      ftb1.css("height", "0");
      ftb1.css("width", "0");
      fp1.fadeOut();
      fp1.css("left", "-100%");
      ftcb1.fadeOut( 800, function() {
          fth1.fadeOut();
          ftp1.fadeOut();
      });

   }else if(scroll >= 267) {
      ftb1.css("height", "100%");
      ftb1.css("width", "32%");
      fp1.fadeIn("fast", function(){
        fp1.css("left", "0");
      });
      ftcb1.fadeIn( 800, function() {
          fth1.fadeIn(500);
          ftp1.fadeIn(1500);
      });      
   }

   if(scroll < 867) {
      ftb2.css("height", "0");
      ftb2.css("width", "0");
      fp2.fadeOut();
      fp2.css("right", "-100%");
      ftcb2.fadeOut( 800, function() {
          fth2.fadeOut();
          ftp2.fadeOut();
      });

   }else if(scroll >= 867) {
      ftb2.css("height", "100%");
      ftb2.css("width", "32%");
      fp2.fadeIn("fast", function(){
        fp2.css("right", "0");
      });
      ftcb2.fadeIn( 800, function() {
          fth2.fadeIn(500);
          ftp2.fadeIn(1500);
      });      
   }

      if(scroll < 1367) {
      ftb3.css("height", "0");
      ftb3.css("width", "0");
      fp3.fadeOut();
      fp3.css("left", "-100%");
      ftcb3.fadeOut( 800, function() {
          fth3.fadeOut();
          ftp3.fadeOut();
      });

   }else if(scroll >= 1367) {
      ftb3.css("height", "100%");
      ftb3.css("width", "32%");
      fp3.fadeIn("fast", function(){
        fp3.css("left", "0");
      });
      ftcb3.fadeIn( 800, function() {
          fth3.fadeIn(500);
          ftp3.fadeIn(1500);
      });      
   }

}else if(deviceWidth <= 800){
  if(scroll < 267) {
      ftb1.css("height", "0");
      ftb1.css("width", "0");
      fp1.fadeOut();
      fp1.css("left", "-100%");
      ftcb1.fadeOut( 800, function() {
          fth1.fadeOut();
          ftp1.fadeOut();
      });

   }else if(scroll >= 267) {
      ftb1.css("height", "100%");
      ftb1.css("width", "32%");
      fp1.fadeIn("fast", function(){
        fp1.css("left", "0");
      });
      ftcb1.fadeIn( 800, function() {
          fth1.fadeIn(500);
          ftp1.fadeIn(1500);
      });      
   }

   if(scroll < 800) {
      ftb2.css("height", "0");
      ftb2.css("width", "0");
      fp2.fadeOut();
      fp2.css("right", "-100%");
      ftcb2.fadeOut( 800, function() {
          fth2.fadeOut();
          ftp2.fadeOut();
      });

   }else if(scroll >= 800) {
      ftb2.css("height", "100%");
      ftb2.css("width", "32%");
      fp2.fadeIn("fast", function(){
        fp2.css("right", "0");
      });
      ftcb2.fadeIn( 800, function() {
          fth2.fadeIn(500);
          ftp2.fadeIn(1500);
      });      
   }

      if(scroll < 1130) {
      ftb3.css("height", "0");
      ftb3.css("width", "0");
      fp3.fadeOut();
      fp3.css("left", "-100%");
      ftcb3.fadeOut( 800, function() {
          fth3.fadeOut();
          ftp3.fadeOut();
      });

   }else if(scroll >= 1130) {
      ftb3.css("height", "100%");
      ftb3.css("width", "32%");
      fp3.fadeIn("fast", function(){
        fp3.css("left", "0");
      });
      ftcb3.fadeIn( 800, function() {
          fth3.fadeIn(500);
          ftp3.fadeIn(1500);
      });      
   }
}
  

 });

