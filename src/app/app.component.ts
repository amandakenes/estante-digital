import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopoComponent} from './topo/topo.component';
import {LivrosComponent} from './livros/livros.component';
import {RodapeComponent} from './rodape/rodape.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopoComponent, LivrosComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Estante de Livros Digital';
}
