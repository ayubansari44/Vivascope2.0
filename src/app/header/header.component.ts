import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../_modal';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as $ from 'jquery';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  closeResult: string;
  displayedColumns: string[] = ['pid', 'tid', 'date', 'report'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public modalService: ModalService,
    public authenticationService: AuthenticationService,
    public dialog: MatDialog,
    public dialog2: MatDialog
  ) {}

  log(fname) {
    console.log(fname.value);
    // if (fname.value === "null" ) {
    //   this.openDial2();
    // }
    if (fname.value.length <= 10) {
      this.openDial();
    }
  }
  log2(lname) {
    console.log(lname.value);
    // if (fname.value === "null" ) {
    //   this.openDial2();
    // }
    if (lname.value.length <= 10) {
      this.openDial2();
    }
  }

  openDial2() {
    this.dialog.open(Dialog2Component);
    // this.dialog.open(Dialog2Component);
  }

  getVal2(item) {
    if (item.target.value.length >= 10) {
      this.openDial2();
    }
  }

  getVal(item) {
    if (item.target.value.length >= 10) {
      this.openDial2();
    }
  }

  logout() {
    this.authenticationService.logout();
  }

  @Input() deviceMd: boolean;

  pid = <HTMLInputElement>document.getElementById('pid');
  pid2: any = <HTMLInputElement>document.getElementById('pid');
  tid = <HTMLInputElement>document.getElementById('tid');
  form = <HTMLInputElement>document.getElementById('form');
  errorElement = <HTMLInputElement>document.getElementById('error');

  openDial() {
    this.dialog.open(Dialog1Component);
  }

  ngOnInit() {
    const table = document.getElementById('tab') as HTMLTableElement;
    const pid = <HTMLInputElement>document.getElementById('pid');
    const pid2: any = <HTMLInputElement>document.getElementById('pid');
    const tid = <HTMLInputElement>document.getElementById('tid');
    const form = <HTMLInputElement>document.getElementById('form');
    const errorElement = <HTMLInputElement>document.getElementById('error');

     console.log(table);
    // function checkval() { }
    //const totalRowCount = table.rows.length;

    form.addEventListener('submit', (e) => {
      let messages = [];
      if (pid.value === '' || pid.value === null) {
        messages.push('PID is required');
      }
      if (pid2.value.length < 10) {
        this.openDial();
      }

      if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
      }
    });

    $(document).ready(function () {
      var currentGfgStep, nextGfgStep, prevGfgStep;
      var opacity;
      var current = 1;
      var steps = $('fieldset').length;
      console.log(typeof steps);

      setProgressBar(current);

      $('.next-step').click(function () {
        currentGfgStep = $(this).parent().parent();
        nextGfgStep = currentGfgStep.next();
        prevGfgStep = currentGfgStep.prev();

        $('#progressbar li')
          .eq($('fieldset').index(nextGfgStep))
          .addClass('active');

        // .eq($('fieldset').index(prevGfgStep))
        // .removeClass('active');

        $('#progressbar li')
          .eq($('fieldset').index(currentGfgStep))
          .removeClass('active')
          .addClass('prev');

        // console.log($('fieldset').index(currentGfgStep));

        if ($('fieldset').index(currentGfgStep) != 0) {
          $('#progressbar li')
            .eq($('fieldset').index(prevGfgStep))
            .addClass('prev');
        }

        nextGfgStep.show();
        currentGfgStep.animate(
          {
            opacity: 0,
          },

          {
            step: function (now) {
              opacity = 1 - now;

              currentGfgStep.css({
                display: 'none',
                // position: 'relative',
              });
              nextGfgStep.css({ opacity: opacity });
            },
            duration: 1,
          }
        );
        setProgressBar(++current);
      });

      function setProgressBar(currentStep) {
        var percent = (100 / steps) * current;
        // var percent2 = percent.toFixed();
        $('.progress-bar').css('width', percent + '%');
      }

      $('.submit').click(function () {
        return false;
      });
    });
  }
}



export interface PeriodicElement {
  tid: string;
  pid: string;
  date: string;
  report: string;
}

const batteryLevel = document.querySelector('.battery-level');

const ELEMENT_DATA: PeriodicElement[] = [
  {
    pid: 'PAT001ABC2021',
    tid: 'TEST001ABC2021',
    date: '2021-01-06 14.25.34',
    report: 'Failed',
  },
  {
    pid: 'PAT001ABC2021',
    tid: 'TEST001ABC2021',
    date: '2021-01-06 14.25.34',
    report: 'Failed',
  },
  {
    pid: 'PAT001ABC2021',
    tid: 'TEST001ABC2021',
    date: '2021-01-06 14.25.34',
    report: 'Failed',
  },
  
];
