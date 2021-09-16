import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;


  ngOnInit() {
    this.projectForm = new FormGroup({
      projectTitle: new FormControl(null, [Validators.required]),
      email: new FormControl(),
      projectStatus: new FormControl("1")
    })
  }

  saveForm() {
    console.log(this.projectForm.value);
  }
}
