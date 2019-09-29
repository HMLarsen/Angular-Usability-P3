import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PromotionElement {
  titulo: string;
  descricao: string;
  dataInicial: string;
  dataFinal: string;
}

const ELEMENT_DATA: PromotionElement[] = [
  { titulo: 'Picolés por R$ 2,00', descricao: 'Vários picolés deliciosos com sabores diferenciados', dataInicial: '10/02/2019', dataFinal: '10/02/2019' },
  { titulo: 'Batata frita na faixa', descricao: 'Na compra de um dogão a batata fica por nossa conta', dataInicial: '18/08/2019', dataFinal: '' },
  { titulo: 'Pão francês 60% OFF', descricao: 'Pão francês a vencer', dataInicial: '21/09/2019', dataFinal: '' }
];

@Component({
  selector: 'app-home-console',
  templateUrl: './home-console.component.html',
  styleUrls: ['./home-console.component.css']
})
export class HomeConsoleComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'descricao', 'dataInicial', 'dataFinal'];
  dataSource = new MatTableDataSource<PromotionElement>(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
