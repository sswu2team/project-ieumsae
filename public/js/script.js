document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const userImage = document.getElementById('userImage');
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        userImage.src = ""; // 파일이 없으면 이미지를 비웁니다.
    }
});
