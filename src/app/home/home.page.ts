import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapView: ElementRef;
  constructor() { }

  ionViewDidEnter(): void {
    this.createMap();
  }


  async createMap() {
    const delimit = await this.mapView.nativeElement.getBoundingClientRect() as DOMRect;

    CapacitorGoogleMaps.create({
      width: Math.round(delimit.width),
      height: Math.round(delimit.height),
      x: Math.round(delimit.x),
      y: Math.round(delimit.y),
      zoom: 5
    });


    CapacitorGoogleMaps.addListener('onMapReady', async () => {
      CapacitorGoogleMaps.setMapType({
        type: 'normal'
      });
      this.showCurrentPosition();
    });
  }

  async showCurrentPosition(){

  }

  ionViewDidLeave() {
    CapacitorGoogleMaps.close();
  }
}
