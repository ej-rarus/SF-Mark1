// window.onload = function() {
//     // /data 경로에서 JSON 데이터를 받아옴
//     fetch('http://localhost:3000/data')
//         .then(response => response.json()) // 응답을 JSON으로 변환
//         .then(data => {
//             // 데이터를 HTML 요소에 출력
//             console.log(data);
//             document.getElementById('id').textContent = data.id;
//             document.getElementById('name').textContent = data.name;
//             document.getElementById('email').textContent = data.email;
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// };

window.onload = function() {
    // /users 경로에서 JSON 데이터를 받아옴
    fetch('http://3.39.126.121:3000/users')
        .then(response => response.json()) // 응답을 JSON으로 변환
        .then(data => {
            // 데이터를 HTML 요소에 출력
            console.log(data);
            document.getElementById('id').textContent = data[0].id;
            document.getElementById('name').textContent = data[0].test_name;
            document.getElementById('email').textContent = data[0].test_date;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};