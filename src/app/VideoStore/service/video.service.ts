import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  apiKey = "AIzaSyBEZt9r7g2awZhT5028t6JVmPwByj9BhsY";
  getUrl = (channelName, apiKey) => {
    return `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelName}&part=snippet,id&order=date&maxResults=${20}`;
  };
  constructor(private http: HttpClient) {}

  fetchvideosByChannelId(payload: string) {
    return this.http.get<any[]>(this.getUrl(payload, this.apiKey));
  }
}
