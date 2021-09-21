
let button = document.createElement("button");
button.innerHTML = "Sing!";
document.body.appendChild(button);
document.addEventListener("click", buttonClick);
function buttonClick(body) {
let friends = ["Connor", "Tristen", "Zack", "BJ", "Skylar"];
document.addEventListener("click", buttonClick);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
  {
    for (let j = 99; j > 0; j--) {
      if (j > 2) {
        console.log(
          j +
            " lines of code in the file," +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file"
        );
      } else if (j == 2) {
        console.log(
          j +
            " lines of code in the file," +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file"
        );
      }
      //singular form of line
      else {
        console.log(
          j +
            " line of code in the file," +
            j +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file"
        );
      }
      
    }
  }
}
}





