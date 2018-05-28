import * as d3 from "d3";
import "./data.css";

let data = [];

const app = d3.select("#app");

const colorScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range(["#ff0", "#f00"]);

function render() {
  const bars = app.selectAll(".h-bar").data(data);

  const newBars = bars
    .enter()
    .append("div")
    .classed("h-bar", true)

  newBars
    .append("span");

  bars.merge(newBars)
    .style("width", d => {
      return `${d.width * 3}px`;
    })
    .style("background-color", d => {
      return colorScale(d.color);
    })
    .select("span")
    .text(d => {
      return d.width;
    });

  bars.exit().remove();
}

setInterval(() => {
  data = d3.range(Math.round(Math.random() * 10)).map(() => {
    return {
      width: Math.round(Math.random() * 100),
      color: Math.round(Math.random() * 100)
    };
  });
  render();
}, 3000);
