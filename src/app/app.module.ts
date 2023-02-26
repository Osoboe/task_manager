import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { BoardModule } from './features/board/board.module';
import { NavigationModule } from './features/navigation/navigation.module';
import { WorkGroupModule } from './features/work-group/work-group.module';

import { NzI18nModule, NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreRouterConnectingModule,
    WorkGroupModule,
    NavigationModule,
    BoardModule,
    HttpClientModule,
    NzLayoutModule,
    BoardModule,
    NzI18nModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      traceLimit: 75,
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
