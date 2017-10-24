d3.selectAll('.county')
  .style('stroke', 'white')
d3.selectAll('.border')
  .style('opacity', '1');

function getScrollPercent() {
  var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

setInterval(function() {
  p = getScrollPercent();
  console.log(p);
  if (p < 20) {
    d3.selectAll('.county')
      .transition()
      .style('stroke', 'white')
    d3.selectAll('.border')
      .style('opacity', '1');
  }
  else if (p < 62 ) {
    d3.selectAll('.county')
      .transition()
      .style('stroke', 'white')
    d3.selectAll('.border')
      .transition()
      .style('opacity', '.1');
  }
  else if (p < 80) {
    d3.selectAll('.county')
      .transition()
      .style('stroke', 'grey')
    d3.selectAll('.border')
      .transition()
      .style('opacity', '1');
    d3.select('#table')
      .style('position: static;')
  }
}, 150);
