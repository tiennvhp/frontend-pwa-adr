import { Component, ViewEncapsulation,  OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['../main.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailPageComponent implements OnInit {

	slideConfig1 = {"slidesToShow": 4, "slidesToScroll": 1, "dots": false };


	constructor(private modalService: NgbModal) { }

	ngOnInit() {
		// start thumbSlide
		if (this.thumbsData.length > 8) this.isActiveThumbsSlide = true;
		(this.thumbsData[0].type === 'img') && (this.currentBigContent = this.thumbsData[0].bigContentUrl);
		(this.thumbsData[0].type === 'video') && (this.currentBigContent = this.thumbsData[0].bigContentUrl);
		(this.thumbsData[0].type === 'panorama') && (this.currentBigContent = this.thumbsData[0].bigContentUrl);
		this.bigContentType = this.thumbsData[0].type;
		// end thumbSlide
	}





	
	// start thumbSlide
	isActiveThumbsSlide = false;
	isOutOfThumbUp = false;
	isOutOfThumbDown = false;
	isActiveMoveDown = false;
	isActiveMoveUp = true;
	activeIndex = 0;
	initThumbListY = 0;
	bigContentType = '';
	pickerX = 0;
	pickerY = 0;
	isShowPicker = true;
	thumbsData = [
		{
			type: 'panorama',
			url: 'https://i.ibb.co/qm4Y1nd/Ima.png',
			bigContentUrl: 'https://i.ibb.co/qm4Y1nd/Ima.png'
		},
		{
			type: 'img',
			url: 'https://media-ak.static-adayroi.com/820_820/80/h7f/h3d/16622999240734.jpg',
			bigContentUrl: 'https://media-ak.static-adayroi.com/820_820/80/h7f/h3d/16622999240734.jpg'
		},
		{
			type: 'img',
			url: 'https://media-ak.static-adayroi.com/820_820/80/hb5/h7c/17277229563934.jpg',
			bigContentUrl: 'https://media-ak.static-adayroi.com/820_820/80/hb5/h7c/17277229563934.jpg'
		},
		{
			type: 'video',
			url: 'https://i.ibb.co/VMf31m7/Det.png',
			bigContentUrl: 'https://www.youtube.com/watch?v=1irMvQqcnxs&pbjreload=10'
		},
		{
			type: 'panorama',
			url: 'https://i.ibb.co/qm4Y1nd/Ima.png',
			bigContentUrl: 'https://i.ibb.co/qm4Y1nd/Ima.png'
		},
		{
			type: 'img',
			url: 'https://i.ibb.co/VMf31m7/Det.png',
			bigContentUrl: 'https://i.ibb.co/qm4Y1nd/Ima.png'
		},
		{
			type: 'video',
			url: 'https://i.ibb.co/VMf31m7/Det.png',
			bigContentUrl: 'https://www.youtube.com/watch?v=hRAswLgr2q0&pbjreload=10'
		},
		{
			type: 'panorama',
			url: 'https://i.ibb.co/qm4Y1nd/Ima.png',
			bigContentUrl: 'https://i.ibb.co/qm4Y1nd/Ima.png'
		},
		{
			type: 'img',
			url: 'https://i.ibb.co/VMf31m7/Det.png',
			bigContentUrl: 'https://i.ibb.co/qm4Y1nd/Ima.png'
		},
		{
			type: 'video',
			url: 'https://i.ibb.co/VMf31m7/Det.png',
			bigContentUrl: 'https://www.youtube.com/watch?v=hRAswLgr2q0&pbjreload=10'
		},
		{
			type: 'panorama',
			url: 'https://i.ibb.co/qm4Y1nd/Ima.png',
			bigContentUrl: 'https://i.ibb.co/qm4Y1nd/Ima.png'
		}
	];
	currentBigContent = '';

	upMoveThumbs() {
		this.isActiveMoveDown = true;
		if (Math.abs(this.initThumbListY) <= 66 * (this.thumbsData.length - 7)) this.initThumbListY = this.initThumbListY - 66
			else this.isActiveMoveUp = false;
	}

	downMoveThumbs() {
		this.isActiveMoveUp = true;
		if (this.initThumbListY < 0) this.initThumbListY = this.initThumbListY + 66
			else this.isActiveMoveDown = false;
	}

	mouseMoveBigImage(event) {
		console.log(event.layerX + ' = ' + event.layerY)
		if (event.layerX >= 75 && event.layerY >= 75 && event.layerX <= 504 && event.layerY <= 504) {
			this.pickerX = event.layerX - 75;
			this.pickerY = event.layerY - 75;			
		} else if (event.layerX < 75 && event.layerY >= 75) {
			this.pickerX = 0;
			this.pickerY = event.layerY - 75;	
		} else if (event.layerX >= 75 && event.layerY < 75) {
			this.pickerX = event.layerX - 75;
			this.pickerY = 0;	
		} else {
			this.pickerX = 0;
			this.pickerY = 0;
		}

	}

	activeThumb(index, thumb) {
		this.activeIndex = index;

		if (this.thumbsData[index].type === 'img') {
			this.bigContentType = 'img';
			this.currentBigContent = this.thumbsData[index].bigContentUrl;
		}

		if (this.thumbsData[index].type === 'video') {
			this.bigContentType = 'video';
		}

		if (this.thumbsData[index].type === 'panorama') {
			this.bigContentType = 'panorama';
		}
	}
	// end thumbSlide




























	closeResult: string;
	open(content) {
		console.log(content)
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'effect-22'}).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
