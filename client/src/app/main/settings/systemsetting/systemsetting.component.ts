import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-systemsetting',
  templateUrl: './systemsetting.component.html',
  styleUrls: ['./systemsetting.component.scss']
})
export class SystemsettingComponent implements OnInit {
  systemsetting:FormGroup;
  PaymentGateway:FormGroup;
  smtpconfi:FormGroup;
  smsconfi:FormGroup;
  constructor(private fb:FormBuilder) {
    this.systemsetting = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      companyname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      developby: new FormControl('', Validators.required),
      footer: new FormControl('', Validators.required)
     
    }),
    this.PaymentGateway=new FormGroup({
      stripe: new FormControl('', Validators.required),
      stripesecret: new FormControl('', Validators.required),
    }),
    this.smtpconfi=new FormGroup({
      host: new FormControl('', Validators.required),
      port: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      encryption: new FormControl('', Validators.required),
    }),
    this.smsconfi=new FormGroup({
      Twiliosid: new FormControl('', Validators.required),
      twiliotoken: new FormControl('', Validators.required),
      twiliofrom: new FormControl('', Validators.required),
    })
}

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.systemsetting);
  }
  paymentSubmit(){
    console.log(this.PaymentGateway);
  }
  SmtpSubmit(){
    console.log(this.smtpconfi);
  }
  smsSubmit(){
    console.log(this.smsconfi);
  }
}
