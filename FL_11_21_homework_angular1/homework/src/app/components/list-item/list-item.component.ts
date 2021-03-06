import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/moduls/Blog';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() blog: Blog;
  constructor() { }

  ngOnInit() {
  }

}
