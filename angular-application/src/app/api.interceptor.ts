import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private dataService: DataService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Obtén el token de autorización desde tu DataService
    const authToken = this.dataService.getToken(); // Asumiendo que getToken() devuelve el token

    // Si authToken es válido, agrega el encabezado "Authorization" con el token tipo "Bearer"
    if (authToken != false) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
    }

    // También manejar errores globalmente
    return next.handle(req).pipe(
      tap(
        (x) => x,
        (err) => {
          // Manejar este error globalmente
          console.error(`Error al realizar la solicitud, código de estado = ${err.status}`);
        }
      )
    );
  }
}