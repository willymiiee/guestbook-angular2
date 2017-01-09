System.register(['@angular/core', './guest.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, guest_service_1;
    var DataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (guest_service_1_1) {
                guest_service_1 = guest_service_1_1;
            }],
        execute: function() {
            DataComponent = (function () {
                function DataComponent(guestService) {
                    this.guestService = guestService;
                    this.guests = [];
                    this.editbox = [];
                    this.loading = true;
                    this.page = 1;
                    this.hidden = false;
                }
                DataComponent.prototype.ngAfterViewInit = function () {
                    this.loadFirst();
                };
                DataComponent.prototype.loadFirst = function () {
                    this.guests = [];
                    this.loading = true;
                    this.loadData();
                };
                DataComponent.prototype.loadData = function () {
                    var _this = this;
                    this.guestService.getGuests(this.page).subscribe(function (result) {
                        for (var i in result.items) {
                            _this.guests.push(result.items[i]);
                            _this.editbox.push(false);
                        }
                        _this.loading = false;
                        if (result.count < 10) {
                            _this.hidden = true;
                        }
                    });
                };
                DataComponent.prototype.loadMore = function () {
                    this.page++;
                    this.loadData();
                };
                DataComponent.prototype.show = function (id) {
                    this.guestService.showGuest(id).subscribe(function (result) {
                        swal({
                            title: "Sukses mengambil data!",
                            text: "Nama : " + result.name + "<br>Waktu dibuat : " + result.created_date,
                            html: true
                        });
                    });
                };
                DataComponent.prototype.edit = function (index) {
                    this.editbox[index] = true;
                };
                DataComponent.prototype.update = function (index) {
                    var _this = this;
                    var data = {
                        name: this.guests[index].name,
                    };
                    this.guestService.patchGuest(this.guests[index].id, data).subscribe(function (result) {
                        _this.editbox[index] = false;
                        swal("Sukses!", "Data berhasil diperbarui", "success");
                    });
                };
                DataComponent.prototype.delete = function (id) {
                    var _this = this;
                    this.guestService.deleteGuest(id).subscribe(function (result) {
                        swal("Sukses!", "Data berhasil dihapus", "success");
                        _this.loadFirst();
                    });
                };
                DataComponent = __decorate([
                    core_1.Component({
                        selector: 'data-guest',
                        templateUrl: 'data.component.html'
                    }), 
                    __metadata('design:paramtypes', [guest_service_1.GuestService])
                ], DataComponent);
                return DataComponent;
            }());
            exports_1("DataComponent", DataComponent);
        }
    }
});

//# sourceMappingURL=data.component.js.map
