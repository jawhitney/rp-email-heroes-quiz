import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LighteningComponent } from './lightening/lightening.component';
import { BirdComponent } from './bird/bird.component';
import { MusicComponent } from './music/music.component';
import { BackgroundComponent } from './background/background.component';
import { CloudComponent } from './cloud/cloud.component';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';
import { CityscapeComponent } from './cityscape/cityscape.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';

import { SectionService } from './section/section.service';
import { HeroService } from './hero/hero.service';
import { AnalyticsService } from './analytics/analytics.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        SectionComponent,
        NavigationComponent,
        LighteningComponent,
        BirdComponent,
        MusicComponent,
        BackgroundComponent,
        CloudComponent,
        ColorSchemeComponent,
        CityscapeComponent,
        QuizComponent,
        QuizResultsComponent
    ],
    providers: [
        SectionService,
        HeroService,
        AnalyticsService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
