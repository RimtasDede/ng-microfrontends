import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-fruits-proxy',
  templateUrl: './fruits-proxy.component.html',
  styleUrls: ['./fruits-proxy.component.scss']
})
export class FruitsProxyComponent {
  @ViewChild('placeHolder', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;

  ngOnInit() {
    this.loadRemote();
  }

  async loadRemote(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });
    console.log('m', m);
    const componentRef = this.viewContainer.createComponent(m.FruitsComponent);
  }

}
