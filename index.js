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
  let mainContainer = document.getElementById("myData");
  let div = document.createElement("div");
  console.log(data);
  //for(int i=0;i<data.sports)
  div.innerHTML = data.sports + '<br>' + data.entertains;
  mainContainer.appendChild(div);
}
