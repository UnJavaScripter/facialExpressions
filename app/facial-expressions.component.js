"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var servicio_de_datos_service_1 = require('./servicio-de-datos.service');
var object_values_pipe_1 = require('./object-values.pipe');
var FacialExpressionsAppComponent = (function () {
    function FacialExpressionsAppComponent(sd) {
        this.sd = sd;
        this.urlDeLaImagen = 'http://nuragroup.com/wp-content/uploads/2015/02/Fearful-Businessman.jpg';
    }
    FacialExpressionsAppComponent.prototype.consultarAPI = function (url) {
        var _this = this;
        this.resultados = '';
        this.sd.consultarEmocion(this.urlDeLaImagen).subscribe(function (data) { return _this.resultados = data.json(); }, function (err) { return console.log(err); }, function () { return console.log('Completed!'); });
    };
    FacialExpressionsAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'facial-expressions-app',
            templateUrl: 'facial-expressions.component.html',
            styleUrls: ['facial-expressions.component.css'],
            providers: [servicio_de_datos_service_1.ServicioDeDatosService],
            pipes: [object_values_pipe_1.ObjectValues]
        }), 
        __metadata('design:paramtypes', [servicio_de_datos_service_1.ServicioDeDatosService])
    ], FacialExpressionsAppComponent);
    return FacialExpressionsAppComponent;
}());
exports.FacialExpressionsAppComponent = FacialExpressionsAppComponent;
//# sourceMappingURL=facial-expressions.component.js.map