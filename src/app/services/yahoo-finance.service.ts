import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YahooFinanceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://xpp4s7eh4gybxrkzcslxuypqxu0vxrxj.lambda-url.sa-east-1.on.aws/historical-data';

  getHistoricalData(symbol: string, startDate: string, endDate: string): Observable<any> {
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
