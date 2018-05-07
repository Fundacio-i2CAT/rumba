import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video.model';
import { VideosServiceService } from '../videos-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideosServiceService]
})
export class VideosComponent implements OnInit {
  activatedHelp:boolean = false;
  allVideos: any = undefined;
  allThumbnails: any[] = [];
  thumbsToShow: any[] = [];
  oneThumb: any;

  constructor(private videoService: VideosServiceService) { }

  setHelpStatus() {
    this.activatedHelp = !this.activatedHelp;
  }

  createImageFromBlob(image: Blob) {
     let reader = new FileReader();
     reader.addEventListener("load", () => {
        this.thumbsToShow.push(reader.result);
     }, false);

     if (image) {
        reader.readAsDataURL(image);
     }
  }


  ngOnInit() {
    // this.allVideos = this.videoService.getVideos();
    this.videoService.getRecordedVideos()
      .subscribe(
        (response) => {
          this.allVideos = response;

          this.allVideos.forEach((each, index) => {
            // this.getVideoFirstThumbnail(each.video_id);

            this.videoService.getVideoFirstThumb(each.video_id)
              .subscribe(
                (response) => {
                  console.log(response);
                  //this.allThumbnails.push(response['_body']);
                  this.createImageFromBlob(response['_body']);
                }
              );

          });

        }
      );
  }

  onSelectVideo(index:number) {
    console.log('selectedVideo::::', this.allVideos[index]);
    this.videoService.getSelectedVideo(this.allVideos[index].video_id)
      .subscribe(
        (response) => {
          console.log('this is the selected video', response);

        }
      );

  }





}
