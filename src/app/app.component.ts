import { Component } from '@angular/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '../../node_modules/@angular/router';
import { Title, Meta } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioApp';
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private titleService: Title,
    private meta:Meta
) { }

ngOnInit() {
// this.router
// .events.pipe(
// filter(event => event instanceof NavigationEnd),
// map(() => {
// let child = this.activatedRoute.firstChild;
// while (child) {
// if (child.firstChild) {
//  child = child.firstChild;
// } else if (child.snapshot.data && child.snapshot.data['title']) {
//  return child.snapshot.data['title'];
// } else {
//  return null;
// }
// }
// return null;
// })).subscribe( (title: any) => {
// this.titleService.setTitle(title);
// });
// }
this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
        console.log(event['title']);
        console.log(event['metaDescription']);
        var tag = { name: 'description', content: event['metaDescription'] };
        this.meta.addTag(tag, false);
      });
}
}
