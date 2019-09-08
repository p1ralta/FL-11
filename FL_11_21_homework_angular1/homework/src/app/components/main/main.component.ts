import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../moduls/Blog';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

}
