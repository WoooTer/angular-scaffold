import { Component, OnInit } from '@angular/core';

import * as ts_index from 'src/app/wooter/ts-learning/index';

@Component({
  selector: 'app-ts-test-template',
  templateUrl: './ts-test-template.component.html',
  styleUrls: ['./ts-test-template.component.css']
})
export class TsTestTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const myTsTest = ts_index.myTsTest;
  }
}
