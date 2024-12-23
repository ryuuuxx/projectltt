naver.maps.onJSContentLoaded = function() {
    var mapOptions = {
        center: new naver.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
        zoom: 11,
    };

    var map = new naver.maps.Map('map', mapOptions);
};


document.addEventListener('DOMContentLoaded', function() {

    const resetButton = document.getElementById('resetButton');
    const placeCount = document.getElementById('placeCount');


    resetButton.addEventListener('click', function() {
      placeCount.textContent = '0';
    });
});
