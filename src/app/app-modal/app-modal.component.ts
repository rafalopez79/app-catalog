import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppItem } from '../model/model';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {

  @Input()
  public item: AppItem;

  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    
  }

  public open(content): void {
    this.modalService.open(content);
  }

  public setValue(item: AppItem) : void {
    this.item = item;
  }

  public close(): void {
    this.activeModal.close();
  }

}
