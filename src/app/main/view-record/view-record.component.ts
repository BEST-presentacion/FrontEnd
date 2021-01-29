import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewRecordService } from "../../services/view-record.service";
import { Patient } from "../../models/Patient";
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewIndividualRecordDialogComponent } from './view-individual-record-dialog/view-individual-record-dialog.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}



@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss']
})
export class ViewRecordComponent implements OnInit {

  displayedColumns: string[] = ['patientId', 'firstName', 'email', 'contactNumber', 'birthdate', 'gender','address', 'status', 'actions'];
  dataSource: MatTableDataSource<Patient>;

  activatedRecords;
  deactivatedRecords;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  isChecked = true;
  isLoading = true;
  private patients: Patient[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private viewRecordService: ViewRecordService, public dialog: MatDialog) {



  }
  ngOnInit(): void {
    this.viewRecordService.showActivatedPatientRecords().subscribe(p => {


      this.activatedRecords = p.map(p => 
      {
        p['fullName'] = `${p.firstName} ${p.middleName} ${p.lastName}`;
        p['date'] = new Date(p['date']).toLocaleDateString('en-US');
        return p;
      })


      this.dataSource = new MatTableDataSource(this.activatedRecords);


      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;

    }
    )
    this.viewRecordService.showDeactivatedPatientRecords().subscribe(p => {
      this.deactivatedRecords = p.map(p => {
        p['fullName'] = `${p.firstName} ${p.middleName} ${p.lastName}`;
        p['date'] = new Date(p['date']).toLocaleDateString('en-US');
        return p;
      })
    }
    )
  
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleSourceData() {
    this.clearDataSource();
    if (!this.isChecked) {
      this.dataSource = new MatTableDataSource(this.deactivatedRecords);
    }
    else {
      this.dataSource = new MatTableDataSource(this.activatedRecords);
    }
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  clearDataSource(){
    this.dataSource=null;
  }
  openDialog(row) {
    const dialogRef = this.dialog.open(ViewIndividualRecordDialogComponent,{data:row});

    dialogRef.afterClosed().subscribe(result => {
     this.ngOnInit();
    })
  }
}