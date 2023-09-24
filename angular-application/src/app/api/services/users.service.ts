/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { User } from '../models/user';
import { usersAuthenticateGet } from '../fn/users/users-authenticate-get';
import { UsersAuthenticateGet$Params } from '../fn/users/users-authenticate-get';
import { usersGet$Json } from '../fn/users/users-get-json';
import { UsersGet$Json$Params } from '../fn/users/users-get-json';
import { usersGet$Plain } from '../fn/users/users-get-plain';
import { UsersGet$Plain$Params } from '../fn/users/users-get-plain';
import { usersNameDelete$Json } from '../fn/users/users-name-delete-json';
import { UsersNameDelete$Json$Params } from '../fn/users/users-name-delete-json';
import { usersNameDelete$Plain } from '../fn/users/users-name-delete-plain';
import { UsersNameDelete$Plain$Params } from '../fn/users/users-name-delete-plain';
import { usersNameGet$Json } from '../fn/users/users-name-get-json';
import { UsersNameGet$Json$Params } from '../fn/users/users-name-get-json';
import { usersNameGet$Plain } from '../fn/users/users-name-get-plain';
import { UsersNameGet$Plain$Params } from '../fn/users/users-name-get-plain';
import { usersPost$Json } from '../fn/users/users-post-json';
import { UsersPost$Json$Params } from '../fn/users/users-post-json';
import { usersPost$Plain } from '../fn/users/users-post-plain';
import { UsersPost$Plain$Params } from '../fn/users/users-post-plain';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersAuthenticateGet()` */
  static readonly UsersAuthenticateGetPath = '/Users/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersAuthenticateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersAuthenticateGet$Response(params?: UsersAuthenticateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersAuthenticateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersAuthenticateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersAuthenticateGet(params?: UsersAuthenticateGet$Params, context?: HttpContext): Observable<void> {
    return this.usersAuthenticateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersGet()` */
  static readonly UsersGetPath = '/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Plain$Response(params?: UsersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return usersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Plain(params?: UsersGet$Plain$Params, context?: HttpContext): Observable<Array<User>> {
    return this.usersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Json$Response(params?: UsersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return usersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Json(params?: UsersGet$Json$Params, context?: HttpContext): Observable<Array<User>> {
    return this.usersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `usersPost()` */
  static readonly UsersPostPath = '/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  usersPost$Plain$Response(params?: UsersPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  usersPost$Plain(params?: UsersPost$Plain$Params, context?: HttpContext): Observable<User> {
    return this.usersPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  usersPost$Json$Response(params?: UsersPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  usersPost$Json(params?: UsersPost$Json$Params, context?: HttpContext): Observable<User> {
    return this.usersPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `usersNameGet()` */
  static readonly UsersNameGetPath = '/Users/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameGet$Plain$Response(params: UsersNameGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersNameGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameGet$Plain(params: UsersNameGet$Plain$Params, context?: HttpContext): Observable<User> {
    return this.usersNameGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameGet$Json$Response(params: UsersNameGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersNameGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameGet$Json(params: UsersNameGet$Json$Params, context?: HttpContext): Observable<User> {
    return this.usersNameGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `usersNameDelete()` */
  static readonly UsersNameDeletePath = '/Users/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersNameDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameDelete$Plain$Response(params: UsersNameDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersNameDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersNameDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameDelete$Plain(params: UsersNameDelete$Plain$Params, context?: HttpContext): Observable<User> {
    return this.usersNameDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersNameDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameDelete$Json$Response(params: UsersNameDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return usersNameDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersNameDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersNameDelete$Json(params: UsersNameDelete$Json$Params, context?: HttpContext): Observable<User> {
    return this.usersNameDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

}
