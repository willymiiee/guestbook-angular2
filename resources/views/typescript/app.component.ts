import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<form-guest></form-guest>
                <data-guest (guestAdded)="form-guest.loadFirst()"></data-guest>`,
})
export class AppComponent {

}
