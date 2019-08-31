import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Message from 'src/app/types/message';
import { environment } from 'src/environments/environment';

@Injectable()
export class MessageService {

  constructor(
    private http: HttpClient
  ) { }

  send(message: Partial<Message>): Observable<Message> {
    return this.http
      .post<Message>(environment.messagesEndpoint, message);
  }
}
