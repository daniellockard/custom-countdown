'use strict';

module.exports = function(nodecg) {
  var timeLeftRep = nodecg.Replicant('timeleft');
  var startedRep = nodecg.Replicant('started');


  function tick() {
    if (timeLeftRep.value - 1 > -1) {
      timeLeftRep.value = timeLeftRep.value - 1;
      setTimeout(tick, 1000);
    }
  }
  startedRep.on('change', (newValue, oldValue) => {
    if (newValue) {
      tick();
    }
  });

}
