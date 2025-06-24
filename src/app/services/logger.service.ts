import { Injectable } from '@angular/core';

//YOU CAN PROVIDE IT LIKE THIS OR IN APP.MODULE IN PROVIDERS ARRAY
@Injectable({
  providedIn: 'root',
})
export class Logger {
  logs: string[] = []; // capture logs for testing

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
