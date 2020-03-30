import { State, Action, StateContext, Selector } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { Video } from "../models/Video";
import {
  Getvideos,
  GetVideosList,
  ReorderVideosList,
  UpdateUserNote
} from "../actions/Video.action";
import { VideoService } from "../service/video.service";

export class VideoStateModel {
  channelId: string;
  channelVideos: Video[];
}

@State<VideoStateModel>({
  name: "channelVideos",
  defaults: {
    channelId: "",
    channelVideos: []
  }
})
export class VideoState {
  constructor(private videoService: VideoService) {}

  @Selector()
  static getvideosByChannelId(state: VideoStateModel) {
    return state.channelVideos;
  }
  @Action(Getvideos)
  getvideosByChannelId(
    { getState, setState }: StateContext<VideoStateModel>,
    params
  ) {
    let videoArray = [];
    return this.videoService.fetchvideosByChannelId(params.payload).pipe(
      tap(result => {
        console.log("The result", result);
        result["items"].forEach(element => {
          let video = new Video();
          video.id = element.id.videoId;
          video.imageUrl = element.snippet.thumbnails.high.url;
          video.title = element.snippet.title;
          video.url = `https://www.youtube.com/watch?v=${element.id.videoId}`;
          video.userNote = "";
          video.order = -9;
          video.isFavorite = false;
          videoArray.push(video);
        });

        const state = getState();
        localStorage.setItem("channelVideos", JSON.stringify(videoArray));
        localStorage.setItem("channelId", params.payload);
        setState({
          ...state,
          channelVideos: videoArray,
          channelId: params.payload
        });
      })
    );
  }

  @Selector()
  static getvideosList(state: VideoStateModel) {
    let videos = state.channelVideos;
    if (localStorage.getItem("channelVideos") != null) {
      videos = JSON.parse(localStorage.getItem("channelVideos"));
    }
    console.log("videos", videos);
    return videos;
  }
  @Selector()
  static getchannelName(state: VideoStateModel) {
    let channelId = "";
    if (localStorage.getItem("channelId") != null) {
      channelId = localStorage.getItem("channelId");
    }

    return channelId;
  }
  @Action(GetVideosList)
  getvideosList({ getState, setState }: StateContext<VideoStateModel>) {
    const state = getState();
    let videos = state.channelVideos;
    if (localStorage.getItem("channelVideos") != null) {
      videos = JSON.parse(localStorage.getItem("channelVideos"));
    }
    console.log("videos", videos);
    return videos;
  }

  @Selector()
  static reorderList(state: VideoStateModel) {
    let videos = state.channelVideos;
    if (localStorage.getItem("channelVideos") != null) {
      videos = JSON.parse(localStorage.getItem("channelVideos"));
    }
    return videos;
  }
  @Action(ReorderVideosList)
  reorderVideosList(
    { getState, setState }: StateContext<VideoStateModel>,
    params
  ) {
    const state = getState();
    console.log("reorder videos", params.payload);
    localStorage.setItem("channelVideos", JSON.stringify(params.payload));
    setState({
      ...state,
      channelVideos: params.payload
    });
  }

  @Action(UpdateUserNote)
  updateUserNote(
    { getState, setState }: StateContext<VideoStateModel>,
    params
  ) {
    const state = getState();
    console.log("updated videos", params.payload);
    let videos = state.channelVideos;
    if (localStorage.getItem("channelVideos") != null) {
      videos = JSON.parse(localStorage.getItem("channelVideos"));
    }

    videos.map(vid => {
      if (vid.id == params.payload.id) {
        vid.userNote = params.payload.userNote;
      }
    });
    console.log("updated list", videos);

    localStorage.setItem("channelVideos", JSON.stringify(videos));
    setState({
      ...state,
      channelVideos: videos
    });
  }
}
