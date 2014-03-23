metronome.js
============

Metronome is tick-based engine with precise timer

## Usage

Include metronome.js file onto your page

``` html
<script type="text/javascript" src="js/metronome.js"></script>
```

And make new instance of Metronome class with your _callback_ and _bpm_:

``` js
var metronome = new Metronome(function() {
    //Your callback implementation here
}, 100);
```

Your callback will be fired every tick.

## API

You can use metronome object to control the metronome with followings methods:

* _start/stop_: Start or stop the metronome respectively.
* _mute/unmute_: Mute or unmute the metronome respectively. The main difference from _start/stop_ method, that _mute/unmute_ methods keep the rhythm, while _start_ method starts count rate from begin.
* _setBpm_: Method to control the bpm of the metronom.
