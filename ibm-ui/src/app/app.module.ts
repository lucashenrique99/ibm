import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ChristianVideosComponent } from './pages/christian-videos/christian-videos.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { BibleComponent } from './pages/bible/bible.component';
import { ArticlesComponent } from './pages/articles/articles.component';

import { HttpClientModule } from '@angular/common/http';
import { ArticleViewComponent } from './pages/articles/article-view/article-view.component';
import { DownloadsPageComponent } from './pages/downloads-page/downloads-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    LandingPageComponent,
    CarouselComponent,
    AboutUsComponent,
    ChristianVideosComponent,
    PageTitleComponent,
    BibleComponent,
    ArticlesComponent,
    ArticleViewComponent,
    DownloadsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
