import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Edit} from '../schedule/schedule'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	
constructor(public navCtrl: NavController) {
 //this.items = ['item1','item2','item3']
  

  }

  goToSchedule(){
  this.navCtrl.push(Edit)
  }

  fetchMatches(){
  	var	matchItems=JSON.parse(localStorage.getItem("scheduleInfo"))
	if (matchItems==null){
	return 0
	}
	else{
  		var matches=[]
	  	for(var i=1;i<matchItems.length;i++){
	  		//var tempmatch1=matchItems[i];
	  		for(var j=i+1;j<matchItems.length;j++){
	  			//var tempmatch2=matchItems[j];
	  			if (matchItems[i].date>matchItems[j].date){
	  				var temp=matchItems[j]
	  				matchItems[j]=matchItems[i]
	  				matchItems[i]=temp
	  			}
	  			
	  		}
	  	matches.push(matchItems[i])
	}
	}
	return matches
  }
}

//show booked matches