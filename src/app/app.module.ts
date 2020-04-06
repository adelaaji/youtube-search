import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VideoState } from "./VideoStore/states/video.state";
import { VideoFormComponent } from "./VideoComponents/video-form/video-form.component";
import { VideoListComponent } from "./VideoComponents/video-list/video-list.component";
import { SortablejsModule } from "ngx-sortablejs";
//import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { VideoItemComponent } from "./VideoComponents/video-item/video-item.component";
import { InputEditComponent } from "./VideoComponents/input-edit/input-edit.component";
import { SimpleNotificationsModule } from "angular2-notifications";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from "ngx-pagination";

import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideoPlayerComponent } from "./components/video-player/video-player.component";

@NgModule({
  declarations: [
    AppComponent,
    VideoFormComponent,
    VideoListComponent,
    VideoItemComponent,
    InputEditComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([VideoState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    //NgxYoutubePlayerModule.forRoot(),
    BrowserAnimationsModule,
    YouTubePlayerModule,
    SimpleNotificationsModule.forRoot(),
    SortablejsModule.forRoot({
      animation: 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
