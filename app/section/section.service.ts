import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Section } from './section';

@Injectable()
export class SectionService {
    // private sectionUrl = 'https://returnpath.com/feed-email-heroes/?type=sections';
    private sectionUrl = 'json/sections.json';

    constructor (
        private http: Http
    ) {}

    getSections (): Observable<Section[]> {
        return this.http.get(this.sectionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json().data || {};
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
