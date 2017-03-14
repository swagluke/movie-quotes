import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";

interface MovieQuote {
  movie: string;
  quote: string;
  $key?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formMovieQuote: MovieQuote = {
    'quote': '',
    'movie': ''
  };

  movieQuotesStream: FirebaseListObservable<MovieQuote[]>;

  constructor(private af: AngularFire) {
    this.movieQuotesStream = af.database.list("/quotes");

    //this.movieQuotesStream.subscribe((moviequotes: MovieQuote[]) =>)
  }

  onSubmit(): void {
    try {
      //this.moviequotes.unshift(this.formMovieQuote);
      if (this.formMovieQuote.$key) {
        this.movieQuotesStream.update(this.formMovieQuote.$key,
          {
            'quote': this.formMovieQuote.quote,
            'movie': this.formMovieQuote.movie
          });
      } else {
        this.movieQuotesStream.push(this.formMovieQuote);
      }

      this.formMovieQuote = {
        'quote': '', 'movie': ''
      };
    } catch (e) {
      console.log("Submit error", e);
    }
  }

  edit(movieQuoteToEdit: MovieQuote): void {
    this.formMovieQuote = movieQuoteToEdit;
  }

  delete(keyToDelete: string): void {
    this.movieQuotesStream.remove(keyToDelete);
  }
}
