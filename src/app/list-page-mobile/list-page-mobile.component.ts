import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-page-mobile',
  templateUrl: './list-page-mobile.component.html',
  styleUrls: ['../main.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ListPageMobileComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true };
  productList = [
  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},  	{
  		imgUrl: 'https://i.ibb.co/nR9xNWq/image.png',
  		stopper1: 'https://i.ibb.co/2nHHph0/Stopper-Left.png',
  		stopper2: 'https://i.ibb.co/jkCtmWR/Stopper-Right.png',
  		stopper3: 'https://i.ibb.co/g9vyHZb/img.png',
  		title: 'Sumo BBQ - Buffet Nướng Lẩu Thả Ga Menu Premium',
  		newPrice: '300.000đ',
  		oldPrice: '600.000đ',
  		discount: '-50%',
  		installment: '0%',
  		back: '1.500.000đ'
  	},
  ];

  isOpenModal: Boolean

  constructor() { }

  ngOnInit() {
  }

  openModalTools() {
    this.isOpenModal = true;
    
  }

  closeModal() {
    this.isOpenModal = false;
  }

}
