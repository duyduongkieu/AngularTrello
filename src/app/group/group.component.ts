import { Router } from '@angular/router';
import { Imodels } from './../layouts/models/imodels';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LayoutService } from '../layouts/service/layout.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  providers: [LayoutService],
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  formE: FormGroup;
  // editName: any;
  // tslint:disable-next-line:member-ordering
  group: any = [];
  groupId: any = [];
  groupDemo: Imodels[];
  editGroup: Imodels;
  // .........
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.group, event.previousIndex, event.currentIndex);
  }
  constructor(private layoutService: LayoutService, private fG: FormBuilder, private router: Router) {}
  getId(id: string) {
    this.layoutService.getDataId(id).subscribe(res => (this.groupId = [res]));
  }
  edit(group) {
    this.editGroup = group;
  }
  onSubmit() {
    const valueIp = this.formE.value;
    console.log(valueIp);
    // if (this.group.id == null) {
    //   this.layoutService.addNewData(this.groupId.name).subscribe((data: Imodels) => {
    //     console.log(data);
    //     this.formE.reset();
    //     this.router.navigateByUrl('/group');
    //   });
    // } else {
    //   this.layoutService.updatedName(this.groupId.name).subscribe(() => {
    //     this.router.navigateByUrl('/group');
    //   });
    // }
    if (this.editGroup) {
      this.layoutService.updated(this.editGroup).subscribe(data => {
        const ix = data ? this.groupDemo.findIndex(h => h.id === data.id) : -1;
        if (ix > -1) {
          this.groupDemo[ix] = data;
        }
        this.editGroup = undefined;
      });
    }
  }
  save() {
    console.log('ok');
  }
  ngOnInit() {
    // this.getGroup();
    this.layoutService.getData().subscribe(res => (this.group = res));
    console.log('group: ', this.group);
    // ...
    this.formE = this.fG.group({
      name: ['', [Validators.required]],
    });
  }
}
