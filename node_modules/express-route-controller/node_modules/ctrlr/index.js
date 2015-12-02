var directory = require('directory'),
    Controller = require('./lib/controller');

module.exports = function(dir) {
    dir += dir.substr(-1) === '/' ? '' : '/';

    var controllers = {};
    directory(dir, function(module, name) {
        controllers[name] = new Controller(name, module);
    });

    return function(c, a) {
        if (typeof a === 'undefined') {
            var split = c.split('#');
            c = split[0];
            a = split[1];
        }

        var controller = controllers[c];
        if (typeof controller === 'undefined') {
            throw new Error("Controller not found: " + c);
        }

        var action = controller.getAction(a);
        if (!action) {
            throw new Error("Action not found: " + c + '#' + a);
        }

        return action;
    };
};
