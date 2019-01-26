import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Edit } from './schedule';

@NgModule({
  declarations: [
    Edit,
  ],
  imports: [
    IonicPageModule.forChild(Edit),
  ],
  exports: [
    Edit
  ]
})
export class EditModule {}
