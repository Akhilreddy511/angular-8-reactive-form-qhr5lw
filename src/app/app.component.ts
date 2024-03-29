import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isUpdated: boolean = false;
  selectedIndex: any;
  export(){
    const ids = this.formData.reduce((acc, item) => {
      if (item.isChecked === true) {
        acc.push(item.id);
      }
      return acc;
    }, []);

    console.log('ids',ids)
    
  }

  formData = [
    {
      id:1,
      fullName: 'Akhil',
      email: 'akhil@123.com',
      message: 'good morning',
      phone: '9000143994',
      isChecked:true
    },
    {
      id:2,
      fullName: 'vinay',
      email: 'akhil@123.com',
      message: 'good morning',
      phone: '9000',
      isChecked:true
    },
    {
      id:3,
      fullName: 'kalyan',
      email: 'akhil@123.com',
      message: 'good morning',
      phone: '78999',
      isChecked:false
    },
  ];

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: [''],
      phone: [''],
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value);
    if (this.isUpdated) {
      this.formData[this.selectedIndex] = this.contactForm.value;
    } else {
      this.formData.push(this.contactForm.value);
    }
    this.isUpdated = false;
    this.contactForm.reset();
  }
  delete(index) {
    this.formData.splice(index, 1);
  }
  update(data, index) {
    this.contactForm.patchValue(data);
    this.selectedIndex = index;
    this.isUpdated = true;
  }
}
