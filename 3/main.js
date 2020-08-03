var svg = d3.select('#chart-area').append("svg")
                        .attr('height', 400)
                        .attr('width', 400);

svg.append('circle')
    .attr("cx", 100)
    .attr("cy", 250)
    .attr('r', 70)
    .attr('fill', 'blue');