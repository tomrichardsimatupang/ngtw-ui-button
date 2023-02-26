import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icon } from './ui-icon';

@Component({
  selector: 'ui-button',
  template: `
    <button [type]="type" class="group relative flex justify-center items-center
      rounded-md border border-transparent py-2 px-4 font-medium 
      focus:outline-none focus:ring-2 focus:ring-offset-2" [ngClass]="_addClass">
      <span class="flex items-center pr-2" [innerHTML]="_htmlIcon" *ngIf="_useIcon"></span>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ["./ui-button.css"]
})
export class UiButtonComponent implements OnInit {

  /** 
   * =========================
   * Attributes
   * ========================= 
   */
  _icon = Icon;
  _htmlIcon: SafeHtml = "";
  _addClass: any = {};
  _icon_selected = "";
  _useIcon = false;
  
  /** 
   * =========================
   * Classes
   * ========================= 
   */
  classWidth: any = {}
  
  classSize: any = {
    'h-10':true,
    'text-sm': true
  }

  classColor: any = {
    'button-primary': true
  }

  classIconColor: any = 'text-grey-50 group-hover:text-grey-200';

  /** 
   * =========================
   * Set Attributes
   * ========================= 
   */

  @Input() type = "button";

  @Input() set icon( value: string ) {
    this._icon_selected = value;
    const key = Object.keys(this._icon).find( (k) => k === value );
    if(key) {
      this._useIcon = true;
      this._htmlIcon = this.sanitizer.bypassSecurityTrustHtml(this._icon[key].mini.replace(/\:class\:/gi, this.classIconColor));
    }else {
      this._useIcon = false;
      this._htmlIcon = "";
    }
  }
  
  @Input() set width( value: string ) {
    this.classWidth = {};
    switch( value ) {
      case "full":
        this.classWidth['w-full'] = true; break;
    }
    this.updateClass();
  };

  @Input() set size( value: string ) {
    this.classSize = {};
    switch( value ) {
      case "lg": 
        this.classSize = {
          'h-12': true,
          'text-md': true
        }
        break;
      case "xl":
        this.classSize = {
          'h-14': true,
          'text-lg': true
        }
        break;
      default:
        this.classSize = {
          'h-10': true,
          'text-sm': true
        } 
        break;
    }
    this.updateClass();
  }

  @Input() set color( value: string ) {

    switch( value ) {
      case "primary":
        this.classColor = {
          'button-primary': true
        }
        this.classIconColor = {
          'button-text-on-dark': true
        }
        break;
      case "secondary":
        this.classColor = {
          'button-secondary': true
        }
        this.classIconColor = {
          'button-text-on-light': true
        }
        break;
      case "danger":
        this.classColor = {
          'button-danger': true
        }
        this.classIconColor = {
          'button-text-on-dark': true
        }
        break;
      case "success":
        this.classColor = {
          'button-success': true
        }
        this.classIconColor = {
          'button-text-on-dark': true
        }
        break;
      case "warning":
        this.classColor = {
          'button-warning': true
        }
        this.classIconColor = {
          'button-text-on-dark': true
        }
        break;
      case "info":
        this.classColor = {
          'button-info': true
        }
        this.classIconColor = {
          'button-text-on-dark': true
        }
        break;
      default:
        break;
    }
    this.updateClass();
    this.icon = this._icon_selected;
  }


  constructor(private sanitizer:DomSanitizer) {
  }

  /** 
   * =========================
   * Methods
   * ========================= 
   */
  ngOnInit(): void {
  }

  createColor( color:string, onDark: boolean = true ) {

    const onDarkIcon  = 'text-grey-50 group-hover:text-grey-200';
    const onLightIcon = 'text-slate-800 group-hover:text-slate-600';
    const changeColor: any = {}; 

    changeColor['text-white'] = true;
    changeColor[`bg-${color}-600`] = true;
    changeColor[`hover:bg-${color}-700`] = true;
    changeColor[`focus:ring-${color}-500`] = true;

    this.classColor = changeColor;

    this.classIconColor = onDark ? onDarkIcon:onLightIcon;

  }

  updateClass() {
    this._addClass = {
      ...this.classWidth,
      ...this.classSize,
      ...this.classColor
    }
  }

}
