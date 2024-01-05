/*
    ScrollTrigger Top's:
        마지막에 보여줄 UI의 형태를 먼저 .css로 작성
        > fromTo()를 이용해서 { 시작 UI }, { 최종 UI }
        > css 코드는 속성과 값을 각각 따옴표(' ', " ")로 묶어서 작성하자.
*/



gsap.registerPlugin(ScrollTrigger);

$(()=>{
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02',
            start: '0% 50%',
            end: '30% 0%',
            scrub: 2,
            markers: false
        }
    })
    .fromTo('.circle', {
        'width': '0',
        'height': '0',
        'duration': '10',
        'ease': 'elastic',
        'top': '3%',
        'opacity': '0',
    }, {
        'width': '2500px',
        'height': '2500px',
        'duration': '10',
        'opacity': '1',
        'top': '40%',
    }, 0)



    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02',
            start: '0% 30%',
            end: '30% 0%',
            scrub: 2,
            markers: true,
        }
    })
    .fromTo('.textBox', {
        'top': '50%',
        'duration': '2',
    }, {
        'top': '40%',
        'duration': '2',
    })
});