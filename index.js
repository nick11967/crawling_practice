fetch("data2.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  let mainContainer = document.getElementById("sportsData");
  for(let i = 0; i < data.sports.length; i++){
    let div = document.createElement("div");
    div.innerHTML = i + ' ' + data.sports[i];
    mainContainer.appendChild(div);
  }
  let mainContainer2 = document.getElementById("entertainsData");
  for(let i = 0; i < data.entertains.length; i++){
    let div = document.createElement("div");
    div.innerHTML = data.entertains[i];
    mainContainer2.appendChild(div);
  }
}