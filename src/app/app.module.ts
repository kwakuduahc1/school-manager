import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgPipesModule } from 'ngx-pipes';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HttpInterceptorProviders } from './interceptors/InterceptorProviders';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { APP_CONFIG } from '../environments/environment';
// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, './assets/i18n/', '.json');

// tslint:disable-next-line: typedef
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WelcomeComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NgSelectModule,
    JwtModule.forRoot({
      config: {
        tokenGetter
      },
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxFontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: APP_CONFIG.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ModalModule.forRoot()
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
