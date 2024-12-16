$(document).ready(function () {
  setInterval(function () {
    $(".bannerImg1").attr("position", bannerSrcArr[currentIndex]);
    currentIndex++;

    if (currentIndex > bannerSrcArr.length) {
      currentIndex = 0;
    }
  }, 3000); // 3초에 한번씩 함수 실행
});
