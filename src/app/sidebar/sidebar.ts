import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Dashboard } from "../pages/dashboard/dashboard";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}
