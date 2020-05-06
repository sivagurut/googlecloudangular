import { Component, AfterViewInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {
  defaults as defaultControls,
  Attribution,
  FullScreen,
  ScaleLine,
  ZoomToExtent
} from 'ol/control.js';
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from 'ol/interaction.js';
import { fromLonLat } from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
        console.log(`OnInit`);

        const osmFrAttribution = `&copy; Openstreetmap France |
        Données <a href="http://www.openstreetmap.org/copyright"
         rel="noreferrer">© les contributeurs OpenStreetMap</a>`;
        const map = new Map({
          layers: [
            new TileLayer({
              source: new OSM({
                attributions: [osmFrAttribution]
              })
            })
          ],
          controls: defaultControls({
            attribution: false
          }).extend([
            new Attribution({
              collapsible: false
            }),
            new ZoomToExtent({
              extent: [
                813079.7791264898,
                5929220.284081122,
                848966.9639063801,
                5936863.986909639
              ]
            }),
            new FullScreen(),
            new ScaleLine()
          ]),
          interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
          target: 'map',
          view: new View({
            center: fromLonLat([2, 45]),
            zoom: 6
          })
        });

      }

}
