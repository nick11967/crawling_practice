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
  let mainContainer1 = document.getElementById("sportsData");
  let div1 = document.createElement("div");
  console.log(data);
  //for(int i=0;i<data.sports)
  div1.innerHTML = data.sports;
  mainContainer1.appendChild(div);

  let mainContainer2 = document.getElementById("entertainsData");
  let div2 = document.createElement("div");
  console.log(data);
  div2.innerHTML = data.entertains;
  mainContainer2.appendChild(div);
}
