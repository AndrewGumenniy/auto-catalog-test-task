import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/shared/models/auto';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.css']
})
export class AutoCardComponent implements OnInit {
  public auto: Auto;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.auto = data.auto || this.router.navigate(['/auto-list']);
    });
  }
}
