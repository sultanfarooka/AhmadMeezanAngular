import { Component, OnInit } from '@angular/core';
import { faArrowsRotate, faFileArrowDown, faFileArrowUp, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { ChannelData } from '../Models/channelModel';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public apiService: ApiService) { }

  //Mock object for channel data, later it will be taken from backend
  channelsData: ChannelData[];
  selectedCh = 'M259';
  saveConfigIcon = faFileArrowDown;
  loadConfigIcon = faFileArrowUp;
  jobStatusIcon = faListCheck;
  resetSelection = faArrowsRotate;

  TreePanel = false;




  ngOnInit(): void {

    this.apiService.getChannelsData().
      subscribe(data => {
        this.channelsData = data
        this.selectedCh = this.channelsData[0].tabName;
      });
  }

  // Downloading the selected channel into a text file
  SaveConfig() {

    let Data = this.channelsData;

    // Downloading all Channels configurations
    var sJson = JSON.stringify(Data);
        var element = document.createElement('a');
        element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
        element.setAttribute('download', "Channel_Config.json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); // simulate click
        document.body.removeChild(element);
  }

  // Uploading the channel file
  ImportFile(event: any) {

    if (event.target.files.length == 0) {
      window.alert("No files Chosen");
    }
    let File = event.target.files[0];
    console.log(File);

    var reader = new FileReader();
    reader.onload = () => {
      // this 'text' is the content of the file
      let text = reader.result as string;
      let channel: ChannelData[] = JSON.parse(text);

      this.UpdateChannelDataObj(channel);
      console.log(channel);
    }
    reader.readAsText(File);
  }

  // Adding the channel from the file  
  UpdateChannelDataObj(channel: any) {
    //looping on the channels
    for (let i = 0; i < this.channelsData.length; i++) {
      //Check for the specific channel
      if (this.channelsData[i].tabName == channel[i].tabName) {
        //looping on the specific channel main sections
        for(let j =0; j< this.channelsData[i].mainSections.length; j++){
          //Check for the specific main section 
          if(this.channelsData[i].mainSections[j].name == channel[i].mainSections[j].name){
            //looping on the datatypes 
            for(let k = 0; k< this.channelsData[i].mainSections[j].dataTypes.length; k++){
              //Check for the specific dataType
              if(this.channelsData[i].mainSections[j].dataTypes[k].name == channel[i].mainSections[j].dataTypes[k].name){

              } 
            }
          }
        }      
      }

    }

  }

}


