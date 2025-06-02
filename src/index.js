//New Yoek//
let nytoday = moment().tz("America/New_York").format("Do MMMM YYYY");
let nytodayelement = document.querySelector(".nydate");
nytodayelement.innerHTML = nytoday;

//London//
let ldntoday = moment().tz("Europe/London").format("Do MMMM YYYY");
let ldntodayelement = document.querySelector(".ldndate");
ldntodayelement.innerHTML = ldntoday;

//Tokyo//
let tkytoday = moment().tz("Aisa/Tokyo").format("Do MMMM YYYY");
let tkytodayelement = document.querySelector(".tkydate");
tkytodayelement.innerHTML = tkytoday;

//Time//
//New York//
setInterval(function () {
  let nytime = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");
  let nytimeelement = document.querySelector("#newyork");
  nytimeelement.innerHTML = nytime;
}, 1000);

//London//
setInterval(function () {
  let lndtime = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");
  let lndtimeelement = document.querySelector("#london");
  lndtimeelement.innerHTML = lndtime;
}, 1000);

//Tokyo//
setInterval(function () {
  let tkytime = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let tkytimeelement = document.querySelector("#tokyo");
  tkytimeelement.innerHTML = tkytime;
}, 1000);
