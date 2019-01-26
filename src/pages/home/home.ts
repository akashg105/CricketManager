import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	addForm: FormGroup;
  name="";
  number=null;
	bat=50;
	bowl=50;
	field=50;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,public alertCtrl:AlertController) {
  	this.addForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    number: ['', Validators.compose([Validators.maxLength(30),	Validators.required])],
    hand: ['',Validators.required],
    bat:[''],
    bowl:[''],
    field:['']
});
  }
  add(){

  	console.log("in add")
  	var value=this.addForm.value
  	var obj=[{id:100}]
  	console.log(value)
  	if(localStorage.getItem("information")==null){
      obj.push(value)
  		obj[1].id=101
      localStorage.setItem("information",JSON.stringify(obj))
  	}
  	else{
  		var current_info=JSON.parse(localStorage.getItem("information"))
      var temp_id=current_info.slice(-1)[0].id
      var new_id=temp_id+1
  		current_info.push(value)
      current_info.slice(-1)[0].id=new_id
  		localStorage.setItem("information",JSON.stringify(current_info))
  	}
  	this.addAlert()
  	//this.addForm.reset();

  	this.bat=50;
  	this.bowl=50;
  	this.field=50;
    this.name="";
    this.number=null
  }
 addAlert(){
	  	let alert=this.alertCtrl.create({
	  	title:'Congratulations',
	  	subTitle:'The new player is added',
	  	buttons:['Okay']
	  	})
	  	alert.present();
  }
}
