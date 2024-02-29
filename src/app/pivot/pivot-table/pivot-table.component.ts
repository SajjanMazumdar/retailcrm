import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { defaultsDeep } from 'lodash';

import 'pivottable/dist/pivot.min.js';
import 'pivottable/dist/pivot.min.css';
import { S } from '@angular/cdk/keycodes';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-pivot-table',
  templateUrl: './pivot-table.component.html',
  styleUrls: ['./pivot-table.component.css']
})
export class PivotTableComponent implements OnInit, AfterViewInit, OnChanges {

  public data = 
  [
    {
      'State': 'Assam',
      'District': 'BAKSA',
      'Block': 'BARAMA TOWN',
      'Market Points': 'BARAMA',
      'Distributor Name': 'MAHESH KUMAR MAHESWARI & HUF',
      'SAP CODE': '220986',
      'Dealer Name': 'CEMENT AND STEEL HOUSE',
      'Dealer ID': '45972',
      'DOA:': '16-10-2017',
      'Senior Emp': 'Raju kumar das',
      'Senior Emp Code': '11694',
      'Jr Emp': 'Dipjyoti barman',
      'Jr Emp Code': '51',
      'Status': 'A',
      'Selling Brand': 'Local',
      'Counter Potential (MT)': '20',
      'Attend Last Dealer meet': 'Yes',
      'FY 2018-2019': '0',
      'FY 2019-2020': '130.78',
      'FY 2020-2021': '179.45',
      'TGT FY 21-22': '465',
      'Total Sales FY 21-22': '64.47'
    },

    {
      'State': 'Assam',
      'District': 'BAKSA',
      'Block': 'GHOGRACHWK',
      'Market Points': 'TAMULPUR',
      'Distributor Name': 'MAHESH KUMAR MAHESWARI & HUF',
      'SAP CODE': '221298',
      'Dealer Name': 'B.K. HARDWARE',
      'Dealer ID': '48627',
      'DOA:': '14-11-2017',
      'Senior Emp': 'Raju kumar das',
      'Senior Emp Code': '11694',
      'Jr Emp': 'Dipjyoti barman',
      'Jr Emp Code': '51',
      'Status': 'A',
      'Selling Brand': 'XTECH,TATA',
      'Counter Potential (MT)': '40',
      'Attend Last Dealer meet': 'Yes',
      'FY 2018-2019': '0',
      'FY 2019-2020': '141.81',
      'FY 2020-2021': '169.58',
      'TGT FY 21-22': '240',
      'Total Sales FY 21-22': '35.77'
    },

    {
      'State': 'Assam',
      'District': 'BAKSA',
      'Block': 'TAMULPUR TOWN',
      'Market Points': '',
      'Distributor Name': 'MAHESH KUMAR MAHESWARI & HUF',
      'SAP CODE': '',
      'Dealer Name': 'J.B CONCRETE INDUSTRY',
      'Dealer ID': '2180765',
      'DOA:': '06-02-2021',
      'Senior Emp': 'Sahajahan ali mazumdar',
      'Senior Emp Code': '11700',
      'Jr Emp': 'Raju kumar das',
      'Jr Emp Code': '11694',
      'Status': 'S',
      'Selling Brand': '',
      'Counter Potential (MT)': '20',
      'Attend Last Dealer meet': 'NO',
      'FY 2018-2019': '0',
      'FY 2019-2020': '0',
      'FY 2020-2021': '0',
      'TGT FY 21-22': '0',
      'Total Sales FY 21-22': '0'
    },

    {
      'State': 'Assam',
      'District': 'BAKSA',
      'Block': 'TAMULPUR TOWN',
      'Market Points': '',
      'Distributor Name': 'MAHESH KUMAR MAHESWARI & HUF',
      'SAP CODE': '0',
      'Dealer Name': 'PATGERI ENTERPRISE',
      'Dealer ID': '4314',
      'DOA:': '05-11-2016',
      'Senior Emp': 'Sahajahan ali mazumdar',
      'Senior Emp Code': '11700',
      'Jr Emp': 'Raju kumar das',
      'Jr Emp Code': '11694',
      'Status': 'P',
      'Selling Brand': '',
      'Counter Potential (MT)': '50',
      'Attend Last Dealer meet': 'NO',
      'FY 2018-2019': '0',
      'FY 2019-2020': '0',
      'FY 2020-2021': '0',
      'TGT FY 21-22': '0',
      'Total Sales FY 21-22': '0'
    },
    
    {
      'State': 'Assam',
      'District': 'BARPETA',
      'Block': 'BERPETA',
      'Market Points': '',
      'Distributor Name': 'MAHESH KUMAR MAHESWARI & HUF',
      'SAP CODE': '224287',
      'Dealer Name': 'AHMED ENTERPRISE',
      'Dealer ID': '4314',
      'DOA:': '05-11-2016',
      'Senior Emp': 'Sahajahan ali mazumdar',
      'Senior Emp Code': '11700',
      'Jr Emp': 'Raju kumar das',
      'Jr Emp Code': '11694',
      'Status': 'P',
      'Selling Brand': '',
      'Counter Potential (MT)': '50',
      'Attend Last Dealer meet': 'NO',
      'FY 2018-2019': '0',
      'FY 2019-2020': '0',
      'FY 2020-2021': '0',
      'TGT FY 21-22': '0',
      'Total Sales FY 21-22': '0'
    },

  ];

  @Input() config: any;
  @Input() show: any;
  @Output() newConfig = new EventEmitter<any>();

  @ViewChild('shadow-root') myDiv: ElementRef;

  private el: ElementRef;
  private container: any;
  private inst: any;
  private targetElement: any;
  private renderers: any;
  private derivers: any;
  private defaultConfig: any;
  private pivotConfig: any;


  constructor(@Inject(ElementRef) el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): void { 
    console.log('PivotTableComponent')
  }

  ngAfterViewInit(): void {
    if (!this.el || !this.el.nativeElement || !this.el.nativeElement.children) {
      console.log('cant build without element');
      return;
    }

    this.container = this.el.nativeElement;
    console.log(this.container)
    this.inst = jQuery(this.container);
    this.targetElement = this.inst.find('.pivot-wrapper');
    if (!this.targetElement) {
      console.log('cant find the pivot element');
      return;
    }

    console.log(this.targetElement.firstChild)
    while (this.targetElement.firstChild) {
      this.targetElement.removeChild(this.targetElement.firstChild);
    }

    this.renderers = jQuery.extend(jQuery.pivotUtilities.renderers, jQuery.pivotUtilities.gchart_renderers);

    this.derivers = $.pivotUtilities.derivers;


    // var sumPsale = this.data.reduce(function(sum, current) {
    //   return sum + current.psale;
    // }, 0);
    // function sumsale(records){
    //   records.reduce(function(sum, current) {
    //     return sum + current.psale;
    //   }, 0);
    // }

    // var binDeriver = function(record) {
    //   console.log(record)
    //   record.psale = +record['primary sale'];
    //   return record.psale;
    // }

    

    console.log(this.renderers)
    this.defaultConfig = {
      renderers: this.renderers,
      rows: [],
      cols: [],
      rendererName: 'Table',
      // hiddenFromDragDrop: ['primary'],
      // vals: [
      //   'primary',
      //   'secondary'
      // ],
      aggregatorName: "Count",
      // derivedAttributes: {binDeriver},
      // filter: function(record) {
      //   return record.Status !== "A";
      // },
      rendererOptions: {
        plotlyConfig: {
          showlegend: true
        }
      },
      onRefresh: () => {
        this.onPivotRefresh();
      }
    };
    console.log(this.defaultConfig)
    console.log(this.myDiv) 
    this.draw();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.sumPsale = 0;
    if (changes['data']) {
      this.draw();
    }
    
    console.log(changes)

    if (changes['config'] && this.config !== undefined) {
      this.config.onRefresh = () => this.onPivotRefresh();
      this.draw();
    }
  }

  /**
   * Private Methods
   */

   /**
    * Method to draw the pivot table with provided data and configuration
    */
  private draw(): void {
    if (this.targetElement) {
      this.pivotConfig = defaultsDeep(this.config, this.defaultConfig);
      console.log(this.pivotConfig);
      this.targetElement.pivotUI(this.data, this.pivotConfig, true, 'es');
    }
  }

  /**
   * Method for capturing pivot data configuration changes and emit them to the parent component
   */
  private onPivotRefresh(): void {
    const changeConfig = this.targetElement.data('pivotUIOptions');
    console.log(changeConfig)
    this.newConfig.emit(changeConfig);
  }

}
