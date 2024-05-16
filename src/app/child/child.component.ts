import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent
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
  @Input() forDocheck!: string;
  constructor() {
    console.log('This is Constructor');
  }

  ngOnChanges() {
    // This will run only if @Input is changes
    console.log('Child Component : OnChanges Run');
  }

  ngOnInit() {
    // This will run only once. when this component is render first time
    console.log('Child Component : OnChanges Run');
  }

  ngDoCheck() {
    // This is run immediately when any change detection happen
    console.log('Child Component : DoCheck Run');
  }

  ngAfterContentInit() {
    // this is run once but this hook check DOM Component
    console.log('Child Component : AfterContentInit Run');
  }

  ngAfterContentChecked() {
    // this is run continuously if they detect some changes: they see DOM not component
    console.log('Child Component : AfterContentChecked Run');
  }

  ngAfterViewInit() {
    // this is run once but this hook check Component not DOM
    console.log('Child Component : AfterViewInit Run');
  }

  ngAfterViewChecked() {
    // this is run continuously to check detection: they see Component not DOM
    console.log('Child Component : AfterViewChecked Run');
  }

  ngOnDestroy() {
    // this will happen when you come out of that component
    console.log('Child Component : OnDestroy Run');
  }
}
