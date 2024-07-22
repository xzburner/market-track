import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YahooFinanceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://query1.finance.yahoo.com/v8/finance/chart/';

  getHistoricalData(symbol: string, startDate: string, endDate: string): Observable<any> {
    const params = new HttpParams()
      .set('period1', Math.floor(new Date(startDate).getTime() / 1000).toString())
      .set('period2', Math.floor(new Date(endDate).getTime() / 1000).toString())
      .set('interval', '1d')
      .set('events', 'history');

    return this.http.get(`${this.apiUrl}${symbol}`, { params }).pipe(
      catchError(error => {
        console.error('Error fetching data', error);
        return throwError(() => new Error('Erro ao buscar dados do Yahoo Finance'));
      })
    );
  }
}
