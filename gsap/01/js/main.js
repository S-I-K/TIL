gsap.from(".title", {
    scrollTrigger: {
        trigger: ".full_screen",  //어느 요소에 스크롤이 도착했을 때 시작할건지
        start: "-20% 40%",  //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
        end: "center center",  //스크롤 트리거의 끝점 설정.
        scrub: .5,  //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
        // markers: true,  //기준점을 화면에 표시할지 설정.
        onLeave: function(){ // 끝나는지점 callback함수
            console.log('첫번째 이벤트 완료');
        }
    },
    scale: 10,
});
    gsap.from(".img01_div > img", {
    scrollTrigger: {
        trigger: ".img01_div",
        start: "top center",
        end: "bottom top",
        scrub: 8,
        markers: true,
    },
    scale: 2,
});