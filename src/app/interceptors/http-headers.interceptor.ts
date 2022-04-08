import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { environment as env } from "src/environments/environment";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    
    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': '4dfb794977mshad67c721cd0915dp180ed9jsn85fa46c28fae'
            },
            setParams: {
                'key': env.apiKey
            }
        });
        return next.handle(req);
    }

}