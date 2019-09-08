import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/moduls/Blog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() blogs: Blog;

  constructor() { }

  ngOnInit() {
  }

}
