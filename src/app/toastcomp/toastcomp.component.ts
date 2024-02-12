import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toastcomp',
  templateUrl: './toastcomp.component.html',
  styleUrls: ['./toastcomp.component.css']
})
export class ToastcompComponent{
  showCard:boolean = true
  @Input() header: string ='';
  @Input() message: string = '';
  @Input()form1: boolean = true;
  @Output() goBackEvent = new EventEmitter<void>();

  constructor(private router: Router) {}

  goBack(): void {
    this.form1 = false
     this.goBackEvent.emit();
    this.showCard = false
    this.router.navigateByUrl('/form');
  }
  
}
