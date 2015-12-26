var makerjs = require('makerjs');

function MyModel() {
    
    this.paths = {
        c1: new makerjs.paths.Circle([0, 0], 100)
    };
    
    this.models = {
        s1: new makerjs.models.Slot([0, -50], [0, 50], 25)
    };
}

module.exports = MyModel;