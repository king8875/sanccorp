document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

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



    // fac circle

    const circle1 = document.querySelector('.fac-content .fac-box:nth-child(1)');
    const circle2 = document.querySelector('.fac-content .fac-box:nth-child(2)');




    let rollingItems = [];
    let splits = []; // SplitText 인스턴스 저장용

    function initRollingAnimation() {
        // 기존 애니메이션 제거
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        splits.forEach(split => split.revert()); // SplitText 되돌리기
        splits = [];

        rollingItems = gsap.utils.toArray(".rolling-content div");

        rollingItems.forEach((item) => {
            // SplitText 생성
            const split = SplitText.create(item.querySelectorAll("p"), {
                type: "lines",
                linesClass: "split-line"
            });
            splits.push(split);

            // 등장 애니메이션
            gsap.fromTo(
                split.lines,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 40%",
                        scrub: true
                    },
                    onComplete: () => {
                        // 중앙 지나면서 다시 사라짐
                        gsap.to(split.lines, {
                            opacity: 0,
                            stagger: 0.1,
                            duration: 1.5,
                            scrollTrigger: {
                                trigger: item,
                                start: "center center",
                                end: "bottom top",
                                scrub: true
                            }
                        });
                    }
                }
            );
        });

        ScrollTrigger.refresh(); // 새로 등록한 트리거 갱신
    }

    // 최초 실행
    initRollingAnimation();

    // 브라우저 리사이즈 시 다시 초기화
    window.addEventListener("resize", () => {
        clearTimeout(window._rollingResizeTimer);
        window._rollingResizeTimer = setTimeout(() => {
            initRollingAnimation();
        }, 150); // 150ms 디바운스
    });





    ScrollTrigger.matchMedia({
        // PC (데스크탑)
        "(min-width: 1025px)": function () {
            initRollingAnimation();



            const topItems = gsap.utils.toArray('.top-tx ul li');
            const botItems = gsap.utils.toArray('.bot-tx--list li');
            const imgItems = gsap.utils.toArray('.value-img--block .img--block');

            imgItems.forEach((img, i) => {
                ScrollTrigger.create({
                    trigger: img, // 이미지가 스크롤 기준
                    start: "top center", // 이미지가 뷰포트 중앙에 닿을 때
                    end: "bottom center",
                    scrub: true,
                    onEnter: () => {
                        // 1. Top Text 활성화
                        topItems.forEach(li => li.classList.remove('active'));
                        if (topItems[i]) {
                            topItems[i].classList.add('active');
                        }

                        // 2. Bot Text Fade In
                        botItems.forEach(li => {
                            li.style.opacity = 0;
                            li.style.transform = 'translateY(20px)';
                        });
                        if (botItems[i]) {
                            botItems[i].style.opacity = 1;
                            botItems[i].style.transform = 'translateY(0)';
                        }

                        // 3. Image Fade In
                        imgItems.forEach(item => item.classList.remove('active'));
                        img.classList.add('active');
                    },

                    onLeaveBack: () => {
                        // 이전 상태로 돌아가기
                        if (i > 0) {
                            // 1. Top Text
                            topItems.forEach(li => li.classList.remove('active'));
                            topItems[i - 1].classList.add('active');

                            // 2. Bot Text
                            botItems.forEach(li => {
                                li.style.opacity = 0;
                                li.style.transform = 'translateY(20px)';
                            });
                            botItems[i - 1].style.opacity = 1;
                            botItems[i - 1].style.transform = 'translateY(0)';

                            // 3. Image
                            imgItems.forEach(item => item.classList.remove('active'));
                            imgItems[i - 1].classList.add('active');
                        }
                    }
                });
            });

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
            initRollingAnimation(); // 모바일



            const circle1 = document.querySelector('.fac-content .fac-box:nth-child(1)');
            const circle2 = document.querySelector('.fac-content .fac-box:nth-child(2)');

            gsap.set(circle1, { autoAlpha: 0, yPercent: 40 });
            gsap.set(circle2, { autoAlpha: 0, yPercent: 100 });
            const factory = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-factory",
                    start: "30% 50%",
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
                        gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out", backgroundColor:"#fff" });
                    }
                    // ✅ 스크롤이 맨 위일 때 애니메이션
                    if (currentScroll === 0) {
                        gsap.fromTo(
                            header,
                            { background: "#fff",  }, // 시작 상태
                            { backgroundColor: "transparent", y: 0, duration: 0.5, ease: "power2.out",border:"none" } // 끝 상태
                        );
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





            const swiper = new Swiper('.visual-swiper .swiper', {
                loop: true,
                effect: "fade",
                speed: 2000, // 페이드 아웃 속도 (기본값 300ms → 2000ms)

                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                fadeEffect: {
                    crossFade: true // 이전 슬라이드와 자연스럽게 페이드
                },
                on: {
                    slideChangeTransitionStart: function () {
                        // 모든 슬라이드 이미지 초기화
                        gsap.set('.visual-swiper .swiper-slide img', {
                            scale: 1.1, // 줌인 상태에서 시작
                        });

                        // 현재 활성 슬라이드만 줌아웃 애니메이션
                        gsap.to(this.slides[this.activeIndex].querySelector('img'), {
                            scale: 1,       // 원래 크기로 줌아웃
                            duration: 3,    // autoplay delay와 맞추면 자연스러움
                            ease: "ease"
                        });
                    }
                }
            });



        }
    });

});



