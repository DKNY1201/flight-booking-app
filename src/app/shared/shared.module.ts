import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HoverDirective} from "./hover.directive";
import {DropdownDirective} from "./dropdown.directive";
import {LimitPipe} from "./limit.pipe";
import {CapitalizePipe} from "./capitalize.pipe";

@NgModule({
  declarations: [
    HoverDirective,
    DropdownDirective,
    LimitPipe,
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    HoverDirective,
    DropdownDirective,
    LimitPipe,
    CapitalizePipe
  ]
})
export class SharedModule {}
