import { Component, EventEmitter } from '@angular/core';
import { GuestService } from './guest.service';

declare var swal: any;

@Component({
    selector: 'form-guest',
    templateUrl: 'form.component.html'
})
export class FormComponent {
    constructor(
        private guestService: GuestService
    ){}

    name: string;
    guestAdded = new EventEmitter();

    onSubmit() {
        let data = {
            name: this.name,
        };

        this.guestService.postGuest(data).subscribe(
            result => {
                this.name = '';
                this.guestAdded.emit(data);
                swal("Sukses!", "Data berhasil dimasukkan", "success");
            }
        )
    }

}
