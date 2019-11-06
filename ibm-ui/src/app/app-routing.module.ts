import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ChristianVideosComponent } from './pages/christian-videos/christian-videos.component';
import { BibleComponent } from './pages/bible/bible.component';
import { ArticlesComponent } from './pages/articles/articles.component';


const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "a-igreja", component: AboutUsComponent},
  {path: "videos-cristaos", component: ChristianVideosComponent},
  {path: "artigos", component: ArticlesComponent},
  {path: "biblia", component: BibleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
