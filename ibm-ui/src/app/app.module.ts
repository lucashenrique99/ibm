import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
