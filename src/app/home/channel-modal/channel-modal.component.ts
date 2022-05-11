import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-channel-modal',
  templateUrl: './channel-modal.component.html',
  styleUrls: ['./channel-modal.component.css']
})
export class ChannelModalComponent implements OnInit {

  constructor() { }

  @Input() selectedChannels: string[];
  @Input() SelectedPageName: string;
  @Output() SaveSelectedChannels = new EventEmitter<any>();

  Object = Object;
  //channel_Data:any[]
  channel_Data = {
    "success": true,
    "data": {
      "1\nCH1\nSound Pressure\n\nS\nLS\nAPS\nDT_APSSpectrum\nfrequency\nShape_Normal\n\n\nDF_Mag": {
        "name": "CH1",
        "direction": "S",
        "mptype": "LS",
        "datatype": "APS",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "frequency",
        "shape": "Shape_Normal",
        "nth_octave": "",
        "sub_type": "",
        "data_format": "DF_Mag"
      },
      "1\nCH1\nSound Pressure\n\nS\nLS\nOrder APS\nDT_APSSpectrum\norder\nShape_Normal\n\n\nDF_Mag": {
        "name": "CH1",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Order APS",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "order",
        "shape": "Shape_Normal",
        "nth_octave": "",
        "sub_type": "",
        "data_format": "DF_Mag"
      },
      "1\nCH1\nSound Pressure\n\nS\nLS\nThroughput\nDT_Thruput\n\nShape_None\n\n\n": {
        "name": "CH1",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Throughput",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "",
        "shape": "Shape_None",
        "nth_octave": "",
        "sub_type": "",
        "data_format": ""
      },
      "1\nCH15\nRotational Speed\n\nS\nLS\nSlow Quantity\nDT_SlowQuantity\n\nShape_Overall\n\n\n": {
        "name": "CH15",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Slow Quantity",
        "quantity": "Rotational Speed",
        "quantityref": "",
        "x_axis_type": "",
        "shape": "Shape_Overall",
        "nth_octave": "",
        "sub_type": "",
        "data_format": ""
      },
      "1\nCH15\nRotational Speed\n\nS\nLS\nTacho Edges\nDT_TachoEdges\n\nShape_None\n\n\n": {
        "name": "CH15",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Tacho Edges",
        "quantity": "Rotational Speed",
        "quantityref": "",
        "x_axis_type": "",
        "shape": "Shape_None",
        "nth_octave": "",
        "sub_type": "",
        "data_format": ""
      },
      "1\nCH2\nSound Pressure\n\nS\nLS\nAPS\nDT_APSSpectrum\nfrequency\nShape_Normal\n\n\nDF_Mag": {
        "name": "CH2",
        "direction": "S",
        "mptype": "LS",
        "datatype": "APS",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "frequency",
        "shape": "Shape_Normal",
        "nth_octave": "",
        "sub_type": "",
        "data_format": "DF_Mag"
      },
      "1\nCH2\nSound Pressure\n\nS\nLS\nOrder APS\nDT_APSSpectrum\norder\nShape_Normal\n\n\nDF_Mag": {
        "name": "CH2",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Order APS",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "order",
        "shape": "Shape_Normal",
        "nth_octave": "",
        "sub_type": "",
        "data_format": "DF_Mag"
      },
      "1\nCH2\nSound Pressure\n\nS\nLS\nThroughput\nDT_Thruput\n\nShape_None\n\n\n": {
        "name": "CH2",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Throughput",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "",
        "shape": "Shape_None",
        "nth_octave": "",
        "sub_type": "",
        "data_format": ""
      },
      "1\nCH5\nSound Pressure\n\nS\nLS\nAPS\nDT_APSSpectrum\nfrequency\nShape_Normal\n\n\nDF_Mag": {
        "name": "CH5",
        "direction": "S",
        "mptype": "LS",
        "datatype": "APS",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "frequency",
        "shape": "Shape_Normal",
        "nth_octave": "",
        "sub_type": "",
        "data_format": "DF_Mag"
      },
      "1\nCH5\nSound Pressure\n\nS\nLS\nOrder APS\nDT_APSSpectrum\norder\nShape_Normal\n\n\nDF_Mag": {
        "name": "CH5",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Order APS",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "order",
        "shape": "Shape_Normal",
        "nth_octave": "",
        "sub_type": "",
        "data_format": "DF_Mag"
      },
      "1\nCH5\nSound Pressure\n\nS\nLS\nThroughput\nDT_Thruput\n\nShape_None\n\n\n": {
        "name": "CH5",
        "direction": "S",
        "mptype": "LS",
        "datatype": "Throughput",
        "quantity": "Sound Pressure",
        "quantityref": "",
        "x_axis_type": "",
        "shape": "Shape_None",
        "nth_octave": "",
        "sub_type": "",
        "data_format": ""
      }
    },
    "errorMessage": null
  }

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
  }


  ngOnInit() {

  }


  saveSelection() {
    this.SaveSelectedChannels.emit({ this.selectedChannels, this.SelectedPageName });
  }
}
