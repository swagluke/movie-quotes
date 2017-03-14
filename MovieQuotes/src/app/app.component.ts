import { Component } from '@angular/core';

interface MovieQuote {
  movie: string;
  quote: string;
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

  onSubmit(): void {
    console.log("You wish to submit a movie quote", this.formMovieQuote);
  }
}
