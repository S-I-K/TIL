gsap.registerPlugin(ScrollTrigger);

$(()=>{
    /* section01 */
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con01', //애니메이션이 작동되는 기준점
            start: 'center center', // 1번째 인자: 트리거의 기준, 2번째 인자 브라우저의 기준
            end: '60% 20%', // 위와 동일
            scrub: 2,
            markers: false,
        }
    })
    .to('h2.title', {
        y: '140px',
        duration: 2,
        ease: 'ease'
    }, 0)
    .to('h2.title', {
        opacity: 0,
        duration: 2,
        ease: 'ease'
    }, 0)




    /* section02 */
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02 ul', //애니메이션이 작동되는 기준점
            start: 'top 100%', // 1번째 인자: 트리거의 기준, 2번째 인자 브라우저의 기준
            end: 'center 20%', // 위와 동일
            scrub: 2,
            markers: false,
        }
    })
    .to('.con02 li:nth-child(1)', {
        y: '-400px',
        duration: 1,
        ease: 'none'
    }, 0.2)
    .to('.con02 li:nth-child(2)', {
        y: '-400px',
        duration: 1,
        ease: 'none'
    }, 0.4)
    .to('.con02 li:nth-child(3)', {
        y: '-400px',
        duration: 1,
        ease: 'none'
    }, 0.6)
    .to('.con02 li:nth-child(4)', {
        y: '-400px',
        duration: 1,
        ease: 'none'
    }, 0.8)




    gsap.timeline({
        scrollTrigger: {
            trigger: '.con03',
            start: 'top bottom',
            end: '30% 30%',
            scrub: 2,
            markers: true
        }
    })
    .fromTo('.con03 span.a', {
        y: '400%'
    },
    {
        y: '0'
    }, 1.2)
    .fromTo('.con03 span.b', {
        y: '400%'
    },
    {
        y: '0'
    }, 1.4)
    .fromTo('.con03 span.c', {
        y: '400%'
    },
    {
        y: '0'
    }, 1.6)
    .fromTo('.con03 span.d', {
        y: '400%'
    },
    {
        y: '0'
    }, 1.8)
    .fromTo('.con03 span.e', {
        y: '400%'
    },
    {
        y: '0'
    }, 2)
});