import { Component, OnInit, Input } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Getvideos } from "src/app/VideoStore/actions/Video.action";
import { VideoState } from "src/app/VideoStore/states/video.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-video-form",
  templateUrl: "./video-form.component.html",
  styleUrls: ["./video-form.component.scss"]
})
export class VideoFormComponent implements OnInit {
  @Select(VideoState.getchannelName) channelId: Observable<string>;
  channelName: string;
  constructor(private store: Store) {}

  ngOnInit() {
    this.channelId.subscribe(result => {
      this.channelName = result;
    });
  }

  onSubmit() {
    this.store.dispatch(new Getvideos(this.channelName));
  }
}
