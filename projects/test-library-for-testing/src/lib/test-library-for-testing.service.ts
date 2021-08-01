import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TestLibraryForTestingService {

    constructor() {
    }

    getColors(): string[] {
        return [
            'green',
            'red',
            'yellow',
            'blue',
        ];
    }
}
