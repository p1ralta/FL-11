import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/moduls/Blog';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css']
})
export class HeaderPanelComponent implements OnInit {

  @Input() blogs: Blog;

  constructor() { }

  ngOnInit() {
  }

}
