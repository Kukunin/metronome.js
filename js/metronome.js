var Metronome;
(function() {
    "use strict";

    Metronome = function(callback, bpm) {
        this.callback = callback ? callback : function() {};

        this.setBpm(bpm);
    };

    Metronome.prototype.start = function() {
        this.runAt = new Date().getTime();
        this.tick();
    };

    Metronome.prototype.stop = function() {
        clearTimeout(this.timer);
    };

    Metronome.prototype.setBpm = function(bpm) {
        this.bpm = bpm ? bpm : 60;
        this.frame = 1000 * 60 / this.bpm;
    }

    Metronome.prototype.mute = function() {
        this.muted = true;
    }

    Metronome.prototype.unmute = function() {
        this.muted = false;
    }

    Metronome.prototype.tick = function() {
        //Run original callback
        if ( !this.muted ) {
            this.callback();
        }

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
