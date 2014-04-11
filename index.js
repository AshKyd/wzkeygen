var md5 = require('MD5');

/**
 * Weatherzone keygen
 * Implements the Weatherzone date-based rolling key for accessing the API.
 * The salt is defined as the sum of day*2, month*300, year*1700000.
 * The rolling key is defined as the MD5 sum of the salt and password conatenated.
 * @param  {string} password Your secret password to hash into a rolling key.
 * @return {string}          MD5 key used to fetch data from Weatherzone.
 */
module.exports = function(password){
	var salt, now, day, month, year;

	// Right now
	now = new Date();

	// Pick out our day, month & two digit year.
	day = now.getDay();
	month = now.getMonth()+1;
	year = now.getFullYear().toString().substring(2);

	// Create the salt as defined.
	salt = day*2 + month*300 + year*1700000;

	// Return the salted and hashed secret.
	return md5(salt+password);
}