window.onload = function () {

  function animateLogo() {
    TweenMax.fromTo(".react-logo", 5, {
      //from
      css: {
        transform: "translate(0,-50px)",
      }
    }, {
        css: {
          transform: "translate(0,50px)",
        },

        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut,
      }
    );

  }

  function animateRobot() {
    var t = new TimelineMax({ yoyo: true, repeat: -1 });
    t.to("#android-robot", 1, { rotation: "-=15deg" })
      .to("#android-robot", 1, { rotation: "-40deg" });
  }

  function updateSliderControl() {
    var links = document.querySelectorAll("#slider-control a");
    // console.log(  window.scrollY, window.pageYOffset);

    for (let i = 0; i < links.length; i++) {
      let link = links[i];

      // 获取被链接指向的部分
      let atts = link.attributes;
      let attr = atts['href'].value;
      let section = document.querySelector(attr);
      let sectionTop = section.getBoundingClientRect().top;
      let sectionBottom = section.getBoundingClientRect().bottom;

      // console.log(section.getBoundingClientRect().top);

      if (0 >= sectionTop && 0 < sectionBottom) {
        link.className = "active";
      } else {
        link.className = "";
      }
    }
  }

  // 使用 onscroll 回调函数来更新 slider
  window.onscroll = function () {
    // ...
    updateSliderControl();
  }

  // 当页面首次加载的时候更新 slider
  window.onload = function () {
    // ...
    updateSliderControl();
  };


  function scrollToElement(y) {
    //var topOfElement = window.scrollY;

    TweenMax.to(window, 1, {
      scrollTo: {
        y: y,
      },

      ease: Power2.easeInOut,
      // ease:  Elastic.easeOut.config(1, 0.3),
    });
  }

  window._scroll = scrollToElement;

  function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for (let i = 0; i < links.length; i++) {
      let link = links[i];

      link.addEventListener("click", function (event) {
        let atts = link.attributes;
        let href = atts['href'].value;
        let section = document.querySelector(href);
        let sectionTop = section.getBoundingClientRect().top + window.scrollY;
        let sectionBottom = section.getBoundingClientRect().bottom;

        scrollToElement(sectionTop);
        event.preventDefault();

      });
    }
  }

  addSmoothScrolling();
  animateLogo();
  animateRobot();

}
