let dolphinsTeamMember1Score = 96,
  dolphinsTeamMember2Score = 118,
  dolphinsTeamMember3Score = 89;
let koalasTeamMember1Score = 96,
  koalasTeamMember2Score = 128,
  koalasTeamMember3Score = 89;

let averageOfDolphinsTeam =
  (dolphinsTeamMember1Score +
    dolphinsTeamMember2Score +
    dolphinsTeamMember3Score) /
  3;
let averageOfKoalasTeam =
  (koalasTeamMember1Score + koalasTeamMember2Score + koalasTeamMember3Score) /
  3;

console.log(averageOfDolphinsTeam, averageOfKoalasTeam);

if (averageOfDolphinsTeam > averageOfKoalasTeam) {
  console.log(
    "Dolphins team is greater than Koalas team based on average score"
  );
} else if (averageOfDolphinsTeam < averageOfKoalasTeam) {
  console.log(
    "Koalas team is greater than Dolphins team based on average score"
  );
} else if (
  averageOfDolphinsTeam > averageOfKoalasTeam &&
  averageOfDolphinsTeam >= 100
) {
  console.log(
    "Dolphins team is greater than Koalas team based on average score and point is atleast 100"
  );
} else if (
  averageOfDolphinsTeam < averageOfKoalasTeam ||
  averageOfKoalasTeam >= 100
) {
  console.log(
    "Koalas team is greater than Dolphins team based on average score and point is atleast 100"
  );
} else if (
  averageOfDolphinsTeam === averageOfKoalasTeam &&
  averageOfKoalasTeam >= 100
) {
  console.log(
    "Dolphins team and Koalas team score is equal and koalas  point is greater and equal to 100"
  );
} else {
  console.log("Exit!!!");
}
