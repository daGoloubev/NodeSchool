var pic = require('cat-picture');
var src = pic.src;
pic.remove();
var im = require('lightning-image-poly');
var viz = new im('#visualization', null, [src], {hullAlgorithm: 'convex'});