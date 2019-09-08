import { Component, OnInit,Input} from '@angular/core';
import { Blog } from 'src/app/moduls/Blog';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() blogs: Blog;

  
  constructor() { }

  ngOnInit() {
  }



}
