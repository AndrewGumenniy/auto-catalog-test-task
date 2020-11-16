import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/shared/models/auto';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  public autoList: Auto[];
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.autoList = data.autoList;
    });
  }

  public navigateToDetails(id: number) {
    this.router.navigate(['/auto-card', id]);
  }
}
