import { Component, OnInit } from '@angular/core';
import { ArquivoService } from './arquivo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-primeng-image-popup-demo';
  text = '';

  constructor(private arquivoService: ArquivoService) {

  }

  ngOnInit(): void {
    this.arquivoService.getContentHtml().subscribe(
      (content) => {
        this.text = content
      }
    )
  }




  openImageInNewTab(event: any) {
    const target = event.target || event.srcElement;
    if (target.tagName === 'IMG') {
      const imageUrl = target.getAttribute('src');
      const byteCharacters = atob(imageUrl.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }
  }
}
