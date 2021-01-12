window.onload = function(){
  


  anime.timeline({loop: false})
  .add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1500,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1500,
    offset: '-=1000'
  });
  
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml7 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 100 * i
  });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
  targets: '.ml10 .letter',
  rotateY: [-90, 0],
  duration: 1300,
  delay: (el, i) => 45 * i
});


//Stack menu when collapsed
$('#navbarSupportedContent').on('show.bs.collapse', function() {
  console.log("HELLO");
  $('.nav-pills').addClass('flex-column');
});

//Unstack menu when not collapsed
$('#navbarSupportedContent').on('hide.bs.collapse', function() {
  $('.nav-pills').removeClass('flex-column');
});



}

