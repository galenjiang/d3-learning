import * as d3 from "d3";
import "./selection.css";

const app = d3.select("#app");

// app.style("background-color", "#ccc");

const table = app.append("table").classed("table", true);

const th = table.append("thead");
th.append("tr").call(el => {
  ["Time", "Type", "Amount"].forEach(text => {
    el.append("th").text(text);
  });
});
table.append("tbody").call(el => {
  [
    { time: "10:22", name: "Purchase", price: "$10.00" },
    { time: "12:12", name: "Purchase", price: "$12.50" },
    { time: "14:11", name: "Expense", price: "$9.70" }
  ].forEach(o => {
    el.append("tr").call(el => {
      Object.entries(o).forEach(([key, value]) => {
        el.append("td").text(value);
      });
    });
  });
});

const rows = table.selectAll("tr");

d3.select(rows.nodes()[0]).classed("table-row-header", true);
d3.select(rows.nodes()[1]).classed("table-row-odd", true);
d3.select(rows.nodes()[2]).classed("table-row-even", true);
d3.select(rows.nodes()[3]).classed("table-row-odd", true);
