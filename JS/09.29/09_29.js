const clock = document.querySelector("#clock");

function getClock() {
  const dday = new Date(2021, 11, 24);
  const today = new Date();
  const gap = dday.getTime() - today.getTime();

  const result_day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const result_hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const result_min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const result_sec = Math.floor((gap / 1000) % 60);

  const day = String(result_day).padStart(2, "0");
  const hours = String(result_hours).padStart(2, "0");
  const minutes = String(result_min).padStart(2, "0");
  const seconds = String(result_sec).padStart(2, "0");

  // const day = String(date.getDate()).padStart(2, "0");
  // const hours = String(date.getHours()).padStart(2, "0");
  // const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");


  clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}
 
// default text를 보여주지 않으려면, 처음에 getClock()을 먼저 호출 해준 후, Interval로 1초마다 불러옴.
getClock();

// 첫번째 argument : 실행하고자 하는 function
// 두번째 argument : 호출되는 function 간격을 몇 ms로 할 것인지
setInterval(getClock, 1000);

// 5초 뒤에 실행하고자 하는 코드를 보여줌.
// setTimeout(sayHello, 5000);