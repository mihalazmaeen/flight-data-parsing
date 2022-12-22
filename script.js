const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};
let app = new Vue({
  el: "#app",
  data: {
    flights: [],
    toggle: true,
  },
  mounted: function () {
    let arr = axios
      .get("flightjson.txt")
      .then((response) => {
        //  console.log(arr);

        const arrc = Object.entries(response.data);
        // this.flights = arrc;
        // console.log(arrc[0]);

        let firstFlights = arrc[0][1];
        const arrf = Object.entries(firstFlights);
        console.log(arrc[0][1]);

        this.flights = arrc[0][1];
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
});
document
  .getElementById("search")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("app").style.display='block'
  });