import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { IData } from './data.interface'
import { DataService } from './data.service';
import * as D3 from 'd3';
import {color} from 'd3-color';
import {pie} from 'd3-shape';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './visualization.component.html'
})

export class VisualizationComponent implements OnInit {
  @ViewChild('containerPieChart') element: ElementRef;

  private host: D3.Selection<any>;
  private svg: D3.Selection<any>;
  private width: number;
  private height: number;
  private radius: number;
  private htmlElement: HTMLElement;
  private pieData: IData[];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.htmlElement = this.element.nativeElement;
    this.host = D3.select(this.htmlElement);
    this.dataService.$data.subscribe(data => {
      this.pieData = data;
      this.setup();
      this.buildSVG();
      this.buildPie();
    });
  }

  private setup(): void {
    this.width = 800;
    this.height = 600;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  private buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('viewBox', `0 0 ${this.width} ${this.height}`)
      .append('svg')
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
    this.svg.append('g')
      .attr('class', 'slices');
    this.svg.append('g')
      .attr('class', 'labels');
    this.svg.append('g')
      .attr('class', 'lines');

  }

  private buildPie(): void {
    const pie = D3.pie().sort(null);
    const values = this.pieData.map(data => data.value);
    const arcSelection = this.svg.selectAll('.arc')
      .data(pie(values))
      .enter()
      .append('g')
      .attr('class', 'arc');
    this.populatePie(arcSelection);
  }

private populatePie(arcSelection: D3.Selection<D3.layout.pie.Arc<number>>): void {
const labelr = this.radius * 0.8;
const pieColor = D3.scaleOrdinal(D3.schemeCategory20c);
const arc = D3.arc<D3.layout.pie.Arc<number>>()
  .outerRadius(this.radius * 0.7)
  .innerRadius(0);
const outerArc = D3.arc<D3.layout.pie.Arc<number>>()
  .outerRadius(this.radius * 0.9)
  .innerRadius(this.radius * 0.9);
arcSelection.append('path')
  .attr('d', arc)
  .attr('fill', (datum, index) => {
    return pieColor(this.pieData[index].label);

  });

  function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2 ;
  }


arcSelection.append('text')
  .text((datum, index) => this.pieData[index].label)
  .attr('points', function(d) {
    const c = arc.centroid(d),
      x = c[0],
      y = c[1],
      // pythagorean theorem for hypotenuse
      h = Math.sqrt(x * x + y * y);
    return 'translate(' + (x / h * labelr) +  ',' +
      (y / h * labelr) +  ')';
  })
  .attr('transform', function(d) {
    const c = arc.centroid(d),
      x = c[0],
      y = c[1],
      // pythagorean theorem for hypotenuse
      h = Math.sqrt(x * x + y * y);
    return 'translate(' + (x / h * labelr) +  ',' +
      (y / h * labelr) +  ')';
  })
  .attr('dy', '.35em')
  .attr('text-anchor', function(d) {
    // are we past the center?
    return (d.endAngle + d.startAngle) / 2 > Math.PI ?
      'end' : 'start';
  })
  .style('font-size', '12px');

}
}
