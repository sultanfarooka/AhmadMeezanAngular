import { Component, OnInit } from '@angular/core';
import { faArrowsRotate, faFileArrowDown, faFileArrowUp, faListCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
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
                      "name": "All",
                      "connectedPageName": "",
                      "isScaled": false
                    }
                    ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Fokus page",
                      "connectedPageName": "",
                      "isScaled": false
                    }]
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
                      "isScaled": false
                    }
                    
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    
                    {
                      "name": "airborne noise",
                      "connectedPageName": "",
                      "isScaled": false
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    
                    {
                      "name": "KS for Lager",
                      "connectedPageName": "",
                      "isScaled": false
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
                      "connectedPageName": "myconnectedpage",
                      "isScaled": true
                    },
                    {
                      "name": "1kHz bis 6kHz",
                      "connectedPageName": "myconnectedpage1",
                      "isScaled": true
                    },
                    {
                      "name": "6khz bis 19khz",
                      "connectedPageName": "myconnectedpage2",
                      "isScaled": true
                    }
                  ]
                },
                {
                  "name": "KS-Group",
                  "pages": [
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "isScaled": true
                    },
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "myconnectedpage",
                      "isScaled": false
                    },
                    {
                      "name": "1kHz bis 9,4kHz",
                      "connectedPageName": "",
                      "isScaled": false
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
                      "isScaled": false
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "isScaled": false,
                      "channelSelection": true,
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
                      "isScaled": false
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "isScaled": false,
                      "channelSelection": true,
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
                      "isScaled": false
                    }
                    ]
                },
                {
                  "name": "",
                  "pages": [
                    {
                      "name": "Fokus page",
                      "connectedPageName": "",
                      "isScaled": false
                    }]
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
                      "isScaled": false
                    }
                    
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    
                    {
                      "name": "airborne noise",
                      "connectedPageName": "",
                      "isScaled": false
                    }
                  ]
                },
                {
                  "name": "",
                  "pages": [
                    
                    {
                      "name": "KS for Lager",
                      "connectedPageName": "",
                      "isScaled": false
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
                      "connectedPageName": "myconnectedpage",
                      "isScaled": true
                    },
                    {
                      "name": "1kHz bis 6kHz",
                      "connectedPageName": "myconnectedpage1",
                      "isScaled": true
                    },
                    {
                      "name": "6khz bis 19khz",
                      "connectedPageName": "myconnectedpage2",
                      "isScaled": true
                    }
                  ]
                },
                {
                  "name": "KS-Group",
                  "pages": [
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "",
                      "isScaled": true
                    },
                    {
                      "name": "bis 1kHz",
                      "connectedPageName": "myconnectedpage",
                      "isScaled": false
                    },
                    {
                      "name": "1kHz bis 9,4kHz",
                      "connectedPageName": "",
                      "isScaled": false
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
                      "isScaled": false
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "isScaled": false,
                      "channelSelection": true,
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
                      "isScaled": false
                    },
                    {
                      "name": "SinglePosition",
                      "connectedPageName": "",
                      "isScaled": false,
                      "channelSelection": true,
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

  TreePanel = true;




  
  ngOnInit(): void {
    this.selectedCh = this.channelsData[0].tabName;
  }
  selectCh(ch: string){
    this.selectedCh = ch;
  }

  openTreePanel(){
    this.TreePanel = true;
  }

  closeTreePanel(){
    this.TreePanel = false;
  }
  


}
