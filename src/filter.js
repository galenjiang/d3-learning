import * as d3 from "d3";
import "./filter.css";

const app = d3.select(document.getElementById("app"));
const widthButton = document.createElement("button");
widthButton.innerHTML = "width";

document.body.appendChild(widthButton);
widthButton.addEventListener(
  "click",
  clickHandler((a, b) => a.expense - b.expense)
);

const categoryButton = document.createElement("button");
categoryButton.innerHTML = "category";

document.body.appendChild(categoryButton);
categoryButton.addEventListener(
  "click",
  clickHandler((a, b) => a.category < b.category ? -1 : 1)
);

function clickHandler(comparator) {
  var data = [
    { expense: 10, category: "Retail" },
    { expense: 15, category: "Gas" },
    { expense: 30, category: "Retail" },
    { expense: 50, category: "Dining" },
    { expense: 80, category: "Gas" },
    { expense: 65, category: "Retail" },
    { expense: 55, category: "Gas" },
    { expense: 30, category: "Dining" },
    { expense: 20, category: "Retail" },
    { expense: 10, category: "Dining" },
    { expense: 8, category: "Gas" }
  ];
  const sorted = data.sort(comparator)
  return () => render(app, sorted);
}

function render(container, data) {
  const bars = container.selectAll(".h-bar").data(data);

  const newBars = bars
    .enter()
    .append("div")
    .classed("h-bar", true);

  newBars.append("span");

  newBars
    .merge(bars)
    .style("width", d => `${d.expense * 5}px`)
    .select("span")
    .text(d => d.category);

  bars.exit().remove();
}
