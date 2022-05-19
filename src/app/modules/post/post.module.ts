import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostRoutingModule} from './post-routing.module';
import {PostService} from "./services";
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule {
}
