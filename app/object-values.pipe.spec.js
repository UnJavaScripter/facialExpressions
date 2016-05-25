"use strict";
var testing_1 = require('@angular/core/testing');
var object_values_pipe_1 = require('./object-values.pipe');
testing_1.describe('ObjectValues Pipe', function () {
    testing_1.beforeEachProviders(function () { return [object_values_pipe_1.ObjectValues]; });
    testing_1.it('should transform the input', testing_1.inject([object_values_pipe_1.ObjectValues], function (pipe) {
        testing_1.expect(pipe.transform(true)).toBe(null);
    }));
});
//# sourceMappingURL=object-values.pipe.spec.js.map