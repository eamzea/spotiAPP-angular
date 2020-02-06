import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCutZqNESnDrOjsIAK6tQmqm2fuZuiTiKrwr-HIupS5v6vFFbvwzIBOP8l1dDXqmrovdVCSca4Bg1AUAvY"
    });

    return this.http
      .get("https://api.spotify.com/v1/browse/new-releases", {
        headers
      })
      .pipe(map(data => data["albums"].items));
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCutZqNESnDrOjsIAK6tQmqm2fuZuiTiKrwr-HIupS5v6vFFbvwzIBOP8l1dDXqmrovdVCSca4Bg1AUAvY"
    });

    return this.http
      .get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {
        headers
      })
      .pipe(map(data => data["artists"].items));
  }
}
