import { Component, OnInit, AfterViewInit } from '@angular/core';
import Konva from 'konva';
@Component({
  selector: 'app-factory-map',
  templateUrl: './factory-map.component.html',
  styleUrls: ['./factory-map.component.scss']
})
export class FactoryMapComponent implements OnInit, AfterViewInit {
  stage: Konva.Stage;
  layer: Konva.Layer;
  rect: Konva.Rect;
  width = 200;
  height = 300;

  constructor() { }

  ngOnInit() {
    console.log('init');

  }
  ngAfterViewInit() {
    console.log('after ver init');
    this.stage = new Konva.Stage({
    container: 'canvas_area',
    width: this.width,
    height: this.height
  });
    this.layer = new Konva.Layer();
    this.rect = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4
    });
    this.layer.add(this.rect);
    this.stage.add(this.layer);
  }


}
