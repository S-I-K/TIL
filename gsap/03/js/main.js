$(()=>{
    $box1 = $('#section1 .parallax__item__img');
    $box2 = $('#section2 .parallax__item__img');
    $box3 = $('#section3 .parallax__item__img');
    $box4 = $('#section4 .parallax__item__img');
    $box5 = $('#section5 .parallax__item__img');
    $box6 = $('#section6 .parallax__item__img');
    $box7 = $('#section7 .parallax__item__img');
    $box8 = $('#section8 .parallax__item__img');
    $box9 = $('#section9 .parallax__item__img');

    /* 01 */
    gsap.to($box1, {
        x: 200,
        y: 0,
        duration: 4,
        'border-radius': '100%',
        'rotation': '180deg',
    })


    /* 02: trigger */
    gsap.to($box2, {
        'duration': 2,
        'x': '500',
        'rotation': '360deg',
        'border-radius': '100%',

        scrollTrigger: {
            trigger: $box2,
        }
    });


    /* 03: toggleActions */
    gsap.to($box3, {
        'duration': 2,
        'x': '500',
        'rotation': '360deg',
        'border-radius': '100%',

        scrollTrigger: {
            trigger: $box3,
            toggleActions: 'play none reverse none',
            /* onEnter onLeave onEnterBack onLeaveBack */
            
        }
    });


    /* 04: start, end */
    gsap.to($box4, {
        'duration': 2,
        'x': '500',
        'rotation': '360deg',
        'border-radius': '100%',

        scrollTrigger: {
            trigger: $box4,
            start: 'top 50%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none reverse none',
            /* onEnter onLeave onEnterBack onLeaveBack */
            
        }
    });


    /* 05: scrub */
    gsap.to($box5, {
        'duration': 2,
        'x': '500',
        'rotation': '360deg',
        'border-radius': '100%',

        scrollTrigger: {
            trigger: $box5,
            start: 'top 50%',
            end: 'bottom 20%',
            markers: false,
            scrub: 2,
            /* scrub: 스크롤의 값에 따라 애니메이션 진행  */
        }
    });
});