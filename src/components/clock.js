import * as d3 from "d3";

const app = d3.select("#app");
const canvas = app.append('canvas')
  .attr('width', 400)
  .attr('height', 400)

const ctx = canvas.node().getContext('2d')

d3.symbol(d3.symbolCircle)(ctx)
