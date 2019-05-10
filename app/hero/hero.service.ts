import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    // private heroesUrl = 'https://returnpath.com/feed-email-heroes/?type=heroes';
    private heroesUrl = 'json/heroes.json';

    constructor (
        private http: Http
    ) {}

    getHeroes (): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json().data || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
