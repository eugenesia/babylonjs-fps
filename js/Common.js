/**
 * Common/shared properties and functions for the whole game.
 */
'use strict';
var Game = Game || {};
Game.Common = (function(window, document) {

  // Subscribers to events.
  var subscribers = {
    // Frame update.
    frame: [],
  };

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
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    onFrame: onFrame,
    // subscribers: subscribers,

    // Babylon scene object.
    scene: null,
  };
})(null, null);

