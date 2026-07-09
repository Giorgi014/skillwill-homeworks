const allTeams = [
  {
    id: 0,
    team: "ARG",
  },
  {
    id: 1,
    team: "AUS",
  },
  {
    id: 2,
    team: "BRZ",
  },
  {
    id: 3,
    team: "COL",
  },
  {
    id: 4,
    team: "CRO",
  },
  {
    id: 5,
    team: "EGY",
  },
  {
    id: 6,
    team: "ENG",
  },
  {
    id: 7,
    team: "FRA",
  },
  {
    id: 8,
    team: "GER",
  },
  {
    id: 9,
    team: "IRN",
  },
  {
    id: 10,
    team: "JPN",
  },
  {
    id: 11,
    team: "NED",
  },
  {
    id: 12,
    team: "NOR",
  },
  {
    id: 13,
    team: "ESP",
  },
  {
    id: 14,
    team: "SWE",
  },
  {
    id: 15,
    team: "URU",
  },
];

const allRounds = document.getElementById("all_rounds");
const winner = document.querySelectorAll(".round_winner");
const final = document.querySelectorAll(".round_final");
const roundSemi = document.querySelectorAll(".round_semi");
const roundQuarter = document.querySelectorAll(".round_quarter");
const roundEight = document.querySelectorAll(".round_eight");
const roundSixteen = document.querySelectorAll(".round_sixteen");
const matchTime = document.querySelectorAll(".match_time");

const randomWinner = (a, b) => {
  return Math.random() < 0.5 ? a : b;
};
const randmoDelay = () => {
  return 3000 + Math.random() * 1000;
};

const sixteenTeams = () => {
  const randomTeam = [...allTeams].sort(() => Math.random() - 0.5);
  roundSixteen.forEach((team, index) => {
    team.textContent = randomTeam[index].team;
  });

  matchTime.forEach((time) => {
    time.textContent = "21:00 2026";
  });

  console.log("=== Round of 16 ===");
  for (let i = 0; i < randomTeam.length; i += 2) {
    console.log(`${randomTeam[i].team} vs ${randomTeam[i + 1].team}`);
  }
};

const generateScore = (stage) => {
  let maxGoals;

  switch (stage) {
    case "sixteen":
      maxGoals = 6;
      break;
    case "quarter":
      maxGoals = 4;
      break;
    case "semi":
      maxGoals = 3;
      break;
    case "final":
      maxGoals = 3;
      break;
    default:
      maxGoals = 5;
  }

  let scoreA = Math.floor(Math.random() * (maxGoals + 1));
  let scoreB = Math.floor(Math.random() * (maxGoals + 1));

  while (scoreA === scoreB) {
    scoreB = Math.floor(Math.random() * (maxGoals + 1));
  }

  return [scoreA, scoreB];
};

const rounds = (currentBoxes, nextBoxes, label, stage, done) => {
  const boxes = [...currentBoxes];
  console.log(`\n=== ${label} ===`);

  const playMatch = (i) => {
    if (i >= boxes.length) {
      done();
      return;
    }

    const teamA = boxes[i];
    const teamB = boxes[i + 1];

    boxes[i].classList.add("playing");
    boxes[i + 1].classList.add("playing");
    setTimeout(() => {
      // const win = randomWinner(teamA, teamB);
      const [scoreA, scoreB] = generateScore(stage);
      const win = scoreA > scoreB ? teamA : teamB;
      const winBox = win === teamA ? boxes[i] : boxes[i + 1];
      const loseBox = win === teamA ? boxes[i + 1] : boxes[i];

      boxes[i].classList.remove("playing");
      boxes[i + 1].classList.remove("playing");
      winBox.classList.add("won");
      loseBox.classList.add("lost");

      nextBoxes[i / 2].textContent = win.textContent;
      console.log(
        `${teamA.textContent} ${scoreA} - ${scoreB} ${teamB.textContent} → 🏅 ${win.textContent}`,
      );
      playMatch(i + 2);
    }, randmoDelay());
  };
  playMatch(0);
};

const runTournament = () => {
  rounds(roundSixteen, roundQuarter, "Quarter Finals", "sixteen", () => {
    rounds(roundQuarter, roundSemi, "Semi Finals", "quarter", () => {
      rounds(roundSemi, final, "Final", "semi", () => {
        rounds(final, winner, "Winner", "final", () => {
          winner[0].classList.add("champion");
          console.log(`🏆 Champion: ${winner[0].textContent}`);
        });
      });
    });
  });
};

sixteenTeams();
runTournament();
