
//placeholder rent data over 12 months for two 'fake' zip codes
// d1 =[420,475,515,525,550,600,650,685,700,750,825,920]
// d2 =[340,420,560,620,680,730,750,790,820,840,850,890]
// months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
// s=[d1,d2]
//
// var zipcode1 = [];

months = ["Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov"];

//create a chart
$('#series_chart').highcharts({
    chart:  { zoomType: 'xy' }, //set option to zoom
    title: {text: 'Rent over Time', x: -20},
    subtitle: {text: 'For Specified Zip Code(s)', x:-20},
    xAxis: {categories: months}, //categories will set the x tick labels
    yAxis: {min: 0, title: {text: 'Rent ($US)'}},
    legend: {layout: 'vertical', align: 'right', verticalAlign: 'middle'}
    series: s //this is our data
});
