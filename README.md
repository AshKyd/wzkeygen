wzkeygen
========

Implements the [Weatherzone](http://www.weatherzone.com.au/) date-based rolling key for accessing the API.

Specification
-------------
The Wetherzone API uses a custom rolling key for authentication. This rolling key is valid for 48 hours of the date in question and should be regenerated each day.

The key is defined as a MD5summed hash of the salt and key concatenated.

The salt is a number defined as the sum of day*2, month*300, year*1700000.

Usage
-----
Install wzkeygen as a NPM module, then:

    var wzkeygen = require('wzkeygen');
    var myKey = wzKeygen('mypassword');

Bugs
----
This is really simple but please feel free to submit a pull request if this 
doesn't work for you.