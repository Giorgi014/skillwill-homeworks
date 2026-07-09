enum HandTypes {
  hour = "hour",
  minute = "minute",
  second = "second",
}

type Degrees = number;

type clockTime = {
  hours: number;
  minutes: number;
  seconds: number;
};

interface ClockHand {
  element: HTMLElement;
  type: HandTypes;
}

interface ClockAngles {
  hourDeg: Degrees;
  minuteDeg: Degrees;
  secondDeg: Degrees;
}

let numbers: number[] = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let clock = document.getElementById("clock") as HTMLElement;

for (let i: number = 1; i < numbers.length; i++) {
  let clockDiv = document.createElement("div") as HTMLDivElement;

  clockDiv.classList.add("number");
  clockDiv.style.transform = `rotate(${numbers[i] * 30}deg)`;
  let clockSpan = document.createElement("span") as HTMLSpanElement;
  clockSpan.style.transform = `translateY(5px) rotate(-${numbers[i] * 30}deg) `;
  clockSpan.textContent = numbers[i].toString();
  clockDiv.appendChild(clockSpan);
  clock.appendChild(clockDiv);
}

for (let i: number = 0; i < 60; i++) {
  let clockLineDiv = document.createElement("div") as HTMLDivElement;

  clockLineDiv.classList.add("secondline");
  clockLineDiv.style.transform = ` rotate(${i * 6}deg)`;
  let clockSpan = document.createElement("span") as HTMLSpanElement;
  if (i % 5 === 0) {
    clockSpan.style.height = "10px";
    clockSpan.style.width = "3px";
  }
  clockLineDiv.appendChild(clockSpan);
  clock.appendChild(clockLineDiv);
}

const hourHand = document.getElementById("hour") as HTMLElement;
const minuteHand = document.getElementById("minute") as HTMLElement;
const secondHand = document.getElementById("second") as HTMLElement;

const hand: ClockHand[] = [
  {
    element: hourHand,
    type: HandTypes.hour,
  },
  {
    element: minuteHand,
    type: HandTypes.minute,
  },
  {
    element: secondHand,
    type: HandTypes.second,
  },
];

function getCurrentTime(): clockTime {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}

function calculateAngles(time: clockTime): ClockAngles {
  const secondDeg = time.seconds * 6;
  const minuteDeg = time.minutes * 6 + time.seconds * 0.1;
  const hourDeg = (time.hours % 12) * 30 + time.minutes * 0.5;

  return {
    hourDeg: hourDeg,
    minuteDeg: minuteDeg,
    secondDeg: secondDeg,
  };
}

function rotateHand(hand: ClockHand, degree: Degrees) {
  hand.element.style.transform = ` translateX(-50%) rotate(${degree}deg)`;
}

function updateClock(): void {
  const time = getCurrentTime();
  const angles = calculateAngles(time);
  hourHand.style.transform = `translateX(-50%) rotate( ${angles.hourDeg}deg ) `;
  minuteHand.style.transform = `translateX(-50%) rotate( ${angles.minuteDeg}deg ) `;
  secondHand.style.transform = `translateX(-50%) rotate( ${angles.secondDeg}deg ) `;

  // let music = document.createElement("audio") as HTMLAudioElement;
  // let source = document.createElement("source") as HTMLSourceElement;

  // source.src = `./audio.mp3`;
  // music.autoplay = true;
  // music.appendChild(source);
  // clock.appendChild(music);
  // clock.removeChild(music);
}

setInterval(updateClock, 1000);
