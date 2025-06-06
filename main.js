  function changeLogo() {
        const logo = document.getElementById("video");
        if (window.innerWidth < 1200) {
            logo.innerHTML = "<img width='100%' src ='gallery/demo.gif'> ";
            console.log("changed to gif");
        } else {
            logo.innerHTML = "<video autoplay loop muted width='100%'><source src='gallery/demo.webm' type='video/webm'></video>";
            console.log("changed to webm");
        }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 1200px)")

  x.addEventListener("change", function() {
    changeLogo(x);
  });