document.addEventListener("DOMContentLoaded", () => {

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








  // let rollingItems = [];
  // let splits = []; // SplitText 인스턴스 저장용

  // function initRollingAnimation() {
  //   // 기존 애니메이션 제거
  //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   splits.forEach(split => split.revert()); // SplitText 되돌리기
  //   splits = [];

  //   rollingItems = gsap.utils.toArray(".rolling-content div");

  //   rollingItems.forEach((item) => {
  //     // SplitText 생성
  //     const split = SplitText.create(item.querySelectorAll("p"), {
  //       type: "lines",
  //       linesClass: "split-line"
  //     });
  //     splits.push(split);

  //     // 등장 애니메이션
  //     gsap.fromTo(
  //       split.lines,
  //       {
  //         opacity: 0,
  //         y: 30
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.1,
  //         duration: 1.5,
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 80%",
  //           end: "bottom 40%",
  //           scrub: true
  //         },
  //         onComplete: () => {
  //           // 중앙 지나면서 다시 사라짐
  //           gsap.to(split.lines, {
  //             opacity: 0,
  //             stagger: 0.1,
  //             duration: 1.5,
  //             scrollTrigger: {
  //               trigger: item,
  //               start: "center center",
  //               end: "bottom top",
  //               scrub: true
  //             }
  //           });
  //         }
  //       }
  //     );
  //   });

  //   ScrollTrigger.refresh(); // 새로 등록한 트리거 갱신
  // }

  // 최초 실행

  // 브라우저 리사이즈 시 다시 초기화



  // introv3.to(VboxWrapper03, {
  //   scale: 0.4,
  //   duration: 1,
  //   ease: "power3.inOut"
  // });


  // const carousel = document.querySelector(".carousel");
  // const slides = document.querySelectorAll(".slide");
  // const prevBtn = document.querySelector(".prev");
  // const nextBtn = document.querySelector(".next");

  // let index = 0;

  // function updateCarousel() {
  //   const slideWidth = slides[0].offsetWidth;
  //   carousel.scrollTo({
  //     left: slideWidth * index,
  //     behavior: "smooth"
  //   });
  // }

  // nextBtn.addEventListener("click", () => {
  //   if (index < slides.length - 1) {
  //     index++;
  //     updateCarousel();
  //   }
  // });

  // prevBtn.addEventListener("click", () => {
  //   if (index > 0) {
  //     index--;
  //     updateCarousel();
  //   }
  // });

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
    "(max-width: 1024px)": function () {

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



