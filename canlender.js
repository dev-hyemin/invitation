// 참고: https://sirius7.tistory.com/35

let wedding_year = 2023;
let wedding_month = 10;  // 실제 월 - 1 (11월이면 10으로)
let wedding_day = 11;
let wedding_time = "0요일 ?? 00시 00분";

window.onload = function () {
  buildCalendar();
}; // 웹 페이지가 로드되면 buildCalendar 실행

// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar() {
  let firstDate = new Date(wedding_year, wedding_month, 1); // 이번달 1일
  let lastDate = new Date(wedding_year, wedding_month + 1, 0); // 이번달 마지막날

  let tbody_Calendar = document.querySelector(".calender-table > tbody");
  document.getElementById("calYear").innerText = wedding_year; // 연도 숫자 갱신
  document.getElementById("calMonth").innerText = wedding_month + 1; // leftPad(wedding_month + 1);
  document.getElementById("calDay").innerText = wedding_day;
  document.getElementById("calTime").innerText = wedding_time;

  while (tbody_Calendar.rows.length > 0) {
    // 이전 출력결과가 남아있는 경우 초기화
    tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
  }

  let nowRow = tbody_Calendar.insertRow(); // 첫번째 행 추가

  for (let j = 0; j < firstDate.getDay(); j++) {
    // 이번달 1일의 요일만큼
    let nowColumn = nowRow.insertCell(); // 열 추가
  }

  for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {
    // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복

    let nowColumn = nowRow.insertCell(); // 새 열을 추가하고
    nowColumn.innerText = nowDay.getDate(); // leftPad(nowDay.getDate());  // 추가한 열에 날짜 입력

    // if (nowDay.getDay() == 0) {
    //   // 일요일인 경우 글자색 빨강으로
    //   nowColumn.style.color = "#DC143C";
    // }
    if (nowDay.getDay() == 6) {
      // 토요일인 경우 글자색 파랑으로 하고
    //   nowColumn.style.color = "#0000CD";
      nowRow = tbody_Calendar.insertRow(); // 새로운 행 추가
    }

    if (nowDay.getMonth() == wedding_month && nowDay.getDate() == wedding_day) {
      nowColumn.className = "today";
    }
  }
}

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
// function leftPad(value) {
//     if (value < 10) {
//         value = "0" + value;
//         return value;
//     }
//     return value;
// }