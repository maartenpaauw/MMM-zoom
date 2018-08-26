/* global Module */

/* Magic Mirror
 * Module: MMM-zoom
 *
 * Scale the entire UI with this plugin
 *
 * GNU GPL v3.0
 */

Module.register("MMM-zoom", {

    defaults : {
        zoom: 0.75
    },

    notificationReceived: function(notification, payload, sender) {
        if (notification === 'DOM_OBJECTS_CREATED') {
            document.getElementsByTagName('body')[0].style.zoom = this.config.zoom;
        }
    },
});
