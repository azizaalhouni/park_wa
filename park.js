(function(module) {

 var parkObj = {};
 parkObj.allObj = [];

 parkObj.requestObj = function(next) {
$.ajax({
  url: 'https://data.seattle.gov/resource/64yg-jvpt.json',
  type: 'GET',
  headers: {
    'Authorization':'token '+ 'DroSLKHRDeFPJQ6CoJrXbMwJ',
  },
  success: function(data, message, xhr) {
    data.forEach(function(current) {
      parkObj.allObj.push(current);
    });
    next();
  }
});
module.
