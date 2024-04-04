import { Component, Input } from '@angular/core';

import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent {
  @Input() color: string = '';

  constructor(
    public fruitsService: FruitsService,
  ) {}

}
