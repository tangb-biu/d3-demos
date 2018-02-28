import * as d3 from "d3";


let [ width, height ] = [1000, 600];
let projection = d3.geoMercator()
    .center([107, 31])
    .scale(600)
    .translate([width / 2, height / 2]);

let path = d3.geoPath()
    .projection(projection);


let color = d3.schemeCategory10;

let svg = d3.select("body")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 700);                                     
d3.json("src/file/china.json", (error, root) => {
    let groups = svg.append("g");
    let len = root.features.length;
    groups.selectAll("path")
        .data(root.features)
        .enter()
        .append("path")
        .attr("class", "province")
        .style("fill", (d, i) => color[i%10])
        .attr("d", (d, i) => {
            console.log(d);
            return path(d);
        });
})