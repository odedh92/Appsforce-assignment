import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-pop-up',
  templateUrl: './confirm-delete-pop-up.component.html',
  styleUrls: ['./confirm-delete-pop-up.component.css']
})
export class ConfirmDeletePopUpComponent implements OnInit {

  confirmDelete = false;
  constructor(private dialogRef: MatDialogRef<boolean>) {

   }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }
  confirm(){
    this.confirmDelete = true;
    this.dialogRef.close({ data: this.confirmDelete });
  }
}
