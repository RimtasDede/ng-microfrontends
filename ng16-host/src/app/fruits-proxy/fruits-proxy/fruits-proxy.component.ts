import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fruits-proxy',
  templateUrl: './fruits-proxy.component.html',
  styleUrls: ['./fruits-proxy.component.scss']
})
export class FruitsProxyComponent {
  @ViewChild('placeHolder', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;

  componentRef!: ComponentRef<any>;

  form = new FormGroup({
    color: new FormControl('')
  });

  colors = [
    {
      name: 'Red',
      value: 'red'
    },
    {
      name: 'Green',
      value: 'green'
    },
    {
      name: 'Yellow',
      value: 'yellow'
    },
    {
      name: 'Orange',
      value: 'orange'
    },
    {
      name: 'All colors',
      value: ''
    },
  ];

  ngOnInit() {
    this.loadRemote();

    this.form.valueChanges.subscribe(val => {
      const color = val.color;

      this.componentRef.instance.color = color;
    });
  }

  async loadRemote(): Promise<void> {
    const { FruitsComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });

    this.componentRef = this.viewContainer.createComponent(FruitsComponent);
  }

}
