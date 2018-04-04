import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() { }

  ngOnInit() {
     this.addsliderimages(4,'Gymnasium','gy',8);
  }

  addsliderimages(value,location,tag,length) {
    var slides = [];     
      $(`#${tag}`).empty();
      for (var i = 0; i < length; i++) {
        var html = "";
  
        slides.push({
          image: `assets/Gallery/${location}/${i}.jpg`,       
        });
        html = `<li>
                <div class="gallery-grid1">
                    <img src="${slides[i].image}" alt=" " class="img-responsive" />         
      </div>
      </li>`;
  
      $(`#${tag}`).append(html);
  
      }
       $(`#${tag} li`).picEyes();   
}
}
