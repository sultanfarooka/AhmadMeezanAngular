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
  channelsData: ChannelData[] = [];
  selectedCh = '';
  saveConfigIcon = faFileArrowDown;
  loadConfigIcon = faFileArrowUp;
  jobStatusIcon = faListCheck;
  resetSelection = faArrowsRotate;


  selectedContentCollection: string

  TreePanel = false;


  ngDoCheck(): void {

    localStorage.setItem('chData', JSON.stringify(this.channelsData));
  }

  ngOnInit(): void {

    var chData = localStorage.getItem('chData');

    if (chData != null) {
      this.channelsData = JSON.parse(chData);
      this.selectedCh = this.channelsData[0].tabName;
    }
    else {
      this.apiService.getChannelsData().
        subscribe(data => {
          this.channelsData = data
          this.selectedCh = this.channelsData[0].tabName;
        });
    }
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
      if (this.channelsData[i].id == channel[i].id) {

        //looping on the specific channel main sections
        for(let j =0; j< this.channelsData[i].mainSections.length; j++){

          //Check for the specific main section 
          if(this.channelsData[i].mainSections[j].id == channel[i].mainSections[j].id){

            //looping on the datatypes 
            for(let k = 0; k< this.channelsData[i].mainSections[j].dataTypes.length; k++){

              //Check for the specific dataType
              if(this.channelsData[i].mainSections[j].dataTypes[k].id == channel[i].mainSections[j].dataTypes[k].id){

                //looping on the Datasections
                for(let l = 0; l<this.channelsData[i].mainSections[j].dataTypes[k].dataSections.length; l++){

                  //Check for the specific DataSection
                  if(this.channelsData[i].mainSections[j].dataTypes[k].dataSections[l].id == channel[i].mainSections[j].dataTypes[k].dataSections[l].id){

                    //looping on the pages
                    for(let m = 0; m<this.channelsData[i].mainSections[j].dataTypes[k].dataSections[l].pages.length; m++){

                      //Checking for specific page
                      if(this.channelsData[i].mainSections[j].dataTypes[k].dataSections[l].pages[m].id == channel[i].mainSections[j].dataTypes[k].dataSections[l].pages[m].id){

                        //Adding the specific page from Saved Configuration to the current on screen Configuration
                        this.channelsData[i].mainSections[j].dataTypes[k].dataSections[l].pages[m] =  channel[i].mainSections[j].dataTypes[k].dataSections[l].pages[m];
                      }
                    }
                  }
                }
              } 
            }

            //looping on the MetaInfo
            for(let n = 0; n<this.channelsData[i].mainSections[j].__metaInfo.length; n++){

              //Checking the specific MetaInfo
              if(this.channelsData[i].mainSections[j].__metaInfo[n].id == channel[i].mainSections[j].__metaInfo[n].id){
                
                //Adding the specific MetaInfo from the Saved Conmfiguration file in the current data
                this.channelsData[i].mainSections[j].__metaInfo[n] = channel[i].mainSections[j].__metaInfo[n];
              }
            }
          }
        }
      }

    }

  }


  resetConfig() {
    localStorage.removeItem('chData');

    this.ngOnInit();
  }


  addSelectedMeasurements(selectedNode: any) {
    console.log(selectedNode);
    console.log(this.selectedContentCollection);
  }




}


