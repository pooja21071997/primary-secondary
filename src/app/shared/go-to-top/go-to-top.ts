import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-go-to-top',
  imports: [],
  templateUrl: './go-to-top.html',
  styleUrl: './go-to-top.css',
})
export class GoToTop {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
