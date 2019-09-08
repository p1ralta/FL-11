import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/moduls/Blog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() blogs: Blog;
  constructor() { }

  ngOnInit() {
  }

}
