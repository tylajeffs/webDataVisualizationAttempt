
import * as d3 from 'd3';

data = FileAttachment("cars.csv").csv({typed: true})
keys = data.columns.slice(1)
x = new Map(Array.from(keys, key => [key, d3.scaleLinear(d3.extent(data, d => d[key]), [margin.left, width - margin.right])]))
y = d3.scalePoint(keys, [margin.top, height - margin.bottom])
z = d3.scaleSequential(x.get(keyz).domain().reverse(), colors)
line = d3.line()
    .defined(([, value]) => value != null)
    .x(([key, value]) => x.get(key)(value))
    .y(([key]) => y(key))

label = d => d.name
colors = d3.interpolateBrBG
deselectedColor = "#ddd"
brushHeight = 50
margin = ({top: 30, right: 10, bottom: 30, left: 10})
height = keys.length * 120
d3 = require("d3@6")

viewof selection = {
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    const brush = d3.brushX()
        .extent([
          [margin.left, -(brushHeight / 2)],
          [width - margin.right, brushHeight / 2]
        ])
        .on("start brush end", brushed);
  
    const path = svg.append("g")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("stroke-opacity", 0.4)
      .selectAll("path")
      .data(data.slice().sort((a, b) => d3.ascending(a[keyz], b[keyz])))
      .join("path")
        .attr("stroke", d => z(d[keyz]))
        .attr("d", d => line(d3.cross(keys, [d], (key, d) => [key, d[key]])));
  
    path.append("title")
        .text(label);
  
    svg.append("g")
      .selectAll("g")
      .data(keys)
      .join("g")
        .attr("transform", d => `translate(0,${y(d)})`)
        .each(function(d) { d3.select(this).call(d3.axisBottom(x.get(d))); })
        .call(g => g.append("text")
          .attr("x", margin.left)
          .attr("y", -6)
          .attr("text-anchor", "start")
          .attr("fill", "currentColor")
          .text(d => d))
        .call(g => g.selectAll("text")
          .clone(true).lower()
          .attr("fill", "none")
          .attr("stroke-width", 5)
          .attr("stroke-linejoin", "round")
          .attr("stroke", "white"))
        .call(brush);
  
    const selections = new Map();
  
    function brushed({selection}, key) {
      if (selection === null) selections.delete(key);
      else selections.set(key, selection.map(x.get(key).invert));
      const selected = [];
      path.each(function(d) {
        const active = Array.from(selections).every(([key, [min, max]]) => d[key] >= min && d[key] <= max);
        d3.select(this).style("stroke", active ? z(d[keyz]) : deselectedColor);
        if (active) {
          d3.select(this).raise();
          selected.push(d);
        }
      });
      svg.property("value", selected).dispatch("input");
    }
  
    return svg.property("value", data).node();
  }