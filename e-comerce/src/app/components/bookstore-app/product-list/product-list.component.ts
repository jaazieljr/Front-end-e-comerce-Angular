import { Component, OnInit } from '@angular/core';
import { Book } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  book: Book[] = [];
  constructor() { }

  ngOnInit(): void {
    this.book = [
      {
        id: 1,
        name: 'Harry Potter - E a Pedra Filosofal',
        price: 23.59,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/1.jpg'
      },
      {
        id: 2,
        name: 'Harry Potter - E a Câmara Secreta',
        price: 24.59,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/2.jpg'
      },
      {
        id: 3,
        name: 'Harry Potter - E o Prisioneiro de Askabam',
        price: 26.59,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/3.jpg'
      },
      {
        id: 4,
        name: 'Harry Potter - E o Cálica de Fogo',
        price: 23.59,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/4.jpg'
      },
      {
        id: 5,
        name: 'Harry Potter - E a Ordem da Fênix',
        price: 27.59,
        quantity: 10,
        category: 'Fantasia',
        img:'./assets/img/5.jpg'
      },
      {
        id: 6,
        name: 'Harry Potter - E o Enigma do Príncipe',
        price: 30.59,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/6.jpg'
      },
      {
        id: 7,
        name: 'Harry Potter - E as Reliquias da Morte',
        price: 35.59,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/7.jpg'
      },
      {
        id: 8,
        name: 'Percy Jackson e os Olimpianos - Ladrão de Raios',
        price: 22.59,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/percy/1.jpg'
      },
      {
        id: 9,
        name: 'Percy Jackson e os Olimpianos - Mar de Monstros',
        price: 19.01,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/percy/2.jpg'
      },
      {
        id: 10,
        name: 'Percy Jackson e os Olimpianos - Maldição do Titã',
        price: 45.15,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/percy/3.jpg'
      },
      {
        id: 11,
        name: 'Percy Jackson e os Olimpianos - Batalha do Labirinto',
        price: 42.31,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/percy/4.jpg'
      },
      {
        id: 12,
        name: 'Percy Jackson e os Olimpianos - Último Olimpiano',
        price: 50.13,
        quantity: 10,
        category: 'Fantasia',
        img: './assets/img/percy/5.jpg'
      }
    ]


  }

}
