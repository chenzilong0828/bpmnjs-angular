export var xmlStr:any = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <bpmn:process id="Process_start" isExecutable="true" flowable:formDisplay="0">
  <bpmn:task id="start" name="">
    <bpmn:incoming>Flow_ewr23d</bpmn:incoming>
  </bpmn:task>
    <bpmn:task id="userTask" name="">
      <bpmn:incoming>Flow_ewr23d</bpmn:incoming>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_ewr23d" sourceRef="start" targetRef="userTask" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_start">
      <bpmndi:BPMNEdge id="Flow_ewr23d_di" bpmnElement="Flow_ewr23d">
        <omgdi:waypoint x="360" y="200" />
        <omgdi:waypoint x="460" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="start_di" bpmnElement="start">
        <omgdc:Bounds x="260" y="160" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="userTask_di" bpmnElement="userTask">
        <omgdc:Bounds x="460" y="160" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`



