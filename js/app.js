//API CHUCK NORRIS
//
const mainBtn = document.getElementById("mainBtn");
const result = document.getElementById("result");
const imgContainer = document.getElementById("img");

mainBtn.addEventListener("click", function() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open("GET", url, true);

  ajax.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const { icon_url: img, value: joke } = data;

      result.textContent = joke;
      imgContainer.src = img;
    }
  };

  ajax.onerror = function() {
    console.log("there was an erro");
  };

  ajax.send();
});
// Second way
/*(function(){
  const mainBtn = document.getElementById("mainBtn");
  const result = document.getElementById("result");
  const img = document.getElementById("img");
  
  mainBtn.addEventListener("click", function() {
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      `https://api.chucknorris.io/jokes/random
  `,
      true
    );
    request.onload = function() {
      if (request.status === 200) {
        let response = JSON.parse(request.responseText);
        result.textContent = response.value;
        img.src = response.icon_url;
      }
    };
    request.send();
  });
})();*/