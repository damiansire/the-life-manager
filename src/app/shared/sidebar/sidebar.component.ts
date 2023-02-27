import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    { path: 'projects', visibleName: "projects", icon: "" },
    { path: "dashboard", visibleName: "dashboard", icon: "" },
    { path: "doubt-tracker", visibleName: "doubt tracker", icon: "" },
    { path: "finance-tracker", visibleName: "finance tracker", icon: "" },
    { path: "goal-tracker", visibleName: "goal tracker", icon: "" },
    { path: "job-search", visibleName: "job search", icon: "" },
    { path: "projects", visibleName: "projects", icon: "" },
    { path: "technology-event-tracking", visibleName: "technology event tracking", icon: "" },
    { path: "trip-planner", visibleName: "trip planner", icon: "" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
