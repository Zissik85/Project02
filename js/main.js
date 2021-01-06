// GIPHY API Key = 97Pe851kBgn10RzHgE0RYIzrRfF24d5b

let APIKEY = "21GsIwLmP8BD4ROZvrDO1eKQwPL9LChh";
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

/* Krishna's code from class

$(document).ready(function(){
    console.log("ready!");

    $('#fetchDog').on('click', function(event){
        console.log('button was clicked!');

        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        console.log(data.message);
        let imgUrl = (data.message);
        let img = `<img src=${imgUrl} />`;
        console.log(img);
        $('#result').html(img);
    });
    })
})

*/
