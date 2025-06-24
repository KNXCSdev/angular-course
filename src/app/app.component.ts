import { Component, OnInit } from '@angular/core';
import { Logger } from './services/logger.service';
import { HeroService } from './services/hero2services.service';
import { ActivatedRoute } from '@angular/router';
export class Item {
  name = '';
}
@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //SECTION TEXT INTERPOLATION
  currentCustomer = 'Mario';

  //SECTION EVENT BINDING
  currentItem = { name: 'teapot' };
  clickMessage = '';
  name: string;

  constructor(
    private heroService: HeroService,
    // TO
    private router: ActivatedRoute,
    // TO GET PARAMS OF URL
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      this.name = params['name'];
    });

    // const heroId = this.route.snapshot.paramMap.get('id');
    // this.hero$ = this.heroService.getHeroes();
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target is ' + (event.target as HTMLElement).textContent
      : '';
    alert('Saved.' + evtMsg);

    if (event) {
      event.stopPropagation();
    }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target class is ' + (event.target as HTMLElement).className
      : '';
    alert('Click me.' + evtMsg);
    const test = this.heroService.getHeroes();
    console.log(test);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  //SECTION PROPERTY BINDING
  isUnchanged = false;
  parentItem = 'lamp';
  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  itemImageUrl =
    'https://images.freeimages.com/fic/images/icons/2297/super_mario/256/paper_bowser.png';
}
