import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatIconRegistry, MatTabChangeEvent } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { GoogleCharts } from 'google-charts';

import { Data } from '../entities/data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  data: Data[];
  infos = {};
  colors = {0: {color: '#4daf7b'}, 1: {color: '#e6623d'}, 2: {color: '#ebc85e'}, 3: {color: '#f4ede7'}};

  constructor(private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry, private dataService: DataService) {
    matIconRegistry.addSvgIcon('upload', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/upload.svg'));
    matIconRegistry.addSvgIcon('share', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/share.svg'));
    matIconRegistry.addSvgIcon('backup', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/backup.svg'));
  }

  ngOnInit() {
    // Load the charts library with a callback
    this.dataService.get().subscribe(data => {
      this.data = data;
      this.infos = this.getInfoFromData(this.data[0].data);
      GoogleCharts.load(this.drawPieChart.bind(this));
    });
  }

  validateChart(event: MatTabChangeEvent) {
    if (event.index === 1) {
      GoogleCharts.load(this.drawColumnChart.bind(this));
    }
  }
  drawPieChart() {
    const pieData = this.data.find(currentData => currentData.id === 1);
    const headerElement = [[pieData.name, pieData.description]];

    const array = [...headerElement, ...pieData.data];

    const data = GoogleCharts.api.visualization.arrayToDataTable(array);

    const options = {
      pieHole: 0.5,
      legend: 'none',
      pieSliceText: 'none',
      width: 220,
      height: 220,
      slices: this.colors,
      chartArea: {left: '10px', top: '10px', width: '92%', height: '92%'}
    };

    const chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('donut-chart'));
    chart.draw(data, options);
  }

  drawColumnChart() {
    const pieData = this.data.find(currentData => currentData.id === 2);
    const headerElement = [[pieData.name, pieData.description]];

    const array = [...headerElement, ...pieData.data];

    const data = GoogleCharts.api.visualization.arrayToDataTable(array);

    const options = {
      width: 220,
      height: 220,
      legend: 'none',
      colors: ['#4daf7b'],
      chartArea: {left: 0, top: 0, width: '100%', height: '100%'},
      hAxis: {textPosition: 'none', gridlines: {color: '#fff'}, baselineColor: '#4daf7b'},
      vAxis: {textPosition: 'none', gridlines: {color: '#fff'}, baselineColor: '#4daf7b'}
    };

    const chart = new GoogleCharts.api.visualization.ColumnChart(document.getElementById('column-chart'));
    chart.draw(data, options);
  }

  getInfoFromData(data) {
    const total = this.getTotalFromData(data);

    return data.map((val, index) => ({
      name: val[0],
      value: val[1] / total * 100,
      color: this.colors[index]
    }));
  }

  getTotalFromData(data) {
    return data.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);
  }
}
