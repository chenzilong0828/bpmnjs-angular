import { Component } from '@angular/core';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { xmlStr } from './mock/xmlStr';
import paletteProvider from "src/app/diagram/custom-palette";
import contextPadProvider from "src/app/diagram/context-pad";
import { CamundaModdleDescriptor } from "src/app/diagram/CamundaModdleDescriptor/CamundaModdleDescriptor";
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'


@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})

export class DiagramComponent {
  bpmnModeler:any;

  constructor() {

  }

  ngOnInit(): void {
    this.loadBPMN();
  }

  loadBPMN() {
    this.bpmnModeler = new BpmnModeler({
      container: '.canvas',
      // 添加控制板
      propertiesPanel: {
        // new Modeler() 时，必须传入配置项 propertiesPanel，并设置 parent 属性，用来指定侧边栏挂载的 DOM 节点
        parent: '#js-properties-panel',
      },
      additionalModules: [
        paletteProvider, // 自定义palette
        contextPadProvider, // 自定义context-pad
        // 右边的属性栏
        propertiesProviderModule,
        propertiesPanelModule
      ],
      moddleExtensions: {
        camunda: CamundaModdleDescriptor
      }
    })
    this.createNewDiagram(xmlStr);
  }

  createNewDiagram(xml:any) {
    // 将字符串转换成图显示出来
    this.bpmnModeler.importXML(xml);
  }
}
