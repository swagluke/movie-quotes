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
  moviequote: MovieQuote = {
    'quote': 'Everything is awesome',
    'movie': 'The Lego Movie'
  };
}
