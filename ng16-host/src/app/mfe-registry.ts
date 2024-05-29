import { loadRemoteModule } from '@angular-architects/module-federation';

export const mfeRegistry: { [key: string]: () => Promise<any> } = {
  'ng14-remote1': () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4203/remoteEntry.js',
    exposedModule: './Component'
  }),
};
