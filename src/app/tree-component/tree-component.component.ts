import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ITreeOptions, TreeNode } from '@circlon/angular-tree-component';
import { ViewEncapsulation } from '@angular/core';
import { rootNodes, childNodes } from '../mockData';
import { ApiService } from '../services/api.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponentComponent implements OnInit, OnChanges {

  constructor(public apiService: ApiService) { }

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
    getChildren: async (childNodes: TreeNode) => {

      let cNode: { name: string, hasChildren: boolean, data: any }[] = [];


      return await this.apiService.getChilNodes("dsf").subscribe(res => {
        res.data.forEach(data => {
          let node = {
            name: data.depotContentName,
            hasChildren: !data.isMeasurements,
            data: data
          };

          cNode.push(node);

        });

        return [{ name: "sjhdfj", hasChildren: false }]

      });



    }
  }


  //GET ROOT NODES FOR THE TREE
  loadRootNodes() {
    //Call service where api is called for tree root nodes
    this.apiService.getRootNodes().subscribe(res => {
      console.log(res);
      res.data.forEach(data => {
        let node = {
          name: data.depotContentName,
          hasChildren: !data.isMeasurements,
          data: data
        }

        this.treeNodes.push(node);

      });

    });
    this.loading = false

  }

  //TO GET NEW TREE OBJECT EVERY TIME TREE OPENS
  ngOnChanges() {
    console.log('changed')
    if (this.MeasurementPanel == true)

      this.loadRootNodes();
    else
      this.treeNodes = [];
  }

  //TO EMIT TREE CLOSING EVENT
  close() {
    this.closeMeasurementPanelEvent.emit();
  }

  ngOnInit(): void {
    this.loadRootNodes()
  }

  onEvent(event: any) {

    console.log(event);
    //event.node.expand();


  }



}
