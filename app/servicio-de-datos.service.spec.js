"use strict";
var testing_1 = require('@angular/core/testing');
var servicio_de_datos_service_1 = require('./servicio-de-datos.service');
testing_1.describe('ServicioDeDatos Service', function () {
    testing_1.beforeEachProviders(function () { return [servicio_de_datos_service_1.ServicioDeDatosService]; });
    testing_1.it('should ...', testing_1.inject([servicio_de_datos_service_1.ServicioDeDatosService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=servicio-de-datos.service.spec.js.map