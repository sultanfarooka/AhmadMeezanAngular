import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITreeOptions, TreeNode } from '@circlon/angular-tree-component';
import { ViewEncapsulation } from '@angular/core';
import { rootNodes, childNodes } from '../mockData';

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

  loading = true

  treeNodes: any = [];

  //Angular Tree Options object provided by the package.
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

  delay(ms: 3000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async getRootNodes() {
    //Call service where api is called for tree root nodes

    await this.delay(3000);

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



  close() {
    this.closeMeasurementPanelEvent.emit();
  }

  ngOnInit(): void {
    this.getRootNodes()
  }

}
