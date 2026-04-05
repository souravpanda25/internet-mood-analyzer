function analyzeMood() {
  let topic = document.getElementById("topic").value;

  let positive = Math.floor(Math.random() * 100);
  let negative = Math.floor(Math.random() * (100 - positive));
  let neutral = 100 - positive - negative;

  document.getElementById("result").innerHTML =
    "Mood for " + topic + ":<br>" +
    "😊 Positive: " + positive + "%<br>" +
    "😡 Negative: " + negative + "%<br>" +
    "😐 Neutral: " + neutral + "%";
  document.getElementById("positiveBar").style.width = positive + "%";
document.getElementById("negativeBar").style.width = negative + "%";
document.getElementById("neutralBar").style.width = neutral + "%";
}
