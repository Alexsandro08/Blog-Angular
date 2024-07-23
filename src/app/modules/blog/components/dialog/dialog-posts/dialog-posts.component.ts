import { Posts } from './../../../interface/Posts.interface';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-posts',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-posts.component.html',
  styleUrl: './dialog-posts.component.scss'
})
export class DialogPostsComponent implements OnInit{
  constructor( 
    private _dialogRef: MatDialogRef<DialogPostsComponent> , 
    @Inject(MAT_DIALOG_DATA) private _data: Posts ){
   
  }
  public getData = signal<Posts | null>(null)

  ngOnInit(): void {
    this.getData.set(this._data)
  }

  public closeModal() {
    return this._dialogRef.close()
  }
}
