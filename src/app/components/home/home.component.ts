import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  newSongs: any[] = [];
  loading: boolean;
  // paises: any[] = [];
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    });

    // private http: HttpClient
    // this.http
    //   .get("https://restcountries.eu/rest/v2/lang/es")
    //   .subscribe((res: any) => {
    //     this.paises = res;
    //     console.log(res);
    //   });
  }
}
