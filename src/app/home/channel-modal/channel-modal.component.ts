import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-modal',
  templateUrl: './channel-modal.component.html',
  styleUrls: ['./channel-modal.component.css']
})
export class ChannelModalComponent implements OnInit {

  constructor() { }

  @Input() DataType: string = ""

  ngOnInit() {
  }

}
