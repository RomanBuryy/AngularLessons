import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  comment: IComment;

  constructor( private activatedRoute:ActivatedRoute, private commentService:CommentService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(({id}) => {
        this.commentService.getById(id).subscribe(value => this.comment = value)
      } )
  }

}
