import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  constructor() {}
}

interface Result {
  message: String;
}
