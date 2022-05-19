import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  faArrowsRotate,
  faFileArrowDown,
  faFileArrowUp,
  faListCheck,
  faEllipsisVertical,
  faUser,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { ChannelData } from '../Models/channelModel';
import { ApiService } from '../services/api.service';
import { AccountService } from '../oauth/account.service';
import { Subscription } from 'rxjs-compat/Subscription';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ChannelModalComponent } from './channel-modal/channel-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {}

  @ViewChild(ChannelModalComponent) ModalComp: ChannelModalComponent;
  //Mock object for channel data, later it will be taken from backend
  @Input() channelsData: ChannelData[] = [];
  selectedCh = '';
  saveConfigIcon = faFileArrowDown;
  loadConfigIcon = faFileArrowUp;
  jobStatusIcon = faListCheck;
  resetSelection = faArrowsRotate;
  optionsIcon = faEllipsisVertical;
  SelectedChannelIcon = faSliders;
  SelectedChannelForDatatype: string[] = [];
  SelectedPageName: string;
  ChannelSelectionComponent: ChannelModalComponent;

  metaInfoHovered = '';

  modelElement = '';
  selectedContentCollection: string;
  previousMeasurementsSelection: string[];

  TreePanel = false;

  openedDataSections: string[] = [];

  ngDoCheck(): void {
    localStorage.setItem('chData', JSON.stringify(this.channelsData));
  }

  isUserAuthenticated = false;
  subscription: Subscription;
  userName: string;

  ngOnInit(): void {
    // this.subscription = this.accountService.isUserAuthenticated.subscribe(
    //   (isAuthenticated) => {
    //     this.isUserAuthenticated = (isAuthenticated as any).Success;
    //     if (this.isUserAuthenticated == true) {
    var chData =
      localStorage.getItem('chData') == 'undefined'
        ? null
        : localStorage.getItem('chData');

    if (chData != '[]' && chData != null) {
      this.channelsData = JSON.parse(chData);
      this.selectedCh = this.channelsData[0].tabName;
    } else {
      this.apiService.getChannelsData().subscribe((data) => {
        this.channelsData = data.Data;
        this.selectedCh = this.channelsData[0].tabName;
      });
    }
    //     } else {
    //       alert('user not logged in yet');
    //     }
    //   }
    // );
    //this.accountService.updateUserAuthenticationStatus();

    var chData = localStorage.getItem('chData');

    if (chData != null) {
      this.channelsData = JSON.parse(chData);
      this.selectedCh = this.channelsData[0].tabName;
      // } else if (this.accountService.isUserAuthenticated) {
      //   this.accountService.login();
      // } else {
      //   this.apiService.getChannelsData().subscribe((data) => {
      //     this.channelsData = data.Data;
      //     this.selectedCh = this.channelsData[0].tabName;
      //   });
    }
  }

  doLogin() {
    this.accountService.login();
  }

  openMeasurementTree(contentCollection: string) {
    this.TreePanel = true;
    this.selectedContentCollection = contentCollection;

    this.GetPreviousdMeasurementsSelection(contentCollection);
  }

  // Downloading the selected channel into a text file
  SaveConfig() {
    let Data = this.channelsData;

    // Downloading all Channels configurations
    var sJson = JSON.stringify(Data);
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson)
    );
    element.setAttribute('download', 'Channel_Config.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

  // Uploading the channel file
  /**
   * Uploading the channel file
   * @param event file upload event arg
   */
  ImportFile(event: any) {
    if (event.target.files.length == 0) {
      window.alert('No files Chosen');
    }
    let File = event.target.files[0];

    var reader = new FileReader();
    reader.onload = () => {
      // this 'text' is the content of the file
      let text = reader.result as string;
      let channel: ChannelData[] = JSON.parse(text);

      this.UpdateChannelDataObj(channel);
      event.target.value = null;
    };
    reader.readAsText(File);
  }

  // Adding the channel from the file
  UpdateChannelDataObj(channel: any) {
    //looping on the channels
    for (let i = 0; i < this.channelsData.length; i++) {
      //Check for the specific channel
      if (this.channelsData[i].tabName == channel[i].tabName) {
        //looping on the specific channel main sections
        for (let j = 0; j < this.channelsData[i].mainSections.length; j++) {
          //Check for the specific main section
          if (
            this.channelsData[i].mainSections[j].name ==
            'Single Measuremens / Compare Positions'
          ) {
            //looping on the datatypes
            for (
              let k = 0;
              k < this.channelsData[i].mainSections[j].dataTypes.length;
              k++
            ) {
              //Check for the specific dataType
              if (
                this.channelsData[i].mainSections[j].dataTypes[k].name ==
                channel[i].mainSections[j].dataTypes[k].name
              ) {
                //looping on the Datasections
                for (
                  let l = 0;
                  l <
                  this.channelsData[i].mainSections[j].dataTypes[k].dataSections
                    .length;
                  l++
                ) {
                  //Check for the specific DataSection
                  if (
                    this.channelsData[i].mainSections[j].dataTypes[k]
                      .dataSections[l].name ==
                    channel[i].mainSections[j].dataTypes[k].dataSections[l].name
                  ) {
                    //looping on the pages
                    for (
                      let m = 0;
                      m <
                      this.channelsData[i].mainSections[j].dataTypes[k]
                        .dataSections[l].pages.length;
                      m++
                    ) {
                      //Checking for specific page
                      if (
                        this.channelsData[i].mainSections[j].dataTypes[k]
                          .dataSections[l].pages[m].name ==
                        channel[i].mainSections[j].dataTypes[k].dataSections[l]
                          .pages[m].name
                      ) {
                        //Adding the specific page from Saved Configuration to the current on screen Configuration
                        this.channelsData[i].mainSections[j].dataTypes[
                          k
                        ].dataSections[l].pages[m] =
                          channel[i].mainSections[j].dataTypes[k].dataSections[
                            l
                          ].pages[m];
                      }
                    }
                  }
                }
              }
            }

            //looping on the MetaInfo
            for (
              let n = 0;
              n < this.channelsData[i].mainSections[j].__metaInfo.length;
              n++
            ) {
              //Checking the specific MetaInfo
              if (
                this.channelsData[i].mainSections[j].__metaInfo[n]
                  .contentCollectionName ==
                channel[i].mainSections[j].__metaInfo[n].contentCollectionName
              ) {
                //Adding the specific MetaInfo from the Saved Conmfiguration file in the current data
                this.channelsData[i].mainSections[j].__metaInfo[n] =
                  channel[i].mainSections[j].__metaInfo[n];
              }
            }
          } else if (
            this.channelsData[i].mainSections[j].name ==
            'Multiple Measuremens / Compare Measuremens'
          ) {
            //looping on the datatypes
            for (
              let k = 0;
              k < this.channelsData[i].mainSections[j].dataTypes.length;
              k++
            ) {
              //Check for the specific dataType
              if (
                this.channelsData[i].mainSections[j].dataTypes[k].name ==
                channel[i].mainSections[j].dataTypes[k].name
              ) {
                //looping on the Datasections
                for (
                  let l = 0;
                  l <
                  this.channelsData[i].mainSections[j].dataTypes[k].dataSections
                    .length;
                  l++
                ) {
                  //Check for the specific DataSection
                  if (
                    this.channelsData[i].mainSections[j].dataTypes[k]
                      .dataSections[l].name ==
                    channel[i].mainSections[j].dataTypes[k].dataSections[l].name
                  ) {
                    //looping on the pages
                    for (
                      let m = 0;
                      m <
                      this.channelsData[i].mainSections[j].dataTypes[k]
                        .dataSections[l].pages.length;
                      m++
                    ) {
                      //Checking for specific page
                      if (
                        this.channelsData[i].mainSections[j].dataTypes[k]
                          .dataSections[l].pages[m].name ==
                        channel[i].mainSections[j].dataTypes[k].dataSections[l]
                          .pages[m].name
                      ) {
                        //Adding the specific page from Saved Configuration to the current on screen Configuration
                        this.channelsData[i].mainSections[j].dataTypes[
                          k
                        ].dataSections[l].pages[m] =
                          channel[i].mainSections[j].dataTypes[k].dataSections[
                            l
                          ].pages[m];
                      }
                    }
                  }
                }

                //looping over metaInfo for multiple Measurements
                for (
                  let l = 0;
                  l <
                  this.channelsData[i].mainSections[j].dataTypes[k].__metaInfo
                    .length;
                  l++
                ) {
                  //Checking for the specific metaInfo
                  if (
                    this.channelsData[i].mainSections[j].dataTypes[k]
                      .__metaInfo[l].contentCollectionName ==
                    channel[i].mainSections[j].dataTypes[k].__metaInfo[l]
                      .contentCollectionName
                  ) {
                    this.channelsData[i].mainSections[j].dataTypes[
                      k
                    ].__metaInfo[l] =
                      channel[i].mainSections[j].dataTypes[k].__metaInfo[l];
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  //Adding Content data to the metaInfo object
  AddMeasurementToConfig(Collection_Name: string, Measurement: string) {
    //looping on the configurations
    for (let i = 0; i < this.channelsData.length; i++) {
      //looping on mainsections
      for (let j = 0; j < this.channelsData[i].mainSections.length; j++) {
        //checking the main sections for metaInfo
        if (
          this.channelsData[i].mainSections[j].name ==
          'Single Measuremens / Compare Positions'
        ) {
          //looping on the _metaInfo array
          for (
            let k = 0;
            k < this.channelsData[i].mainSections[j].__metaInfo.length;
            k++
          ) {
            //checking for the Content collection name
            if (
              this.channelsData[i].mainSections[j].__metaInfo[k]
                .contentCollectionName == Collection_Name
            ) {
              if (
                this.channelsData[i].mainSections[j].__metaInfo[k]
                  .selectedMeasurements != undefined
              ) {
                if (
                  this.channelsData[i].mainSections[j].__metaInfo[
                    k
                  ].selectedMeasurements.indexOf(Measurement) == -1
                )
                  //adding the measurement to the collection
                  this.channelsData[i].mainSections[j].__metaInfo[
                    k
                  ].selectedMeasurements.push(Measurement);
              }
            }
          }
        }

        //Incase of the multiple measurements
        else if (
          this.channelsData[i].mainSections[j].name ==
          'Multiple Measuremens / Compare Measuremens'
        ) {
          //looping over the datatypes
          for (
            let l = 0;
            l < this.channelsData[i].mainSections[j].dataTypes.length;
            l++
          ) {
            //looping on the metainfo
            for (
              let m = 0;
              m <
              this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo
                .length;
              m++
            ) {
              //checking for the same _meta Object
              if (
                this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo[m]
                  .contentCollectionName == Collection_Name
              ) {
                if (
                  this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo[
                    m
                  ].selectedMeasurements != undefined
                ) {
                  if (
                    this.channelsData[i].mainSections[j].dataTypes[
                      l
                    ].__metaInfo[m].selectedMeasurements.indexOf(Measurement) ==
                    -1
                  )
                    // adding the measurment to the array
                    this.channelsData[i].mainSections[j].dataTypes[
                      l
                    ].__metaInfo[m].selectedMeasurements.push(Measurement);
                }
              }
            }
          }
        }
      }
    }
  }

  RemoveMeasurementFromConfig(Collection_Name: string, Measurement: string) {
    //looping on the configurations
    for (let i = 0; i < this.channelsData.length; i++) {
      //looping on mainsections
      for (let j = 0; j < this.channelsData[i].mainSections.length; j++) {
        //checking the main sections for metaInfo
        if (
          this.channelsData[i].mainSections[j].name ==
          'Single Measuremens / Compare Positions'
        ) {
          //looping on the _metaInfo array
          for (
            let k = 0;
            k < this.channelsData[i].mainSections[j].__metaInfo.length;
            k++
          ) {
            //checking for the Content collection name
            if (
              this.channelsData[i].mainSections[j].__metaInfo[k]
                .contentCollectionName == Collection_Name
            ) {
              if (
                this.channelsData[i].mainSections[j].__metaInfo[k]
                  .selectedMeasurements != undefined
              ) {
                if (
                  this.channelsData[i].mainSections[j].__metaInfo[
                    k
                  ].selectedMeasurements.indexOf(Measurement) != -1
                )
                  //adding the measurement to the collection
                  this.channelsData[i].mainSections[j].__metaInfo[
                    k
                  ].selectedMeasurements = this.channelsData[i].mainSections[
                    j
                  ].__metaInfo[k].selectedMeasurements.filter(
                    (item) => item != Measurement
                  );
              }
            }
          }
        }

        //Incase of the multiple measurements
        else if (
          this.channelsData[i].mainSections[j].name ==
          'Multiple Measuremens / Compare Measuremens'
        ) {
          //looping over the datatypes
          for (
            let l = 0;
            l < this.channelsData[i].mainSections[j].dataTypes.length;
            l++
          ) {
            //looping on the metainfo
            for (
              let m = 0;
              m <
              this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo
                .length;
              m++
            ) {
              //checking for the same _meta Object
              if (
                this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo[m]
                  .contentCollectionName == Collection_Name
              ) {
                if (
                  this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo[
                    m
                  ].selectedMeasurements != undefined
                ) {
                  if (
                    this.channelsData[i].mainSections[j].dataTypes[
                      l
                    ].__metaInfo[m].selectedMeasurements.indexOf(Measurement) !=
                    -1
                  )
                    // adding the measurment to the array
                    this.channelsData[i].mainSections[j].dataTypes[
                      l
                    ].__metaInfo[m].selectedMeasurements = this.channelsData[
                      i
                    ].mainSections[j].dataTypes[l].__metaInfo[
                      m
                    ].selectedMeasurements.filter(
                      (item) => item != Measurement
                    );
                }
              }
            }
          }
        }
      }
    }
  }

  GetPreviousdMeasurementsSelection(contentCollection: string) {
    let found = false;
    //looping on the configurations
    for (let i = 0; i < this.channelsData.length; i++) {
      //looping on mainsections
      for (let j = 0; j < this.channelsData[i].mainSections.length; j++) {
        //checking the main sections for metaInfo
        if (
          this.channelsData[i].mainSections[j].name ==
          'Single Measuremens / Compare Positions'
        ) {
          //looping on the _metaInfo array
          for (
            let k = 0;
            k < this.channelsData[i].mainSections[j].__metaInfo.length;
            k++
          ) {
            //checking for the Content collection name
            if (
              this.channelsData[i].mainSections[j].__metaInfo[k]
                .contentCollectionName == contentCollection
            ) {
              debugger;
              this.previousMeasurementsSelection =
                this.channelsData[i].mainSections[j].__metaInfo[
                  k
                ].selectedMeasurements;
              found = true;
            }
            if (found) break;
          }
        }

        //Incase of the multiple measurements
        else if (
          this.channelsData[i].mainSections[j].name ==
          'Multiple Measuremens / Compare Measuremens'
        ) {
          //looping over the datatypes
          for (
            let l = 0;
            l < this.channelsData[i].mainSections[j].dataTypes.length;
            l++
          ) {
            //looping on the metainfo
            for (
              let m = 0;
              m <
              this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo
                .length;
              m++
            ) {
              //checking for the same _meta Object
              if (
                this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo[m]
                  .contentCollectionName == contentCollection
              ) {
                this.previousMeasurementsSelection =
                  this.channelsData[i].mainSections[j].dataTypes[l].__metaInfo[
                    m
                  ].selectedMeasurements;
              }
            }
          }
        }

        if (found) break;
      }
      if (found) break;
    }

    found = false;
  }

  resetConfig() {
    localStorage.removeItem('chData');

    this.ngOnInit();
  }

  addSelectedMeasurements(selectedNode: any) {
    console.log(selectedNode);
    console.log(this.selectedContentCollection);

    this.AddMeasurementToConfig(this.selectedContentCollection, selectedNode);
  }

  removeSelectedMeasurements(selectedNode: any) {
    console.log(selectedNode);
    console.log(this.selectedContentCollection);

    this.RemoveMeasurementFromConfig(
      this.selectedContentCollection,
      selectedNode
    );
  }

  getPreviouslySelectedChannels(pageName: string): string[] {
    let found = false;
    let selectedChs: string[] = [];
    this.channelsData.forEach((chData) => {
      chData.mainSections.forEach((mainSec) => {
        mainSec.dataTypes.forEach((dTypes) => {
          dTypes.dataSections.forEach((dataSec) => {
            dataSec.pages.forEach((page) => {
              if (page.name == pageName) {
                found = true;
                selectedChs = page.selectedChannels;
                return;
              }
            });
            if (found) return;
          });
          if (found) return;
        });
        if (found) return;
      });
      if (found) return;
    });

    return selectedChs;
  }

  getPrevSaveMeasurement(selectedPage: string): string[] {
    for (let i = 0; i < this.channelsData.length; i++) {
      for (let j = 0; j < this.channelsData[i].mainSections.length; j++) {
        for (
          let k = 0;
          k < this.channelsData[i].mainSections[j].dataTypes.length;
          k++
        ) {
          for (
            let l = 0;
            l <
            this.channelsData[i].mainSections[j].dataTypes[k].dataSections
              .length;
            l++
          ) {
            for (
              let m = 0;
              m <
              this.channelsData[i].mainSections[j].dataTypes[k].dataSections[l]
                .pages.length;
              m++
            ) {
              if (
                this.channelsData[i].mainSections[j].dataTypes[k].dataSections[
                  l
                ].pages[m].name == selectedPage
              ) {
                if (
                  this.channelsData[i].mainSections[j].dataTypes[k]
                    .__metaInfo != undefined
                ) {
                  return this.channelsData[i].mainSections[j].dataTypes[k]
                    .__metaInfo[0].selectedMeasurements;
                }
                if (
                  this.channelsData[i].mainSections[j].__metaInfo != undefined
                ) {
                  return this.channelsData[i].mainSections[j].__metaInfo[0]
                    .selectedMeasurements;
                }
              }
            }
          }
        }
      }
    }
    return [];
  }

  async openChannelModal(SelectedPage: string) {
    console.log('Responding');
    this.SelectedChannelForDatatype = await this.getPreviouslySelectedChannels(
      SelectedPage
    );
    this.previousMeasurementsSelection = await this.getPrevSaveMeasurement('');
    this.SelectedPageName = SelectedPage;

    this.ModalComp.ngOnInit();
  }

  selectAllToggle(ev: any, dataSection: string) {
    for (let i = 0; i < this.channelsData.length; i++) {
      for (let j = 0; j < this.channelsData[i].mainSections.length; j++) {
        for (
          let k = 0;
          k < this.channelsData[i].mainSections[j].dataTypes.length;
          k++
        ) {
          if (
            this.channelsData[i].mainSections[j].dataTypes[k].name ==
            dataSection
          ) {
            this.channelsData[i].mainSections[j].dataTypes[
              k
            ].dataSections.forEach((ds) => {
              ds.pages.forEach((page) => {
                page.selected = ev.target.checked;
              });
            });
          }
        }
      }
    }
  }

  saveChannelSelection(selectedChannels: string[]) {
    console.log(selectedChannels);
    let found = false;
    this.channelsData.forEach((chData) => {
      chData.mainSections.forEach((mainSec) => {
        mainSec.dataTypes.forEach((dTypes) => {
          dTypes.dataSections.forEach((dataSec) => {
            dataSec.pages.forEach((page) => {
              if (page.name == this.SelectedPageName) {
                found = true;
                page.selectedChannels = selectedChannels;
                return;
              }
            });
            if (found) return;
          });
          if (found) return;
        });
        if (found) return;
      });
      if (found) return;
    });
  }

  //Saving configuration for the selected channels
  SaveSelectedConfig() {
    let found = false;
    this.channelsData.forEach((chData) => {
      if (chData.tabName == this.selectedCh) {
        found = true;
        let Data = chData;
        var Json = JSON.stringify(Data);
        var element = document.createElement('a');
        element.setAttribute(
          'href',
          'data:text/json;charset=UTF-8,' + encodeURIComponent(Json)
        );
        element.setAttribute('download', chData.tabName + '.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); // simulate click
        document.body.removeChild(element);
      }

      if (found) return;
    });

    if (found) return;
  }

  //Loading configuration for the selected channels
  LoadSelectedConfig(event: any) {
    let File = event.target.files[0];

    var reader = new FileReader();
    reader.onload = () => {
      // this 'text' is the content of the file
      let text = reader.result as string;
      let channel: ChannelData = JSON.parse(text);

      for (let i = 0; i < this.channelsData.length; i++) {
        if (this.channelsData[i].tabName == this.selectedCh) {
          this.channelsData[i] = channel;
        }
      }

      event.target.value = null;
    };
    reader.readAsText(File);
  }

  ResetSelectedConfig() {
    this.apiService.getChannelsData().subscribe((data) => {
      for (let i = 0; i < data.Data.length; i++) {
        for (let j = 0; j < this.channelsData.length; j++) {
          if (this.channelsData[j].tabName == data.Data[i].tabName) {
            this.channelsData[j] = data.Data[i];
          }
        }
      }
    });
  }

  startJob(tabName: string) {
    let selectedChConfig = this.channelsData.filter(
      (x) => x.tabName == this.selectedCh
    )[0];
    this.apiService.sendTabConfig(selectedChConfig);
  }
}
