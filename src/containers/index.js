import page from "page";
import arrayPage from "../components/array";
import dataPage from "../components/data";
import filterPage from "../components/filter";

export default () => {
  page("/", function() {
    const app = document.getElementById("app");
    app.innerHTML = `
    <div>
      <a href="/array">array</a>
      
      <a href="/data">data</a>
      
      <a href="/filter">filter</a>
    </div>
  `;
  });

  page("/array", function() {
    const app = document.getElementById("app");
    app.innerHTML = `
    <div>
      array
    </div>
  `;
    arrayPage();
  });

  page("/data", function() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    dataPage();
  });

  page("/filter", function() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    filterPage();
  });

  page("*", () => {
    document.write("404");
  });

  page();
  page();

  console.log("render");
};
