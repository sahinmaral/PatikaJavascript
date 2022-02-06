function showTime() {
  //   let name = prompt("Adınız nedir ? ");

  //   if (name == "") {
  //     alert("Lütfen adınızı giriniz");
  //     close();
  //   } else if (Number.isInteger(parseInt(name))) {
  //     alert("Lütfen adınızı doğru veya eksiksiz giriniz");
  //     close();
  //   } else {
  //     let spanMyName = document.getElementById("myName");
  //     spanMyName.textContent = name;
  //   }

  setInterval(startClock, 1000);
}

function startClock() {
  const myClockDiv = document.getElementById("myClock");

  var currentdate = new Date();

  let second = currentdate.getSeconds();
  let minute = currentdate.getMinutes();
  let hour = currentdate.getHours();

  let month = currentdate.getMonth();
  let day = currentdate.getDay();
  let year = currentdate.getFullYear();

  secondText = second % 10 == second ? "0" + second : second;
  minuteText = minute % 10 == minute ? "0" + minute : minute;
  hourText = hour % 10 == hour ? "0" + hour : hour;

  monthText = month % 10 == month ? "0" + month : month;
  dayText = day % 10 == day ? "0" + day : day;
  yearText = year % 10 == year ? "0" + year : year;

  let timeText = `${hourText}:${minuteText}:${secondText}  ${dayText}/${monthText}/${yearText}`;
  myClockDiv.innerHTML = timeText;

  let secondHand = document.getElementById("secondHand");
  let minuteHand = document.getElementById("minuteHand");
  let hourHand = document.getElementById("hourHand");

  

  if (secondHand.style.transform == "rotate(360deg)")
    secondHand.style.transform = "rotate(0deg)";
  else secondHand.style.transform = `rotate(${6 * second}deg)`;

  if (minuteHand.style.transform == "rotate(360deg)")
  minuteHand.style.transform = "rotate(0deg)";
  else minuteHand.style.transform = `rotate(${6 * minute}deg)`;

  if (hourHand.style.transform == "rotate(360deg)")
  hourHand.style.transform = "rotate(0deg)";
  else hourHand.style.transform = `rotate(${30 * hour}deg)`;
}
