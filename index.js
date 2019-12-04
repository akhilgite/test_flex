const sdk = require('kinvey-flex-sdk');
const request = require('request');

const flexData = sdk.data;

sdk.service(function(err, flex) {
    const flexFunctions = flex.functions; // Gets the FlexFunctions object
                                          // from the service.
    

     function callRoot(context, complete, modules) {
        return complete().setBody("Welcome").ok().done();
     };

    // set the handler

    flexFunctions.register('hello',callRoot);
  });

  /*function getRedLineSchedule(context, complete, modules) {
    request.get(
        'http://developer.mbta.com/Data/Red.json',
        (err, response, body) => {
            // if error, return an error
            if (err) {
                return complete().setBody('Could not complete request')
                    .runtimeError().done();
            }
            //otherwise, return the results
            return complete().setBody(body).ok().done();
    });
   }
   flexFunctions.register('getRedLineData', getRedLineSchedule);
   */