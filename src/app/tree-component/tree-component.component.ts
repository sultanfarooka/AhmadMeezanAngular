import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITreeOptions } from '@circlon/angular-tree-component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponentComponent implements OnInit {

  constructor() { }

  
  @Input() MeasurementPanel = true;
  @Output() closeMeasurementPanelEvent = new EventEmitter<string>();

  @Input()rootNodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ],
      isExpanded: true
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
            {name: 'grandchild2.2.1'}
          ] }
      ]
    },
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ],
      isExpanded: true
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
            {name: 'grandchild2.2.1'}
          ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];

  
  options :ITreeOptions = {
    useCheckbox: true,
    
  }


  close(){
    this.closeMeasurementPanelEvent.emit();
  }

ngOnInit(): void {
    
  }

}
