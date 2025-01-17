import { Component, input } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {

  //Dichiariamo data come input e il tipo è Widget
  data = input.required<Widget>()

}
