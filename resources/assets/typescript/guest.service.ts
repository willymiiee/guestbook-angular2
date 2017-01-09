import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GuestService {
    constructor(private http: Http) { }

    private url = '/api/guests'; 

    getGuests(page) {
        return this.http.get(this.url+'/?page='+page)
            .map((res:Response) => res.json());
    }

    postGuest(data) {
        return this.http.post(this.url, data);
    }

    showGuest(id) {
        return this.http.get(this.url+'/'+id)
            .map((res:Response) => res.json());
    }

    patchGuest(id, data) {
        return this.http.patch(this.url+'/'+id, data);        
    }

    deleteGuest(id) {
        return this.http.delete(this.url+'/'+id);
    }
}
