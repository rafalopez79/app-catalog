import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppItem, AppVersion, AppVersionDetail } from '../model/model';
import { DataService } from '../services/data.service';
import { AppModalComponent } from '../app-modal/app-modal.component';

@Component({
  selector: 'app-collection',
  templateUrl: './app-collection.component.html',
  styleUrls: ['./app-collection.component.css']
})
export class AppCollectionComponent implements OnInit {

  private columns: number = 2;
  private modalService: NgbModal;
  private dataService: DataService;
  private items: AppItem[];

  constructor(dataService: DataService, modalService: NgbModal) {
    this.dataService = dataService;
    this.modalService = modalService;
  }

  ngOnInit(): void {
    //this.dataService.loadAppItems().subscribe(
    //  items => this.items
    //);
    this.items = [];

    //this.items.push(new AppItem({'name': 'nuemo', 'description':'Excellent application OY'}));
    //this.items.push(new AppItem({'name': 'nuemo1', 'description':'Excellent application OY1'}));
    //this.items.push(new AppItem({'name': 'nuemo2', 'description':'Excellent application OY2'}));
    //this.items.push(new AppItem({'name': 'nuemo3', 'description':'Excellent application OY3'}));
    //this.items.push(new AppItem({'name': 'nuemo4', 'description':'Excellent application OY4'}));

    //this.items.push(new AppItem({'name': 'nuemo5', 'description':'Excellent application OY5'}));
    //this.items.push(new AppItem({'name': 'nuemo6', 'description':'Excellent application OY6'}));
    //this.items.push(new AppItem({'name': 'nuemo7', 'description':'Excellent application OY7'}));

    let details = [];
    details.push(new AppVersionDetail({ 'title': 'Theme correction', 'rating':4, 'description': 'Corertiesrhtwleruihweirheirhwjerhfwuierhfiuwerhrection of the seventh element of the list before de heather' }));
    details.push(new AppVersionDetail({ 'title': 'Theme incorrection','rating':2.3, 'description': 'Correction of the seventh element of the list before de heather' }));
    details.push(new AppVersionDetail({ 'title': 'Theme incorrectionable' }));


    let versions = [];
    versions.push(new AppVersion({ 'name': '1.0', 'releaseDate': '2019-01-24', 'details': details }));
    versions.push(new AppVersion({ 'name': '1.1', 'releaseDate': '2019-01-25', 'details': details }));
    versions.push(new AppVersion({ 'name': '1.2', 'releaseDate': '2019-01-26', 'details': details }));
    versions.push(new AppVersion({ 'name': '1.3', 'releaseDate': '2019-01-27', 'details': details }));

    this.items.push(new AppItem({ 'name': 'App1', 'description': 'Excellent application OY8eertserilthsi uerhtui seruit eiurt seirut esruity isuer tiuesr tedsfjsdlfkjglskjdfhglsdhfgk sdfjlghl adfasdfasdf asdfas fas df asd er ser ser se sdjkfgn ljskd lgkshdflk ghslkdh jsdhfgh sldfjh gsdjkfh glkjsdh flkjglkjsdfhlkghsdklfjhg rthslerkjfslkjdfglsdjfglsjdfhlkshdlfkjghslkdfjhglksdfhgklsdhfgkljshdfghsdklfhg', 'versions': versions }));
    this.items.push(new AppItem({ 'name': 'App2', 'description': 'Excellent application OY9' }));
    this.items.push(new AppItem({ 'name': 'App3', 'description': 'Excellent application OY10' }));
    this.items.push(new AppItem({ 'name': 'App1', 'description': 'Excellent application OY8', 'versions': versions }));
    this.items.push(new AppItem({ 'name': 'App2', 'description': 'Excellent application OY9' }));
    this.items.push(new AppItem({ 'name': 'App3', 'description': 'Excellent application OY10' }));
    this.items.push(new AppItem({ 'name': 'App1', 'description': 'Excellent application OY8', 'versions': versions }));
    this.items.push(new AppItem({ 'name': 'App2', 'description': 'Excellent application OY9' }));
    this.items.push(new AppItem({ 'name': 'App3', 'description': 'Excellent application OY10' }));
  }

  public getItems(): AppItem[][] {
    return AppCollectionComponent.split(this.items, this.columns) ;
  }

  public open(item: AppItem): void {
    const modalRef = this.modalService.open(AppModalComponent, { scrollable: true });
    modalRef.componentInstance.setValue(item);
  }

  private static split<T>(array: T[], size: number): T[][] {
    return array.map((e, i) => i % size == 0 ? array.slice(i, i + size) : null).filter(function (e) { return e; });
  }

}
