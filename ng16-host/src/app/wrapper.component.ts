import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { mfeRegistry } from './mfe-registry';

@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {

  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngAfterContentInit(): void {
    const elementName: string = this.route.snapshot.data['elementName'];
    const importName: string = this.route.snapshot.data['importName'];
    const importFn = mfeRegistry[importName];

    console.log('importFn', importFn, importName);

    importFn()
      .then(_ => console.debug(`element ${elementName} loaded!`))
      .catch(err => console.error(`error loading ${elementName}:`, err));

    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);
  }

}
