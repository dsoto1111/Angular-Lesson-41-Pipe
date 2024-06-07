import { Component, OnInit } from '@angular/core';
import { map, of, filter, pipe } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    obs$ = of(1, 2, 3);

    ngOnInit(): void {
        this.obs$.pipe(this.operatorBundle()).subscribe({
            next: (whatever) => { console.log(whatever) },
            error: (err) => { console.log(err) },
            complete: () => { console.log('This subscription has completed') }
        });

        //this.obs$.pipe(map(value => value * 5), filter(num => num < 15)).subscribe({
        //    next: (whatever) => { console.log(whatever) },
        //    error: (err) => { console.log(err) },
        //    complete: () => { console.log('This subscription has completed') }
        //});
    }

    operatorBundle() {
        return pipe(
            map((value: number) => value * 5),
            filter(num => num < 15)
        );
    }
}
