/**
 * Game engine-related stuff.
 */
'use strict';
var Game = Game || {};
Game.Engine = (function(window, document, BABYLON) {

  // Subscribers to events.
  var subscribers = {
    // Frame update.
    frame: [],
  };

  var engine;


  // Initialise the object.
  // @param DOMObject canvas: The WebGL canvas.
  function init(canvas) {
    engine = new BABYLON.Engine(canvas, true);
  }


  // Get Babylon engine object.
  function getEngine() {
    return engine;
  }

  // Subscribe to an event.
  // eventName: Name of event.
  // handler: Function to run on event.
  function subscribe(eventName, handler) {
    // Don't attach the same event handler twice.
    var handlerPos = subscribers[eventName].indexOf(handler);
    if (handlerPos === -1) {
      subscribers[eventName].push(handler);
    }
  }

  // Unsubscribe from an event.
  // eventName: Name of event.
  // handler: Function to run on event.
  function unsubscribe(eventName, handler) {
    var handlerPos = subscribers[eventName].indexOf(handler);
    if (handlerPos !== -1) {
      // Delete that handler.
      subscribers.splice(handlerPos, 1);
    }
  }

  // Call all subscribers on the onFrame event.
  function onFrame() {
    for (var i = 0; i < subscribers.frame.length; i++) {
      var func = subscribers.frame[i];
      func.call();
    }
  }
  
  return {
    init: init,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    onFrame: onFrame,
    // subscribers: subscribers,

    // Babylon engine object.
    getEngine: getEngine,
  };
})(null, null, BABYLON);

