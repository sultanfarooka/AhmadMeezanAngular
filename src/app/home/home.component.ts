import { Component, OnInit } from '@angular/core';
import { faArrowsRotate, faFileArrowDown, faFileArrowUp, faListCheck } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  //Mock object for channel data, later it will be taken from backend
  channelsData = [
    {
      "tabName": "M254",
      "mainSections": [
        {
          "name": "Single Measuremens / Compare Positions",
          "dataTypes": [
            {
              "name": "Testcandidate Prep",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "checkbox only",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "checkbox plus scale",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": true,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "checkbox plus channel",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": true,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "fgfgf",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": true,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Fokus page",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": true,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Overall Anly",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "All",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "airborne noise",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "KS for Lager",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ]
            },
            {
              "name": "APS",
              "dataSections": [
                {
                  "name": "LS Group",
                  "pages": [
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "1kHz bis 6kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "6khz bis 19khz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "KS-Group",
                  "pages": [
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "1kHz bis 9,4kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ]
            }
          ],
          "__metaInfo": [
            {
              "browseButtonName": "Select Measurement",
              "contentCollectionName": "MyFirstCC",
              "aliasTable": "Einzelmessung",
              "processAllAtOnce": false
            }
          ]
        },
        {
          "name": "Multiple Measuremens / Compare Measuremens",
          "dataTypes": [
            {
              "name": "Octave pgl",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "sultan",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Mittlewart LS: 1m",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Mittlewart LS: 1m",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ],
              "__metaInfo": [
                {
                  "browseButtonName": "Select Measurement",
                  "contentCollectionName": "My2ndCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                },
                {
                  "browseButtonName": "Select Measurement 2",
                  "contentCollectionName": "My3rdCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                }
              ]
            },
            {
              "name": "Octave pglfdsfs",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Mittlewart LS: 1m",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "isScaled": false,
                      "channelSelection": true,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Mittlewart LS: 1m",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "isScaled": true,
                      "channelSelection": true,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "New One",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },

                  ]
                }
              ],
              "__metaInfo": [
                {
                  "browseButtonName": "Select Measurement",
                  "contentCollectionName": "My2ndCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                },
                {
                  "browseButtonName": "Select Measurement 2",
                  "contentCollectionName": "My3rdCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tabName": "M255",
      "mainSections": [
        {
          "name": "Single Measuremens / Compare Positions",
          "dataTypes": [
            {
              "name": "Testcandidate Prep",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "All22222",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Fokus page",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Overall Anly",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "All",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "airborne noise",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "KS for Lager",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ]
            },
            {
              "name": "APS",
              "dataSections": [
                {
                  "name": "LS Group",
                  "pages": [
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "1kHz bis 6kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "6khz bis 19khz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                },
                {
                  "name": "KS-Group",
                  "pages": [
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "1kHz bis 9,4kHz",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ]
            }
          ],
          "__metaInfo": [
            {
              "browseButtonName": "Select Measurement",
              "contentCollectionName": "MyFirstCC",
              "aliasTable": "Einzelmessung",
              "processAllAtOnce": false
            }
          ]
        },
        {
          "name": "Multiple Measuremens / Compare Measuremens",
          "dataTypes": [
            {
              "name": "Octave pgl",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Mittlewart LS: 1m",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ],
              "__metaInfo": [
                {
                  "browseButtonName": "Select Measurement",
                  "contentCollectionName": "My2ndCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                },
                {
                  "browseButtonName": "Select Measurement 2",
                  "contentCollectionName": "My3rdCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                }
              ]
            },
            {
              "name": "Octave pgl",
              "dataSections": [
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Mittlewart LS: 1m",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "selected": false,
                      "scaledTo": "\"\"",
                      "scaledFrom": "\"\"",
                      "isScaled": false,
                      "channelSelection": false,
                      "channelSelectionText": "Select Channels"
                    }
                  ]
                }
              ],
              "__metaInfo": [
                {
                  "browseButtonName": "Select Measurement",
                  "contentCollectionName": "My2ndCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                },
                {
                  "browseButtonName": "Select Measurement 2",
                  "contentCollectionName": "My3rdCC",
                  "aliasTable": "Oktavpegel",
                  "processAllAtOnce": true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  selectedCh = 'M259';
  saveConfigIcon = faFileArrowDown;
  loadConfigIcon = faFileArrowUp;
  jobStatusIcon = faListCheck;
  resetSelection = faArrowsRotate;

  TreePanel = false;




  ngOnInit(): void {
    this.selectedCh = this.channelsData[0].tabName;

  }
  
  SaveConfig(){
    
    let Data = this.channelsData;
    let ChannelName = this.selectedCh;
    var sJson = JSON.stringify(Data);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', ChannelName +".txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

  LoadConfig(){

  }

}
