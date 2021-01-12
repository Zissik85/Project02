let APIKEY = "21GsIwLmP8BD4ROZvrDO1eKQwPL9LChh";
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("search-button").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload
    let limit = document.getElementById("limit").value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${limit}&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    console.log(limit);
    for (let i = 0; i <= limit - 1; i++) {
      console.log(`this is loop pass number ${i}`);
      fetch(url)
        .then((response) => response.json())
        .then((content) => {
          //  data, pagination, meta
          console.log(content.data);
          console.log("META", content.meta);
          let fig = document.createElement("figure");
          let img = document.createElement("img");
          let fc = document.createElement("figcaption");
          img.src = content.data[i].images.downsized.url;
          img.alt = content.data[i].title;
          fc.textContent = content.data[i].title;
          fig.appendChild(img);
          fig.appendChild(fc);
          let out = document.querySelector(".result");
          out.insertAdjacentElement("beforeend", fig);
          document.querySelector("#search").value = "";
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
