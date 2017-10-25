import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startRequestTime = Date.now();

    return next.handle(req).do(
      event => {
        if (event instanceof HttpResponse) {
          const takenTime = Date.now() - startRequestTime;
          console.log(`Time request for url ${req.urlWithParams} taken: ${takenTime} ms`);
        }
      }
    );
  }
}
