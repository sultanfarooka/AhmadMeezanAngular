import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ITreeOptions, TreeModel, TreeNode, TREE_ACTIONS } from '@circlon/angular-tree-component';
import { ViewEncapsulation } from '@angular/core';
import { rootNodes, childNodes } from '../mockData';
import { ApiService } from '../services/api.service';


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
  @Output() closeMeasurementPanelEvent = new EventEmitter();
  @Output() addMeasuremets = new EventEmitter<any>();

  //LOADING TREE FROM BACKEND
  loading = true
  //TREE NODES
  treeNodes: any = [];
  //ANGULAR TREE COMPONENT OPTIONS
  options: ITreeOptions = {
    useCheckbox: true,
    actionMapping: {
      mouse: {
        click: (tree: TreeModel, node: TreeNode, $event: any) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      }
    },
    getChildren: (selectedNode: TreeNode) => {

      let cNode: { name: string, hasChildren: boolean, data: any }[] = [];

      const promise = new Promise<any[]>((resolve, reject) => {
        this.apiService.getChilNodes("dsf").subscribe(res => {
          res.data.forEach(data => {
            let node = {
              name: data.depotContentName,
              hasChildren: !data.isMeasurements,
              data: data,
              selected: true
            };
            cNode.push(node);
          });

          resolve(cNode);
        });

      });

      return promise;

    }
  }


  selectionCount = 0;


  onloadNodeChildren(event: any): void {
    console.log("state changed")
    console.log(event)
  }

  onSelect(event: any): void {
    this.selectionCount = event.treeModel.selectedLeafNodes.length
    this.addMeasuremets.emit(event.node.data.data.depotContentId);
  }

  onDeselect(event: any): void {
    this.selectionCount = event.treeModel.selectedLeafNodes.length
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

  loadChildNodes() {

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


}
