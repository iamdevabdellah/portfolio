console.log("hello there");

var app = new Vue({
  el: "#theme-options-wrapper",
  data: {
    message: "Hello Vue!",
  },
  methods: {
    iwasclicked: function (e) {
      if (e.target.dataset.mode === "light") {
        document.getElementById("theme-style").href = "default.css";
      }
      if (e.target.dataset.mode === "blue") {
        document.getElementById("theme-style").href = "blue.css";
      }
      if (e.target.dataset.mode === "green") {
        document.getElementById("theme-style").href = "green.css";
      }
      if (e.target.dataset.mode === "purple") {
        document.getElementById("theme-style").href = "purple.css";
      }
    },
  },
});
