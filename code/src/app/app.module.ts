import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventComponent } from './components/event/event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components//player/player.component';
import { BannerComponent } from './components/banner/banner.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { UpdateMatchComponent } from './components/update-match/update-match.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { HttpClientModule } from "@angular/common/http";
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    BlogComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    PlayersComponent,
    MatchesComponent,
    PlayerComponent,
    BannerComponent,
    AsterixPipe,
    MatchInfoComponent,
    UpdateMatchComponent,
    PlayerFormComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
