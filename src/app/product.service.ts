import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _hhtp : Http) {}

  getAlbum(id: number){
    return this._hhtp.get(this._albumUrl);
  }
}
