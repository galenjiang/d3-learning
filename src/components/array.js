import * as d3 from "d3";

// const res = d3.quantile([0, 5, 30, 100], 0.25)

export default () => {
  d3.select("#app").text("array");
  var data = [
    { date: new Date(2011, 1, 1), value: 0.5 },
    { date: new Date(2011, 5, 1), value: 0.6 },
    { date: new Date(2011, 3, 1), value: 0.7 },
    { date: new Date(2011, 4, 1), value: 0.8 }
  ];

  var bisectDate = d3.bisector(function(d) {
    return d.value;
  }).right;

  const res = bisectDate(data, 0.7);

  console.log(res);
};
