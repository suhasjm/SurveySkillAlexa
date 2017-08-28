exports.handler = (event, context, callback) => {
    // TODO implement
    callback(null, 'Hello from Lambda');
};

var handlers = {
  'CustomIntent': function () {
      // Code for the custom GetLocationIntent goes here.
  },
  'CustomIntentWithSlots': function () {
      // Code for the custom GetLocationIntent goes here.
  },
  'AMAZON.SearchAction<object@WeatherForecast>': function () {        
      // Handler for the AMAZON.SearchAction<object@WeatherForecast> built-in intent.
  },
  'AMAZON.HelpIntent': function () {    
      // Code for the weather temperature handler goes here
  },
  'AMAZON.StopIntent': function () {
      // Code for the weather condition handler goes here.
  }
};
