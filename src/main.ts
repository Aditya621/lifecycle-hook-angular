import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ChildComponent } from './app/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Namaste {{ name }}!</h1>
    <h3> Life Cycle Hooks...</h3>

    <button (click) = "toggle()">Toggle/Hide Child Component</button>

    @if(default){
      <app-child [forDocheck] = 'name'></app-child>
    }
  `,
  imports: [ChildComponent],
})
export class App
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name = 'Angular';

  // this i Parent Component t

  default: boolean = false;

  public toggle() {
    this.default = !this.default;
  }

  constructor() {
    console.log('This is Constructor');
  }

  ngOnChanges() {
    // This will run only if @Input is changes
    console.log('Parent Component : OnChanges Run');
  }

  ngOnInit() {
    // This will run only once. when this component is render first time
    console.log('Parent Component : OnChanges Run');
  }

  ngDoCheck() {
    // This is run immediately when any change detection happen
    console.log('Parent Component : DoCheck Run');
  }

  ngAfterContentInit() {
    // this is run once but this hook check DOM Component
    console.log('Parent Component : AfterContentInit Run');
  }

  ngAfterContentChecked() {
    // this is run continuously if they detect some changes: they see DOM not component
    console.log('Parent Component : AfterContentChecked Run');
  }

  ngAfterViewInit() {
    // this is run once but this hook check Component not DOM
    console.log('Parent Component : AfterViewInit Run');
  }

  ngAfterViewChecked() {
    // this is run continuously to check detection: they see Component not DOM
    console.log('Parent Component : AfterViewChecked Run');
  }

  ngOnDestroy() {
    // this will happen when you come out of that component
    console.log('Parent Component : OnDestroy Run');
  }
}

bootstrapApplication(App);
