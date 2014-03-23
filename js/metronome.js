var Metronome;
(function() {
    "use strict";

    Metronome = function(callback, bpm) {
        this.callback = callback ? callback : function() {};

        this.bpm = bpm ? bpm : 60;
        this.frame = 1000 * 60 / this.bpm;
    };

    Metronome.prototype.start = function() {
        this.runAt = new Date().getTime();
        this.tick();
    };

    Metronome.prototype.stop = function() {
        clearTimeout(this.timer);
    };

    Metronome.prototype.tick = function() {
        //Run original callback
        this.callback();

        //Calculate delay for setTimeout
        var nextRunAt = this.runAt + this.frame,
            delay = nextRunAt - (new Date().getTime()),
            that = this;

        this.timer = setTimeout(function() {
            that.tick.call(that);
        }, delay);

        this.runAt = nextRunAt;
    };


})();
