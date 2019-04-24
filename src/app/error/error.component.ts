import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
 errMsg: string
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.errMsg = this.activatedRoute.snapshot.data['message'];
    this.activatedRoute.data
    .subscribe(
      (data: Data) => {
        this.errMsg = data['message'];
      } 
    )
  }

}