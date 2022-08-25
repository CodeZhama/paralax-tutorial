function paralaxTutorial() {
  let wrapper = document.getElementById("paralax-tutorial");
  wrapper.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".soliders").forEach((i) => {
      let speed = i.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      i.style.transform = `translateX(${x}px)`;
    });
  });
}
paralaxTutorial();

function swriperFunc() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

swriperFunc();

function infinityLoopSlider() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function autoCount() {
  let counts = setInterval(updated);
  let upto = 0.6;
  function updated() {
    var count = document.getElementById("counter1");
    count.innerHTML = ++upto;
    if (upto === 26.6) {
      clearInterval(counts);
    }
  }
}

function scrollOne() {
  let scrollone = setInterval(updated1);
  let scrollOne = 0;
  function updated1() {
    var scroll = document.getElementById("src1");
    scroll.innerHTML = ++scrollOne;
    if (scrollOne === 80) {
      clearInterval(scrollone);
    }
  }
}

function scrollTwo() {
  let scrolltwo = setInterval(updated2);
  let scrollTwoo = 0.4;
  function updated2() {
    var scroll2 = document.getElementById("src2");
    scroll2.innerHTML = ++scrollTwoo;
    if (scrollTwoo === 7.4) {
      clearInterval(scrolltwo);
    }
  }
}
function scrollTh() {
  let scrollthree = setInterval(updated3);
  let scrollthre = 0.1;
  function updated3() {
    var scroll3 = document.getElementById("src3");
    scroll3.innerHTML = ++scrollthre;
    if (scrollthre === 2.1) {
      clearInterval(scrollthree);
    }
  }
}

function scrollFour() {
  let scrollfour = setInterval(updated4);
  let scrollfourrr = 0.1;
  function updated4() {
    var scroll4 = document.getElementById("src4");
    scroll4.innerHTML = ++scrollfourrr;
    if (scrollfourrr === 2.1) {
      clearInterval(scrollfour);
    }
  }
}
scrollFour();
scrollTh();
scrollTwo();
scrollOne();
autoCount();

// Big counter functions//
function bigOne() {
  let bigOnee = setInterval(wrap);
  let bigone = 0;
  function wrap() {
    var bigHtml = document.getElementById("big__number");
    bigHtml.innerHTML = ++bigone;
    if (bigone === 250) {
      clearInterval(bigOnee);
    }
  }
}
function bigTwo() {
  let bigTwoo = setInterval(wrap2);
  let bigtwo = 60;
  function wrap2() {
    var big1Html = document.getElementById("big__number2");
    big1Html.innerHTML = ++bigtwo;
    if (bigtwo === 350) {
      clearInterval(bigTwoo);
    }
  }
}
function bigThre() {
  let bigThree = setInterval(wrap3);
  let bigthree = 60;
  function wrap3() {
    var big2Html = document.getElementById("big__number3");
    big2Html.innerHTML = ++bigthree;
    if (bigthree === 700) {
      clearInterval(bigThree);
    }
  }
}
function bigFour() {
  let bigFourr = setInterval(wrap2);
  let bigfour = 60;
  function wrap2() {
    var big1Html = document.getElementById("big__number4");
    big1Html.innerHTML = ++bigfour;
    if (bigfour === 300) {
      clearInterval(bigFourr);
    }
  }
}
bigFour();
bigThre();
bigTwo();
bigOne();
