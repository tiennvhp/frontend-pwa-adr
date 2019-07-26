import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../main.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AccountComponent implements OnInit {
	model;
	constructor(private modalService: NgbModal) { }

	ngOnInit() {
	}



	closeResult: string;
	open(content) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'effect-24'}).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	closeResultEnterAddress: string;
	openEnterAddress(content) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'effect-28'}).result.then((result) => {
		  this.closeResultEnterAddress = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResultEnterAddress = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
		  return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		  return 'by clicking on a backdrop';
		} else {
		  return  `with: ${reason}`;
		}
	}
}
