import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl } from '@angular/forms';
import { PromocaoService } from 'src/app/services/promocao.service';
import { Promocao } from 'src/app/services/Promocao';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home-console',
  templateUrl: './home-console.component.html',
  styleUrls: ['./home-console.component.css']
})
export class HomeConsoleComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'descricao', 'dataInicial', 'dataFinal'];
  dataSource = new MatTableDataSource<Promocao>();

  form: FormGroup;
  subscription: Subscription;

  constructor(
    private service: PromocaoService,
    private snackBar: MatSnackBar) {
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.form = new FormGroup({
      titulo: new FormControl(''),
      descricao: new FormControl(''),
      dataInicial: new FormControl(''),
      dataFinal: new FormControl('')
    });

    this.refreshTable();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    this.service.add(this.form.value);
    this.refreshTable();
    this.openSnackBar('Promoção cadastrada', 'Fechar');
    this.form.reset();
  }

  refreshTable() {
    this.dataSource.data = this.service.getAll() || [];
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
