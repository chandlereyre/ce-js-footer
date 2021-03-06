'use strict';

var moment = require('moment');

/**
 * Returns a string copyright element with a footer and updating year
 * @param {string} name 
 * @return {string}
 */

exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + " All rights reserved";
};