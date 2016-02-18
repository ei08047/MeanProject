/**
 * Created by Zé on 18/02/2016.
 */
var mongoose = require('mongoose');
var cigarchema = new mongoose.Schema({ time : Timestamp});

exports.daySchema = new mongoose.Schema({
    day: {type : Date.day , require : true},
    month: {type : Date.month , require : true},
    cigar:  {type : [cigarchema] , require : true}
});
