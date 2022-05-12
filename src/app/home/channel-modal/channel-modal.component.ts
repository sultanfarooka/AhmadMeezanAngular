import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-channel-modal',
  templateUrl: './channel-modal.component.html',
  styleUrls: ['./channel-modal.component.css']
})
export class ChannelModalComponent implements OnInit {

  constructor(public apiService: ApiService,) { }

  @Input() selectedChannels: string[];
  @Input() SelectedPageName: string;
  @Input() previousMeasurementsSelection: string[]
  @Output() selectedChannelsChange = new EventEmitter();

  Object = Object;
  //channel_Data:any[]
  loading = true;
  no_measurements = false;
  channel_Data: any = null

  isPresent(key: string): boolean {


    if (this.selectedChannels == undefined || this.selectedChannels.length == 0)
      return false


    let searchedIndx = this.selectedChannels.findIndex(x => x == key)

    if (searchedIndx > -1)
      return true;
    else
      return false;


  }


  channalSelectionToggle(ev: any, key: string) {
    if (ev.target.checked == true) {
      this.selectedChannels.push(key);
    }
    else {
      this.selectedChannels = this.selectedChannels.filter(x => x != key);

    }
    let selectedChannels = this.selectedChannels
    let selectedPage = this.SelectedPageName;
    this.selectedChannelsChange.emit(this.selectedChannels);




  }


  ngOnChanges() {

    if (this.previousMeasurementsSelection.length == 0) {
      this.no_measurements = true;
      this.loading = false;
      return;
    }
    else {

      setTimeout(() => {
        this.apiService.getChannels([]).subscribe((data) => {
          this.channel_Data = data.data;
        });
        this.loading = false
      }, 3000);
    }

  }





  ngOnInit() { }



  //   if (this.previousMeasurementsSelection.length < 0) {
  //     this.no_measurements = true;
  //     this.loading = false;
  //     return;
  //   }
  //   else {

  //     setTimeout(() => {
  //       this.apiService.getChannels([]).subscribe((data) => {
  //         this.channel_Data = data.data;
  //       });
  //       this.loading = false
  //     }, 3000);
  //   }
  // }


  saveSelection() {

  }
}
