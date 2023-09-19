window.onload = function() {
  // Fade in the logo
  window.onscroll = function () {
    // var container = document.querySelector(".about-me-section-container");
    var sw_txt = document.getElementById("sw-text");
    var hw_txt = document.getElementById("hw-text");
    var mech_txt = document.getElementById("mech-text");
    var scrollHeight = window.pageYOffset;
    // var containerTop = container.offsetTop;
    // var containerHeight = container.offsetHeight;
    // var containerBottom = containerHeight + containerTop
    var windowHeight = window.innerHeight;
    var image1 = document.getElementById("image_r_only");
    var image2 = document.getElementById("image_cpu_only");

    // sw-text part
    if (scrollHeight > windowHeight / 2) {
      var opa = Math.min((scrollHeight - windowHeight / 2) / windowHeight, 1);
      image1.style.opacity = opa;
      sw_txt.style.opacity = opa;
      image1.style.transform = "scale(0.4)";  // scroll back
    }
    else {
      image1.style.opacity = 0;
      sw_txt.style.opacity = 0;
      image1.style.transform = "scale(0.4)";  // scroll back
    }
    // hw-text part
    if (scrollHeight > windowHeight * 1.5) {
      var opa = Math.min((scrollHeight - windowHeight * 1.5) / windowHeight, 0.95);
      image2.style.opacity = opa;
      hw_txt.style.opacity = opa;
      image2.style.transform = "scale(0.4)";  // scroll back
    }
    else {
      image2.style.opacity = 0;
      hw_txt.style.opacity = 0;
      image2.style.transform = "scale(0.4)";  // scroll back
    }
    // mech-text part
    if (scrollHeight > windowHeight * 3.5) {
      var opa = Math.min((scrollHeight - windowHeight * 3.5) / windowHeight, 1);
      mech_txt.style.opacity = opa;
      image1.style.transform = "scale(0.4) rotateX(25deg) rotateY(-25deg) rotateZ(25deg)";
      image1.style,transformOrigin = "center center";
      image2.style.transform = "scale(0.4) rotateX(25deg) rotateY(-25deg) rotateZ(25deg)";
      image2.style.transformOrigin = "center center";
    }
    else {
      mech_txt.style.opacity = 0;
    }
  }

  // Sticky navbar
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar-sticky');
    var header = document.querySelector('.header-sticky');

    if (window.pageYOffset > 0) {
      navbar.classList.add('sticky-nav');
      header.classList.add('sticky-header');
    } else {
      navbar.classList.remove('sticky-nav');
      header.classList.remove('sticky-header');
    }
  });
}

const ctx = document.getElementById('skillChart');

new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Python', 'C', 'Vim', 'KiCad', 'FreeCAD', 'Linux', 'Windows', 'Resolve'],
    datasets: [{
      label: '# of Votes',
      data: [10, 5, 8, 5, 3, 9, 10, 2],
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
        color: 'rgb(255, 255, 240)',
        font: {
          size: 14,
          }
        }
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    width: 500, // Set the width in pixels
    height: 500, // Set the height in pixels
    scales: {
      r: {
        ticks: {
          display: false,
        }
      }
    }
  }
});