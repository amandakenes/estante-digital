import { Component } from '@angular/core';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {
  livro1 = {
    name: 'Harry Potter e o Cálice de Fogo',
    bookCover: './assets/livros/livro1.jpg',
    date: '8 de julho de 2000',
    writer: 'J.K Rowling',
    lang: 'Inglês',
    genre: 'Romance, fantasia',
    pages: 480,
    editor: 'Rocco'
  };
  livro2 = {
    name: 'Orgulho e Preconceito',
    bookCover: './assets/livros/livro2.jpg',
    date: '28 de janeiro de 1813',
    writer: 'Jane Austen',
    lang: 'Inglês',
    genre: 'Romance, ficção',
    pages: 424,
    editor: 'Martin Claret'
  };
  livro3 = {
    name: 'Anne de Green Gables',
    bookCover: './assets/livros/livro3.jpg',
    date: 'Junho de 1908',
    writer: 'L.M MontGomery',
    lang: 'Inglês',
    genre: 'Romance, ficção',
    pages: 320,
    editor: 'Autêntica'
  };
  livro4 = {
    name: '1984',
    bookCover: './assets/livros/livro4.jpg',
    date: '9 de junho de 1949',
    writer: 'George Orwell',
    lang: 'Inglês',
    genre: 'Distopia, Política, Ficção científica',
    pages: 416,
    editor: 'Companhia das Letras'
  };
  livro5 = {
    name: 'Os Sete Maridos de Evelyn Hugo',
    bookCover: './assets/livros/livro5.jpg',
    date: '13 de junho de 2017',
    writer: 'Taylor Jenkins Reid',
    lang: 'Inglês',
    genre: 'Romance, ficção',
    pages: 360,
    editor: 'Paralela'
  };
}
