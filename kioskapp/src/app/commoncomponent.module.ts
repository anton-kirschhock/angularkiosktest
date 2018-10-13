import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [],
  exports: [MatButtonModule]
})
export class CommonComponentModule {}
