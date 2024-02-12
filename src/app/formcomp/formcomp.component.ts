import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements AfterViewInit {
  title = 'courier_form';
  name: string = '';
  mobile: string = '';
  pickupDateTime: string = '';
  address: string = '';
  termsAccepted: boolean = false;
  orderForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;
  names: string = "";
  formSubmitted: boolean = false;
  showForm = true;
  showFinalForm:boolean = true;
  numberOfItems:any;
  orderFormData: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      pickupDateTime: ['', Validators.required],
      address: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    });

    // Retrieve data from local storage
    const storedData = localStorage.getItem('orderFormData');
    if (storedData) {
      this.orderFormData = JSON.parse(storedData);
    }
  }

  handleGoBack(): void {
    this.showFinalForm = false;
    this.showForm  = false;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.orderForm.invalid) {
        return;
    }
    let storedData = JSON.parse(localStorage.getItem('orderFormData') || '[]');
    if (!Array.isArray(storedData)) {
        storedData = [];
    }
    storedData.push(this.orderForm.value);
    localStorage.setItem('orderFormData', JSON.stringify(storedData));
    this.formSubmitted = true;
    this.names = this.orderForm.value.name;
    this.orderFormData = storedData;
}
deleteItem(index: number) {
  if (confirm("Are you sure you want to delete this item?")) {
    this.orderFormData.splice(index, 1); 
    localStorage.setItem('orderFormData', JSON.stringify(this.orderFormData)); 
    this.numberOfItems = this.orderFormData.length; 
  }
}

  @ViewChild('dataTable', {static: false}) dataTable!: ElementRef;
  ngAfterViewInit() {
    const rowCount = this.dataTable.nativeElement.rows.length - 1; // Subtract 1 to exclude header row
    this.numberOfItems = rowCount;
  }
}
