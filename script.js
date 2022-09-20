function func1() {
  var land = document.getElementById("land");
  var beach = document.getElementById("beach");
  var snow = document.getElementById("snow");
  var land2 = document.getElementById("land2");
  var beach2 = document.getElementById("beach2");
  var snow2 = document.getElementById("snow2");
  var ATK = document.getElementById("ATK");
  var PEOPLE = document.getElementById("PEOPLE");

  var TotalFishingTime = 448 / PEOPLE.value;

  land.innerHTML = getBossKillTime(ATK.value, PEOPLE.value, 625000);
  beach.innerHTML = getBossKillTime(ATK.value, PEOPLE.value, 3500000);
  snow.innerHTML = getBossKillTime(ATK.value, PEOPLE.value, 12000000);

  land2.innerHTML = Math.ceil(getBossKillTime(ATK.value, PEOPLE.value, 625000) + TotalFishingTime);
  beach2.innerHTML = Math.ceil(getBossKillTime(ATK.value, PEOPLE.value, 3500000) + TotalFishingTime);
  snow2.innerHTML = Math.ceil(getBossKillTime(ATK.value, PEOPLE.value, 12000000) + TotalFishingTime);
}

function getBossKillTime(ATK, people, Boss){
  var AveATK = ATK * 21 / 6;
  return Math.ceil(Boss / (AveATK * people)) * 2.5;
}