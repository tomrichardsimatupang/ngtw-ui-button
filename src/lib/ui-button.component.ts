import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icon } from './ui-icon';

@Component({
  selector: 'ui-button',
  template: `
    <button [type]="type" class="group relative flex justify-center items-center
      py-2 px-4 font-medium 
      focus:outline-none focus:ring-2 focus:ring-offset-2" [ngClass]="_addClass">
      <span class="flex items-center pr-2" [innerHTML]="_htmlIcon" *ngIf="_useIcon"></span>
      <ng-content></ng-content>
    </button>
  `,
  //styleUrls: ["./ui-button.component.compiled.css"],
  styleUrls: ["./ui-button.component.css"]
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

  classRounded: any = {
    'rounded-md': true
  }

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
      this._htmlIcon = this.sanitizer.bypassSecurityTrustHtml(this._icon[key].mini.replace(/\:class\:/gi, 'icon-for-button'));
    }else {
      this._useIcon = false;
      this._htmlIcon = "";
    }
  }

  @Input() set rounded( yes: boolean ) {
    if( yes ) {
      this.classRounded = {
        'button-rounded': true
      }
    }else {
      this.classRounded = {
        'rounded-md': true
      }
    }
    this.updateClass();
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
          'text-lg': true
        }
        break;
      case "xl":
        this.classSize = {
          'h-14': true,
          'text-xl': true
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
        break;
      case "secondary":
        this.classColor = {
          'button-secondary': true
        }
        break;
      case "danger":
        this.classColor = {
          'button-danger': true
        }
        break;
      case "success":
        this.classColor = {
          'button-success': true
        }
        break;
      case "warning":
        this.classColor = {
          'button-warning': true
        }
        break;
      case "info":
        this.classColor = {
          'button-info': true
        }
        break;
      case "primary-outline":
        this.classColor = {
          'button-primary-outline': true
        }
        break;
      case "secondary-outline":
        this.classColor = {
          'button-secondary-outline': true
        }
        break;
      case "danger-outline":
        this.classColor = {
          'button-danger-outline': true
        }
        break;
      case "success-outline":
        this.classColor = {
          'button-success-outline': true
        }
        break;
      case "warning-outline":
        this.classColor = {
          'button-warning-outline': true
        }
        break;
      case "info-outline":
        this.classColor = {
          'button-info-outline': true,
        }
        break;
      case "primary-elevated":
        this.classColor = {
          'button-primary': true,
          'button-elevated': true
        }
        break;
      case "secondary-elevated":
        this.classColor = {
          'button-secondary': true,
          'button-elevated': true
        }
        break;
      case "danger-elevated":
        this.classColor = {
          'button-danger': true,
          'button-elevated': true
        }
        break;
      case "success-elevated":
        this.classColor = {
          'button-success': true,
          'button-elevated': true
        }
        break;
      case "warning-elevated":
        this.classColor = {
          'button-warning': true,
          'button-elevated': true
        }
        break;
      case "info-elevated":
        this.classColor = {
          'button-info': true,
          'button-elevated': true
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

  updateClass() {
    this._addClass = {
      ...this.classWidth,
      ...this.classSize,
      ...this.classColor,
      ...this.classRounded
    }
  }

}
