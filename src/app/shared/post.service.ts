import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FbCreateResponse } from 'src/environments/interface';

@Injectable({providedIn: 'root'})
export class PostService {
    constructor(private http: HttpClient) {}

    create(post: Post): Observable<Post> {
        return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
        .pipe(map((respnse: FbCreateResponse) => {
            return {
                ...post,
                id: respnse.name,
                date: new Date(post.date)
            };
        }));
    }
}