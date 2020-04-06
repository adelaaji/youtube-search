import { Component, OnInit, Input } from "@angular/core";
import { Video } from "src/app/VideoStore/models/Video";
import { SortablejsOptions } from "ngx-sortablejs";
import { Store } from "@ngxs/store";
import {
  UpdateUserNote,
  PlayVideo,
} from "src/app/VideoStore/actions/Video.action";
import { NotificationsService, NotificationType } from "angular2-notifications";

@Component({
  selector: "app-video-item",
  templateUrl: "./video-item.component.html",
  styleUrls: ["./video-item.component.scss"],
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video;
  constructor(
    private store: Store,
    private _notifications: NotificationsService
  ) {}

  note: string;

  saveNote(value, video) {
    video.userNote = value;
    this.store.dispatch(new UpdateUserNote(video));

    this.note = value;
    const types = ["alert", "error", "info", "warn", "success"];

    this._notifications.create("Note Updated!", null, NotificationType.Info, {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
    });
  }

  playVideo(value, video) {
    this.store.dispatch(new PlayVideo(video.id));
  }

  eventOptions: SortablejsOptions = {
    onUpdate: (e) => {},
  };

  ngOnInit() {
    this.note = this.video.userNote;
  }
}
