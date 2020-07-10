import { Component, OnInit, Input } from '@angular/core';
import { Bridge } from '../bridge';

@Component({
  selector: 'app-bridge-panel',
  templateUrl: './bridge-panel.component.html',
  styleUrls: ['./bridge-panel.component.css']
})
export class BridgePanelComponent implements OnInit {

  @Input() bridge: Bridge;

  constructor() { }

  ngOnInit(): void {
  }

}
