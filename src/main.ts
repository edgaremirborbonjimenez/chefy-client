import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { environment } from './environments/environment';


import { MainComponent } from './app/components/main/main.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(MainComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ],
});
