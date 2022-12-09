import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { localStorage } from './injection-token';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: localStorage,
      useFactory: (platformId: Object) => {
        if (isPlatformBrowser(platformId)) {
          return window.localStorage;
        }
        if (isPlatformServer(platformId)) {
          throw Error('Not Implemented');
          // if the app is going to be used on another platform except browser, a storage-type method should be implemented here
        }
        throw Error('Not Implemented');
      },
      deps: [PLATFORM_ID]
    }
  ]
})
export class CoreModule { }
