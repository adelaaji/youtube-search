import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Output,
} from "@angular/core";
import { Video } from "src/app/VideoStore/models/Video";
import { Observable } from "rxjs";
import { VideoState } from "src/app/VideoStore/states/video.state";
import { Select, Store } from "@ngxs/store";
import { PlayVideo } from "src/app/VideoStore/actions/Video.action";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild("demoYouTubePlayer", { read: true, static: true })
  demoYouTubePlayer: ElementRef<HTMLDivElement>;

  id: string = "";
  videoWidth: number = 450;
  videoHeight: number = 300;

  @Select(VideoState.getVideoToPlayId) currentVideoToPlay;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private store: Store
  ) {}
  closeVideo = () => {
    this.store.dispatch(new PlayVideo(""));
    this.id = "";
  };

  videoReady(event) {
    console.log("ready for", event.target);
    event.target.playVideo();
  }
  ngOnInit() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api" + "?autoplay=1";

    document.body.appendChild(tag);
    this.currentVideoToPlay.subscribe((val) => {
      console.log("VID NAME ", val);
      if (val != "") {
        this.id = val;
      }
    });
  }
}
