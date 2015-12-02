function Controller(name, module) {
    this.name = name;
    this.module = module;
}

Controller.prototype.getAction = function(action) {
    var func = this.module[action];
    return (typeof func !== 'function') ? null : func;
};

module.exports = Controller;
