import { Directive, OnChanges, SimpleChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetCssVariables]'
})
export class SetCssVariablesDirective implements OnChanges {
  @Input() appSetCssVariables = {};

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appSetCssVariables) {
      Object.keys(this.appSetCssVariables).forEach(variable => {
        if (this.appSetCssVariables[variable]) {
          document.documentElement.style.setProperty(variable, this.appSetCssVariables[variable]);
        } else {
          document.documentElement.style.removeProperty(variable);
        }
      });
    }
  }
}