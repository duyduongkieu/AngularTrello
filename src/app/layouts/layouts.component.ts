import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layouts.component.html',
  providers: [LayoutService],
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutComponent implements OnInit {
  click = false;
  close = true;
  formG: FormGroup;
  constructor(private fG: FormBuilder, private router: Router, private layoutService: LayoutService) {}

  ngOnInit() {
    this.formG = this.fG.group({
      name: ['', [Validators.required]],
    });
  }
  onclick() {
    this.click = !this.click;
    this.close = !this.close;
  }
  onClose() {
    this.click = !this.click;
    this.close = !this.close;
  }
  onSubmit() {
    // console.log(this.formG.value);
    if (this.formG.valid) {
      this.layoutService.addNewData(this.formG.value).subscribe(res => this.router.navigateByUrl('/group'));
      this.formG.reset();
    }
    this.router.navigateByUrl('/group');
  }
}
