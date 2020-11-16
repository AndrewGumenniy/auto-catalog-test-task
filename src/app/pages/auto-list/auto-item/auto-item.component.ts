import { Component, Input, OnInit } from '@angular/core';
import { Auto } from 'src/app/shared/models/auto';

@Component({
  selector: 'app-auto-item',
  templateUrl: './auto-item.component.html',
  styleUrls: ['./auto-item.component.css']
})
export class AutoItemComponent implements OnInit {
  @Input() auto: Auto;

  constructor() { }

  ngOnInit() {
  }
}
