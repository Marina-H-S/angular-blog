import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/interfaces';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
post$: Observable<Post>;

  constructor(private router: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit() {

    this.post$ = this.router.params
    .pipe(
      switchMap((params: Params) => {
        return this.postService.getById(params.id);
      })
    );
  }

}
