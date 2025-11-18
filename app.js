let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

/**
 * Vi kan iterea ut html-taggar här.
 * Då kan vi sätta css-värde på variablen i.
 * Antingen inline eller deklarea en klass i en extern css-fil.
 *
 */
let text = "";
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

    text +=
      "<span style= 'color: #ff0000'> FizzBuzz, i = " +
      i +
      "</span>" +
      "<br/ >";
  } else if (i % 3 === 0) {
    console.log("Fizz");

    text +=
      "<span style='color: #ffff00'> Fizz, i = " + i + "</span>" + "<br/> ";
  } else if (i % 5 === 0) {
    console.log("Buzz");

    text +=
      "<span style= 'color: #FF00FF'>Buzz, i = " + i + "</span>" + "<br/>";
  } else {
    console.log(i);

    text += "<span style='color: #00ffff'>" + i + "</span>" + "<br/>";
  }

  document.getElementById("text").innerHTML = text;
  /**
   * Vi kopplar ihop selector med klassen .content som är tilldela body-taggen i index.html.
   * Då kan vi lägga på css-värden på den valda selectorn.
   */

  const element = document.querySelector(".content");

  element.style.backgroundColor = "darkblue";
  element.style.fontSize = "2rem";
  element.style.fontFamily = "verdana, Arial, san-serif";
  element.style.textAlign = "center";
  element.style.padding = "0 10rem";
}


