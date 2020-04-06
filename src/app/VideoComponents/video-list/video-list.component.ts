import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "src/app/VideoStore/models/Video";
import { Select, Store } from "@ngxs/store";
import { VideoState } from "src/app/VideoStore/states/video.state";

import { SortablejsOptions } from "ngx-sortablejs";
import { ReorderVideosList } from "src/app/VideoStore/actions/Video.action";
import { NotificationsService, NotificationType } from "angular2-notifications";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent implements OnInit {
  videos: Video[];

  @Select(VideoState.getvideosList) channelVideos: Observable<Video[]>;
  constructor(
    private store: Store,
    private _notifications: NotificationsService
  ) {}

  eventOptions: SortablejsOptions = {
    animation: 600,
    onUpdate: event => {
      this.store.dispatch(new ReorderVideosList(this.videos));
      this._notifications.create(
        "Order Updated!",
        null,
        NotificationType.Success,
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        }
      );
    }
  };
  ngOnInit() {
    this.channelVideos.subscribe(val => {
      this.videos = val;
    });
  }
}
