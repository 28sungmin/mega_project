$(document).ready(function () {
  let bannerSrcArr = [
    "main1.jpg",
    "main2.jpg",
    "main3.jpg",
    "main4.jpg",
    "main5.jpg",
    "main6.jpg",
  ];
  let currentIndex = 0;
  setInterval(function () {
    $("#bannerImage").attr("src", bannerSrcArr[currentIndex]);
    currentIndex++;

    if (currentIndex > bannerSrcArr.length) {
      // 인덱스 값이 배열의 크기를 넘으면 0으로(처음 이미지) 세팅
      currentIndex = 0;
    }
  }, 3000); // 3초에 한번씩 함수 실행
});
