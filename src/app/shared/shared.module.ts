import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HoverDirective} from "./hover.directive";
import {DropdownDirective} from "./dropdown.directive";

@NgModule({
  declarations: [
    HoverDirective,
    DropdownDirective
  ],
  exports: [
    CommonModule,
    HoverDirective,
    DropdownDirective
  ]
})
export class SharedModule {}
