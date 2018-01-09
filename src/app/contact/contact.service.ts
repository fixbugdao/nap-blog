import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ContactService {

  constructor(private db: AngularFireDatabase) { }

  createContact(data: any) {
    this.db.list('/messages').push(data);
  }

}
