document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, Flip);

  const menuIcon = document.querySelector('.menu-icon');

  menuIcon.addEventListener('click', function () {
    this.classList.toggle('active'); // active 클래스 토글
  });

  const footerMenu = document.querySelectorAll('.footer__main-menu .footer-main-menu > li > a');
  footerMenu.forEach(menu => {
    menu.addEventListener('mouseover', function () {
      const currentSubMenu = this.parentElement.querySelector('.sub-menu');

      this.classList.add('active');
      if (currentSubMenu) {
        currentSubMenu.classList.add('active');
      }
    });

    menu.addEventListener('mouseleave', function () {
      const currentSubMenu = this.parentElement.querySelector('.sub-menu');

      this.classList.remove('active');
      if (currentSubMenu) {
        currentSubMenu.classList.remove('active');
      }
    });
  });


  //visual01 gsap
  const VboxWrapper = document.querySelector('.wrap-wide.v1 .v-box__wrapper');
  const V1box01 = document.querySelector('.wrap-wide.v1 .v-box:nth-child(1)');
  const V1box02 = document.querySelector('.wrap-wide.v1 .v-box:nth-child(2)');
  const V1boxTx = document.querySelector('.wrap-wide.v1 .v-box h3');

  const descTxV1 = document.querySelectorAll('.wrap-wide.v1 .desc-tx');
  const descWordV1 = document.querySelector('.wrap-wide.v1 .i-desc--word');
  gsap.set(V1boxTx, { xPercent: -50, yPercent: -50 });
  gsap.set(descTxV1, { autoAlpha: 0 });




  //visual02 gsap
  const VboxWrapper02 = document.querySelector('.wrap-wide.v2 .v-box__wrapper');
  const V2box01 = document.querySelector('.wrap-wide.v2 .v-box:nth-child(1)');
  const V2box02 = document.querySelector('.wrap-wide.v2 .v-box:nth-child(2)');
  const V2boxTx = document.querySelector('.wrap-wide.v2 .v-box h3');

  const descTxV2 = document.querySelectorAll('.wrap-wide.v2 .desc-tx');
  const descWordV2 = document.querySelector('.wrap-wide.v2 .i-desc--word');

  gsap.set(V2boxTx, { xPercent: -50, yPercent: -50 });
  gsap.set(descTxV2, { autoAlpha: 0 });

  //visual03 gsap
  // const VboxWrapper03 = document.querySelector('.wrap-wide.v3 .v-box__wrapper');
  // const V3box01 = document.querySelector('.wrap-wide.v3 .v-box:nth-child(1)');
  // const V3box02 = document.querySelector('.wrap-wide.v3 .v-box:nth-child(2)');
  // const V3boxTx = document.querySelector('.wrap-wide.v3 .v-box h3');

  // const descTxV3 = document.querySelectorAll('.wrap-wide.v3 .desc-tx');
  // const descWordV3 = document.querySelector('.wrap-wide.v3 .i-desc--word');

  // gsap.set(V3boxTx, { xPercent: -50, yPercent: -50 });
  // gsap.set(descTxV3, { autoAlpha: 0 });





  const VboxWrapper03 = document.querySelector(".wrap-wide.v3 .v-box__wrapper");
  const V3boxes = document.querySelectorAll(".wrap-wide.v3 .v-box");
  const V3boxTx = document.querySelectorAll(".wrap-wide.v3 h3");
  const descTxV3 = document.querySelectorAll(".wrap-wide.v3 .desc-tx");
  const descWordV3 = document.querySelectorAll(".wrap-wide.v3 .i-desc--word");

  gsap.set(V3boxTx, { xPercent: -50, yPercent: -50 });
  gsap.set(descTxV3, { autoAlpha: 0 });

  // 기존 Timeline
  const introv3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrap-wide.v3",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 1,
    },
  });

  introv3.to(V3boxTx, { y: 40, autoAlpha: 0, duration: 0.4, delay: 0.2 });
  introv3.to(V3boxes[0], { width: "50%" });
  introv3.to(V3boxes[1], { width: "50%" }, '<');
  introv3.to(VboxWrapper03, { gap: "50px" }, '<');
  introv3.to(descTxV3, { autoAlpha: 1, gap: "100px" });
  introv3.to(descWordV3, { autoAlpha: 1 }, "<");
  introv3.to(descTxV3, { autoAlpha: 0 });
  introv3.to(VboxWrapper03, {scale:0.5})
  // -------------------------
  // FLIP으로 2개 → 12개 박스 분할
  // introv3.call(() => {
  //   const state = Flip.getState(".wrap-wide.v3 .v-box");

  //   const wrapper = VboxWrapper03;
  //   const currentCount = wrapper.querySelectorAll(".v-box").length;

  //   for (let i = currentCount + 1; i <= 12; i++) {
  //     const box = document.createElement("div");
  //     box.classList.add("v-box");
  //     box.innerHTML = `
  //       <div class="img--block"><img src="./img/company-introduce-trustful.jpg" alt=""></div>
  //       <h3>Sincere Trustful</h3>
  //       <div class="desc-tx">
  //         <span class="i-desc">(</span>
  //         <span class="i-desc--word">좋은<br>재료</span>
  //         <span class="i-desc">)</span>
  //       </div>
  //     `;
  //     box.style.opacity = 0;
  //     wrapper.appendChild(box);
  //   }

  //   const newBoxes = wrapper.querySelectorAll(".v-box");
  //   newBoxes.forEach(box => box.style.opacity = 1);

  //   Flip.from(state, {
  //     duration: 1,
  //     ease: "power1.inOut",
  //     absolute: true
  //   });
  // });




  // //visual03 gsap
  // const VboxWrapper03 = document.querySelector('.wrap-wide.v3 .v-box__wrapper');
  // const V3box01 = document.querySelector('.wrap-wide.v3 .v-box.sp-box1');
  // const V3box02 = document.querySelector('.wrap-wide.v3 .v-box.sp-box2');
  // const V3boxTx = document.querySelector('.wrap-wide.v3 .v-box h3');

  // const descTxV3 = document.querySelectorAll('.wrap-wide.v3 .desc-tx');
  // const descWordV3 = document.querySelector('.wrap-wide.v3 .i-desc--word');

  // gsap.set(V3boxTx, {
  //   xPercent: -50,
  //   yPercent: -50
  // });
  // gsap.set(descTxV3, {
  //   autoAlpha: 0
  // });

  // const introv3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".wrap-wide.v3",
  //     start: "0% 0%",
  //     end: "100% 100%",
  //     scrub: 1,
  //   },
  // });
  // introv3.to(V3boxTx, {
  //   y: 40,
  //   autoAlpha: 0,
  //   duration: 0.4,
  //   delay: 0.2
  // });
  // introv3.to(V3box01, {
  //   width: "50%",
  // });
  // introv3.to(V3box02, {
  //   width: "50%",
  // }, '<');
  // introv3.to(VboxWrapper03, {
  //   gap: "50px",
  // }, '<');
  // introv3.to(descTxV3, {
  //   autoAlpha: 1,
  //   gap: "100px"
  // });
  // introv3.to(descWordV3, {
  //   autoAlpha: 1
  // }, "<");




  // fac circle

  const circle1 = document.querySelector('.fac-content .fac-box:nth-child(1)');
  const circle2 = document.querySelector('.fac-content .fac-box:nth-child(2)');



  // food// food// food// food// food// food// food

  function fadeInOnScroll(selector) {
    const items = gsap.utils.toArray(selector);

    items.forEach(item => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  }

  // v1, v2 각각 호출
  fadeInOnScroll(".food__content.v1 .food__item");
  fadeInOnScroll(".food__content.v2 .food__item");






  ScrollTrigger.matchMedia({
    // PC (데스크탑)
    "(min-width: 1025px)": function () {
      // intro
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrap-wide.v1",
          start: "0% 0%",
          end: "100% 100%",
          scrub: 1,
        },
      });
      intro.to(V1boxTx, {
        y: 40,
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.2
      });
      intro.to(V1box01, { width: "50%", });
      intro.to(V1box02, { width: "50%", }, '<');
      intro.to(VboxWrapper, { gap: "50px", }, '<');
      intro.to(descTxV1, { autoAlpha: 1, gap: "100px" });
      intro.to(descWordV1, { autoAlpha: 1 }, "<");
      intro.to(descTxV1, { autoAlpha: 0 });


      // intro2
      const introv2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrap-wide.v2",
          start: "0% 0%",
          end: "100% 100%",
          scrub: 1,
        },
      });
      introv2.to(V2boxTx, {
        y: 40,
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.2
      });
      introv2.to(V2box01, { width: "50%", });
      introv2.to(V2box02, { width: "50%", }, '<');
      introv2.to(VboxWrapper02, { gap: "50px", }, '<');
      introv2.to(descTxV2, { autoAlpha: 1, gap: "100px" });
      introv2.to(descWordV2, { autoAlpha: 1 }, "<");
      introv2.to(descTxV2, { autoAlpha: 0 });
      // intro3
      // const introv3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".wrap-wide.v3",
      //     start: "0% 0%",
      //     end: "100% 100%",
      //     scrub: 1,
      //   },
      // });
      // introv3.to(V3boxTx, {
      //   y: 40,
      //   autoAlpha: 0,
      //   duration: 0.4,
      //   delay: 0.2
      // });
      // introv3.to(V3box01, { width: "50%", });
      // introv3.to(V3box02, { width: "50%", }, '<');
      // introv3.to(VboxWrapper03, { gap: "50px", }, '<');
      // introv3.to(descTxV3, { autoAlpha: 1, gap: "100px" });
      // introv3.to(descWordV3, { autoAlpha: 1 }, "<");

      // factory
      const factory = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-factory",
          start: "0% 50%",
          end: "100% 50%",
        },
      });

      factory.to(circle1, { xPercent: 45 });
      factory.to(circle2, { xPercent: -45 }, '<');


    },

    // 모바일 (1024px 이하)
    "(min-width: 768px) and (max-width: 1024px)": function () {

      // introv1
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrap-wide.v1",
          start: "0% 0%",
          end: "100% 100%",
          scrub: 1,
        },
      });
      intro.to(V1boxTx, {
        y: 40,
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.2
      });
      intro.to(V1box01, { width: "50%", });
      intro.to(V1box02, { width: "50%", }, '<');
      intro.to(VboxWrapper, { gap: "50px", }, '<');
      intro.to(descTxV1, { autoAlpha: 1, gap: "100px" });
      intro.to(descWordV1, { autoAlpha: 1 }, "<");


      // introv2
      gsap.set(V2box02, { height: 0, width: "100%" });

      const introv2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrap-wide.v2",
          start: "0% 0%",
          end: "100% 100%",
          scrub: 1,
        },
      });
      introv2.to(V2boxTx, {
        y: 40,
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.2
      });
      introv2.to(V2box01, { height: "50%", });
      introv2.to(V2box02, { height: "50%", }, '<');
      introv2.to(VboxWrapper02, { gap: "50px", }, '<');
      introv2.to(descTxV2, { autoAlpha: 1, gap: "100px" });
      introv2.to(descWordV2, { autoAlpha: 1 }, "<");

      // circle
      const circle1 = document.querySelector('.fac-content .fac-box:nth-child(1)');
      const circle2 = document.querySelector('.fac-content .fac-box:nth-child(2)');

      gsap.set(circle1, { autoAlpha: 0, yPercent: 40 });
      gsap.set(circle2, { autoAlpha: 0, yPercent: 100 });
      const factory = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-factory",
          start: "0% 50%",
          end: "100% 50%",
        },
      });

      factory.to(circle1, {
        autoAlpha: 1,
        yPercent: 0
      });

      factory.to(circle2, {
        autoAlpha: 1,
        yPercent: 90
      });

    },

    // mobile
    "(max-width: 767px)": function () {
      gsap.set(V1box02, { height: 0, width: "100%" });

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrap-wide.v1",
          start: "0% 0%",
          end: "100% 100%",
          scrub: 1,
        },
      });

      intro.to(V1boxTx, {
        y: 40,
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.2
      });
      intro.to(V1box01, { height: "50%", });
      intro.to(V1box02, { height: "50%", }, '<');
      intro.to(VboxWrapper, { gap: "50px", }, '<');
      intro.to(descTxV1, { autoAlpha: 1, gap: "100px" });
      intro.to(descWordV1, { autoAlpha: 1 }, "<");




      // introv2
      gsap.set(V2box02, { height: 0, width: "100%" });

      const introv2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrap-wide.v2",
          start: "0% 0%",
          end: "100% 100%",
          scrub: 1,
        },
      });
      introv2.to(V2boxTx, {
        y: 40,
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.2
      });
      introv2.to(V2box01, { height: "50%", });
      introv2.to(V2box02, { height: "50%", }, '<');
      introv2.to(VboxWrapper02, { gap: "50px", }, '<');
      introv2.to(descTxV2, { autoAlpha: 1, gap: "100px" });
      introv2.to(descWordV2, { autoAlpha: 1 }, "<");

      // circle
      const circle1 = document.querySelector('.fac-content .fac-box:nth-child(1)');
      const circle2 = document.querySelector('.fac-content .fac-box:nth-child(2)');

      gsap.set(circle1, { autoAlpha: 0, yPercent: 40 });
      gsap.set(circle2, { autoAlpha: 0, yPercent: 100 });
      const factory = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-factory",
          start: "0% 50%",
          end: "100% 50%",
        },
      });

      factory.to(circle1, {
        autoAlpha: 1,
        yPercent: 0
      });

      factory.to(circle2, {
        autoAlpha: 1,
        yPercent: 90
      });
    },

    // 모든 디바이스 공통
    "all": function () {


      const header = document.querySelector(".header");

      let lastScroll = 0; // 이전 스크롤 위치 저장

      ScrollTrigger.create({
        start: 0,
        end: document.body.scrollHeight,
        onUpdate: (self) => {
          const currentScroll = self.scroll(); // 현재 스크롤 위치

          if (currentScroll > lastScroll && currentScroll > 100) {
            // 👇 스크롤을 아래로 내리면 헤더 숨김
            gsap.to(header, { y: -header.offsetHeight, duration: 0.3, ease: "power2.out" });
          } else {
            // 👆 스크롤을 올리면 헤더 보이기
            gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
          }

          lastScroll = currentScroll;
        }
      });

      const visualH2 = document.querySelector('.visual-text--block h2');
      const visualP = document.querySelector('.visual-text--block p');

      gsap.set(visualH2, { autoAlpha: 0, y: 20 });
      gsap.set(visualP, { autoAlpha: 0, y: 20 });

      const Visual = gsap.timeline({});

      Visual.to(visualH2, {
        autoAlpha: 1,
        duration: 1.8,
        y: -20,
        ease: "power2.out"
      });
      Visual.to(visualP, {
        autoAlpha: 1,
        duration: 1.8,
        y: -20,
        ease: "power2.out"
      }, '<+0.3');








      // // 각 div 안의 <p>들을 split
      // const rollingItems = gsap.utils.toArray(".rolling-content div");

      // rollingItems.forEach((item) => {
      //   // 각 div 안의 p 요소들 split
      //   const split = SplitText.create(item.querySelectorAll("p"), {
      //     type: "lines", // line 단위로 쪼갬
      //     linesClass: "split-line"
      //   });

      //   // ScrollTrigger 애니메이션
      //   gsap.fromTo(
      //     split.lines,
      //     {
      //       opacity: 0,
      //     },
      //     {
      //       opacity: 1,
      //       y: 0,
      //       stagger: 0.1, // 한 줄씩 순차 애니메이션
      //       duration: 1.5,
      //       scrollTrigger: {
      //         trigger: item,
      //         start: "top 80%",    // 화면 80% 아래에서 시작
      //         end: "bottom 40%",   // 화면 20% 위에서 끝
      //         scrub: true,         // 스크롤 연동
      //       },
      //       onComplete: () => {
      //         // 중앙을 지난 후 다시 opacity 0으로 사라지게
      //         gsap.to(split.lines, {
      //           opacity: 0,
      //           stagger: 0.1,
      //           duration: 1.5,
      //           scrollTrigger: {
      //             trigger: item,
      //             start: "center center",
      //             end: "bottom top",
      //             scrub: true,
      //           }
      //         });
      //       }
      //     }
      //   );
      // });


    }
  });





});



