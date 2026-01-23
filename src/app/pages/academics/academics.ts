import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-academics',
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './academics.html',
  styleUrl: './academics.css',
})
export class Academics {
pdfSrc = '/assets/files/Primary-Wagh-Nagar-Diary.pdf';

page = 1;
totalPages = 0;
zoom = 0.6;

afterLoad(pdf: any) {
  this.totalPages = pdf.numPages;
  this.fitToPage();
}

fitToPage() {
  // Adjust zoom for screen size (trial-tested values)
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    this.zoom = 0.6;
  } else if (screenWidth < 1200) {
    this.zoom = 0.8;
  } else {
    this.zoom = 0.6;
  }
}

nextPage() {
  if (this.page < this.totalPages) this.page++;
}

prevPage() {
  if (this.page > 1) this.page--;
}


}
