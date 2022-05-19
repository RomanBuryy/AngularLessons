import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IComment} from "../interfaces";
import {urls} from "../../../constants/urls";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments);
  }

  getById(id: string): Observable<IComment>{
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`);
  }


}
