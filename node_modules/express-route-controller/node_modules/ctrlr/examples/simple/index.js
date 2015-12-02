var ctrlr = require('../../'),
    controllers = ctrlr(__dirname + '/controllers/');

controllers("cars#drive")('Filmore and Geary', 'Grant Ave and O\'farrel');
controllers('cars#shiftGears')(3);
