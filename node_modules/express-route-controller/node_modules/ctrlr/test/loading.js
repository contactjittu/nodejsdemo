var Controller = require('../lib/controller'),
    assert = require('assert'),
    ctrlr = require('../');

describe('loaded controller object', function() {
    var controllers = ctrlr(__dirname + '/dummy/');
    it('should have a valid controller named "dummy" with the action "do"', function(done) {
        assert(typeof controllers("dummy#do") === 'function', "Doesn't have a dummy controller");
        done();
    });
});

