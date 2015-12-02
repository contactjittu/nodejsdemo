var Controller = require('../lib/controller'),
    assert = require('assert');

// TODO: Add a test for seeing whether the right arguments are being passed in

describe('instance of Controller', function() {
    it('should have a method called getAction', function(done) {
        var c = new Controller("test", {});
        assert(!!c.getAction && typeof c.getAction == 'function', "Instance of Controller doesn't have getAction");
        done();
    });
    it('trying to get an undefined method should return null', function(done) {
        var c = new Controller("test", {});
        assert(c.getAction('no action') === null, "Finding an invalid method isn't null");
        done();
    });
});
