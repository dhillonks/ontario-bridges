import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Bridge } from '../bridge';
import { Bridges } from '../bridges';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bridges: Array<Bridge> = Bridges;

  @Output() bridgeSelected: EventEmitter<Bridge> = new EventEmitter();

  handleClick(bridge: Bridge): void{
    //Emits a bridge:
    this.bridgeSelected.emit(bridge);
  }

  trackByBridges(index: number, bridge: Bridge): string{
    return bridge.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
