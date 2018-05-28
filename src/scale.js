import * as d3 from "d3";

const l = d3
  .scaleLinear()
  .domain([0, 1, 3])
  .range([0, 2, 6]);

const res = l(1);
