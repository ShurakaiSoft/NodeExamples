/**
 * this file demonstrates the wrong way to sleep in node.
 */

/**
 * Synchronous sleep
 * 
 * Will sleep for x milliSeconds
 * 
 */
function sleep(milliSeconds) {
	// synchronous sleep. Not good for Node applications.
	var startTime = new Date().getTime() + milliSeconds;
	while (new Date().getTime() < startTime) {
		// spin away...
		// no other requests can be handled while this is sleeping...
	}
}

exports.sleep = sleep;