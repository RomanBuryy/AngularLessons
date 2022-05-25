import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentRoutingModule} from './comment-routing.module';
import {CommentService} from "./services";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule {
}
