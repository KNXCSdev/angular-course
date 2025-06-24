import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<MediaItemResponse>('mediaitems').pipe(
      map((res) => {
        return res.mediaItems;
      }),
      catchError(this.handleError)
    );
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }

  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(() => 'A data error occured, please try again!');
  }
}
