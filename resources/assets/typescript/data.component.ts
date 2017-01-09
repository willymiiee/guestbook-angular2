import { Component, AfterViewInit } from '@angular/core';
import { GuestService } from './guest.service';

declare var swal: any;

@Component({
    selector: 'data-guest',
    templateUrl: 'data.component.html'
})
export class DataComponent implements AfterViewInit {
    constructor(
        private guestService: GuestService
    ){}

    guests = [];
    editbox = [];
    loading = true;
    page = 1;
    hidden = false;

    ngAfterViewInit() {
        this.loadFirst();
    }

    loadFirst() {
        this.guests = [];
        this.loading = true;
        this.loadData();
    }

    loadData() {
        this.guestService.getGuests(this.page).subscribe(
            result => {
                for (var i in result.items) {
                    this.guests.push(result.items[i]);
                    this.editbox.push(false);
                }

                this.loading = false;

                if (result.count < 10) {
                    this.hidden = true;
                }
            }
        )
    }

    loadMore() {
        this.page++;
        this.loadData();
    }

    show(id) {
        this.guestService.showGuest(id).subscribe(
            result => {
                swal({
                    title: "Sukses mengambil data!",
                    text: "Nama : "+result.name+"<br>Waktu dibuat : "+result.created_date,
                    html: true
                });
            }
        )
    }

    edit(index) {
        this.editbox[index] = true;
    }

    update(index) {
        let data = {
            name: this.guests[index].name,
        };

        this.guestService.patchGuest(this.guests[index].id, data).subscribe(
            result => {
                this.editbox[index] = false;
                swal("Sukses!", "Data berhasil diperbarui", "success");
            }
        )
    }

    delete(id) {
        this.guestService.deleteGuest(id).subscribe(
            result => {
                swal("Sukses!", "Data berhasil dihapus", "success");
                this.loadFirst();
            }
        )
    }
}
