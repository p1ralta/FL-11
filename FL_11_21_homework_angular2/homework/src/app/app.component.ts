import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public db: AngularFireDatabase) {}

  blogs: AngularFireList<any>;
  keysBlogs = [];
  countBlogs: number = 0;
  blog: any;

  ngOnInit() {
    this.blogs = this.db.list('/blogs');
    this.blogs.snapshotChanges().subscribe(tmp => {
      this.keysBlogs = tmp;
    })
  } 
}

