
const container = document.getElementById("sketchpad");
const btnsktchpad = document.getElementById("btnsktchpad");
const clear = document.getElementById("btnclear");
const brush = document.getElementById("btnbrush");
const vanish = document.getElementById("btnvanish");
const multicolor = document.getElementById("btncustom");
// -----------------sketchpad grid add----------------------------------

btnsktchpad.addEventListener("click", function () 
{
  const divs = document.querySelectorAll('.cells');
  // divs.forEach(function (div){
  //  div.remove();
  // });
  for (var i = 0; i < divs.length; i++) {
    divs[i].remove();
  }

  let rows = prompt('how many grids do you need?');

  if (rows <= 64) {
    for (i = 0; i < (rows * rows); i++) {
      let grid = document.createElement('div');
      let cell = container.appendChild(grid);
      cell.classList.add('cells');

      var root = document.querySelector(':root');
      root.style.setProperty('--rows', rows);
      container.setAttribute('style', 'grid-template-columns: repeat(var(--rows), 1fr);');
    }

  const grids = document.querySelectorAll(".cells");

    grids.forEach(function (btn) {
      btn.addEventListener('mousemove', function () {
        btn.classList.add('active');
      });
    });
  }

  else {
    alert('Grids count must be less than 65!');
    location.reload();
  }

  // --------------------clearbutton--------------------------------------

  clear.addEventListener("click", function () {

    const grids = document.querySelectorAll(".cells");

      grids.forEach(function (btn) {
      btn.addEventListener('mousemove', function () {
        btn.classList.remove('active');
        btn.setAttribute('style', 'background-color:none');
      });
    });
  });

  // -----------------------brushevent--------------------------------------

  brush.addEventListener("click", function () {

    const grids = document.querySelectorAll(".cells");
    grids.forEach(function (btn) {
      btn.addEventListener('mousemove', function () {
        btn.classList.add('active');

      });
    });
  });

  // ---------------------clear all-------------------------------------------
  vanish.addEventListener("click", function () {

    const grids = document.querySelectorAll(".cells");
    grids.forEach(function (btn) {
      btn.classList.remove('active');
      // btn.classList.remove('multicolor');
      btn.setAttribute('style', 'background-color:none');
    });

  });

  // ---------------------Multicolor-------------------------------------------
  
  multicolor.addEventListener("click", function () {

    const grids = document.querySelectorAll(".cells");
    grids.forEach(function (btn) {
  
      btn.addEventListener('mousemove', function () {
        
        // btn.classList.add('multicolor');
    
        let random=Math.floor(Math.random() * (255 - 0)); 
        let random1=Math.floor(Math.random() * (255 - 0));
        let random2=Math.floor(Math.random() * (255 - 0));
        let rgbcolor="rgb(" + random + ',' + random1 + ',' + random2 + ")";
        console.log(rgbcolor);
        
        btn.style.backgroundColor=rgbcolor;

      });
    });
  });



  
});

