import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  url = 'https://www.amiiboapi.com/api/amiibo'

  amiibos

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.amiibos = this.http.get(this.url).pipe(map(({ amiibo }: any) => amiibo))

  }
}
