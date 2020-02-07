import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.error = false;
    this.router.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getTopTrack(params["id"]);
      this.loading = true;
    });
  }

  ngOnInit() {}

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe(
      artist => {
        this.artist = artist;
        this.loading = false;
      },
      errorArtist => {
        this.mensajeError = errorArtist.error.error.message;
        this.loading = false;
        this.error = true;
      }
    );
  }

  getTopTrack(id: string) {
    this.spotify.getTopTracks(id).subscribe(
      tracks => {
        this.topTracks = tracks;
      },
      errorTopTrack => {
        this.mensajeError = errorTopTrack.error.error.message;
        this.loading = false;
        this.error = true;
      }
    );
  }
}
