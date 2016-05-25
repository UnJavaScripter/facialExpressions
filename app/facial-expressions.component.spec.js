"use strict";
var testing_1 = require('@angular/core/testing');
var facial_expressions_component_1 = require('../app/facial-expressions.component');
testing_1.beforeEachProviders(function () { return [facial_expressions_component_1.FacialExpressionsAppComponent]; });
testing_1.describe('App: FacialExpressions', function () {
    testing_1.it('should create the app', testing_1.inject([facial_expressions_component_1.FacialExpressionsAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    // it('should have as title \'facial-expressions works!\'',
    //     inject([FacialExpressionsAppComponent], (app: FacialExpressionsAppComponent) => {
    //   expect(app.title).toEqual('facial-expressions works!');
    // }));
});
//# sourceMappingURL=facial-expressions.component.spec.js.map