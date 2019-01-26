import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
/**
 * Generated class for the Edit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit',
  templateUrl: 'schedule.html',
})
export class Edit {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  this.checkedItems = new Array(3);
  }

  months=['January','Feb','mar','Apr','May','jun','jul'];
	
	myOpponent: string;
	myDate: string = new Date().toISOString().split('T')[0];
  //toDateString();
  //toISOString().split('T')[0];
	checkedItems:boolean[];
	myVenue: string;
	items = ['item1','item2','item3']
  
  fetchNames(){
  var lsItems=JSON.parse(localStorage.getItem("information"))
	if (lsItems!=null){
  		var items=[]
	  	for(var i=1;i<lsItems.length;i++){
	  	items.push(lsItems[i])
	}
	}
	//this.checkedItems = new Array(items.length);
	return items
  }
  schedule(){
  	if (this.myOpponent==null || this.myVenue==null){
  		this.addEmptyAlert()
  		return;
  	}
  	var obj=[{id:1000,date:"",opponent:"",venue:""}];
  	//obj=[];
  	var schdValue={
  		id:1001,
      	date: this.myDate,
      	opponent: this.myOpponent,
      	venue: this.myVenue
      }
  	if(localStorage.getItem("scheduleInfo")==null){
      
      	obj.push(schdValue)
  		//obj[1].id=1001
    	localStorage.setItem("scheduleInfo",JSON.stringify(obj))
  	}
  	else{
  		var current_info=JSON.parse(localStorage.getItem("scheduleInfo"))
  		var flag=0
  		for(var i=0;i<current_info.length;i++){
  			if(this.myDate==current_info[i].date){
  				flag=1;
  			}
  		}
  		if (flag==1){
  			this.SameDateAlert()
  			return;
  		}
      	var temp_id=current_info.slice(-1)[0].id
      	var new_id=temp_id+1
      	schdValue.id=new_id
  	  	current_info.push(schdValue)
      	
  		localStorage.setItem("scheduleInfo",JSON.stringify(current_info))
  	}
  
  this.addMatchAlert()
  this.navCtrl.pop()
  }
  addMatchAlert(){
	  	let alert=this.alertCtrl.create({
	  	title:'Scheduled',
	  	subTitle:'The match has been scheduled',
	  	buttons:['Okay']
	  	})
	  	alert.present();
  }
  addEmptyAlert(){
  		let alert=this.alertCtrl.create({
	  	title:'Error',
	  	subTitle:'Please enter complete details ',
	  	buttons:['Okay']
	  	})
	  	alert.present();
  }
  SameDateAlert(){
  		let alert=this.alertCtrl.create({
	  	title:'Error',
	  	subTitle:'Please change the match date. A match is already booked on this date ',
	  	buttons:['Okay']
	  	})
	  	alert.present();
  }
}
