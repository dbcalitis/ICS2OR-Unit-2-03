// JavaScript File

function openclosebox() {
  if (document.getElementById('box').textContent == "Open") {
    document.getElementById('img1').src = "./images/openedbox.png"
    document.getElementById('background').style.backgroundColor = "lightblue";
    document.getElementById('h1').style.color = "white";
    document.getElementById('h1').textContent = "Close Me!";
    document.getElementById('box').textContent = "Close";
    document.getElementById('h2').style.display = "block";
    document.getElementById('h2').style.color = "white";
    console.log("You opened the box!")
  }
  else {
    document.getElementById('img1').src = "./images/closedbox.png"
    document.getElementById('background').style.backgroundColor = "white";
    document.getElementById('h1').style.color = "black";
    document.getElementById('h1').textContent = "Open Me!";
    document.getElementById('box').textContent = "Open";
    document.getElementById('h2').style.display = "none";
    document.getElementById('h2').style.color = "black";
    console.log("You closed the box!")
  }
}

