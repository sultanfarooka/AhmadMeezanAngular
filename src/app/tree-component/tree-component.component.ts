import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ITreeOptions, TreeNode } from '@circlon/angular-tree-component';
import { ViewEncapsulation } from '@angular/core';
import { rootNodes, childNodes } from '../mockData';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponentComponent implements OnInit, OnChanges {

  constructor() { }

  //OPEN OR CLOSED STATE OF TREE PANEL PASSED FROM THE PARENT COMPONENT
  @Input() MeasurementPanel = false;

  //EMITTING EVENT HANDELED BY THE PARENT COMPONENT FOR CLOSING THE TREE PANEL
  @Output() closeMeasurementPanelEvent = new EventEmitter<string>();

  //LOADING TREE FROM BACKEND
  loading = true

  //TREE NODES
  treeNodes: any = [];

  //ANGULAR TREE COMPONENT OPTIONS
  options: ITreeOptions = {
    useCheckbox: true,
    getChildren: (node: TreeNode) => {

      console.log(node)

      let childNodes: any = []
      rootNodes.data.forEach(data => {

        let node = {
          name: data.depotContentName,
          hasChildren: true,
          data: data
        }

        childNodes.push(node);


      });

      return childNodes;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //GET ROOT NODES FOR THE TREE
  async getRootNodes() {
    //Call service where api is called for tree root nodes
    this.loading = true
    await this.delay(2000);

    this.loading = false

    rootNodes.data.forEach(data => {
      let node = {
        name: data.depotContentName,
        hasChildren: true,
        data: data
      }

      this.treeNodes.push(node);

    });

  }

  //TO GET NEW TREE OBJECT EVERY TIME TREE OPENS
  ngOnChanges() {
    console.log('changed')
    if (this.MeasurementPanel == true)

      this.getRootNodes();
    else
      this.treeNodes = [];
  }

  //TO EMIT TREE CLOSING EVENT
  close() {
    this.closeMeasurementPanelEvent.emit();
  }

  ngOnInit(): void {
    this.getRootNodes()
  }





}
