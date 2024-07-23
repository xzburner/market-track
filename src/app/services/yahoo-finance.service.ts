import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YahooFinanceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://18.230.187.246:3000/historical-data';

  getHistoricalData(symbol: string, startDate: string, endDate: string): Observable<any> {
    console.log(symbol);
    const params = new HttpParams()
      .set('symbol', symbol)
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Error fetching data', error);
        return throwError(() => new Error('Erro ao buscar dados do Yahoo Finance'));
      })
    );
  }
}
