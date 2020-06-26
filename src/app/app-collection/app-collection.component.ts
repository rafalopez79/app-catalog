import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppItem, AppVersion, AppVersionDetail, AppInfo } from '../model/model';
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
    this.dataService.loadAppItems().subscribe(
      data =>  {
        let info = new AppInfo(data);
        this.items = info.getApplications();
        console.log(this.items);
      }
    );
  }

  public getItems(): AppItem[][] {
    return AppCollectionComponent.split(this.items, this.columns);
  }

  public open(item: AppItem): void {
    const modalRef = this.modalService.open(AppModalComponent, { scrollable: true });
    modalRef.componentInstance.setValue(item);
  }

  private static split<T>(array: T[], size: number): T[][] {
    if (array) {
      return array.map((e, i) => i % size == 0 ? array.slice(i, i + size) : null).filter(function (e) { return e; });
    } else {
      return [];
    }
  }

}
