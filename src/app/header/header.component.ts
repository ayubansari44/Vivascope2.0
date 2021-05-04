import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PatientListComponent } from '../patient-list/patient-list.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../_modal'; 
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as $ from 'jquery';
import { AuthenticationService } from '../service/authentication/authentication.service';

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
    public authenticationService: AuthenticationService
  ) {}

  logout() {
    this.authenticationService.logout();
  }

  @Input() deviceMd: boolean;

  ngOnInit() {
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
          .addClass('active')

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
        // percent = percent.toFixed();
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
  { pid: 'PAT001ABC2021', tid: 'TEST001ABC2021', date: '2021-01-06 14.25.34', report: 'Failed' },
  // { pid: 2, tid: 'Helium', date: 4.0026, report: 'He' },
  // { pid: 3, tid: 'Lithium', date: 6.941, report: 'Li' },
  // { pid: 4, tid: 'Beryllium', date: 9.0122, report: 'Be' },
  // { pid: 5, tid: 'Boron', date: 10.811, report: 'B' },
  // { pid: 6, tid: 'Carbon', date: 12.0107, report: 'C' },
  // { pid: 7, tid: 'Nitrogen', date: 14.0067, report: 'N' },
  // { pid: 8, tid: 'Oxygen', date: 15.9994, report: 'O' },
  // { pid: 9, tid: 'Fluorine', date: 18.9984, report: 'F' },
  // { pid: 10, tid: 'Neon', date: 20.1797, report: 'Ne' },
  // { pid: 11, tid: 'Sodium', date: 22.9897, report: 'Na' },
  // { pid: 12, tid: 'Magnesium', date: 24.305, report: 'Mg' },
  // { pid: 13, tid: 'Aluminum', date: 26.9815, report: 'Al' },
  // { pid: 14, tid: 'Silicon', date: 28.0855, report: 'Si' },
  // { pid: 15, tid: 'Phosphorus', date: 30.9738, report: 'P' },
  // { pid: 16, tid: 'Sulfur', date: 32.065, report: 'S' },
  // { pid: 17, tid: 'Chlorine', date: 35.453, report: 'Cl' },
  // { pid: 18, tid: 'Argon', date: 39.948, report: 'Ar' },
  // { pid: 19, tid: 'Potassium', date: 39.0983, report: 'K' },
  // { pid: 20, tid: 'Calcium', date: 40.078, report: 'Ca' },
];