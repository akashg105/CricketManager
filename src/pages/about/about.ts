import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Start} from '../start/start'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	
  	constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public alertCtrl:AlertController) {
  	
  }
  
  

  fetchNames(){
  var	lsItems=JSON.parse(localStorage.getItem("information"))
  if (lsItems==null){
  console.log("empty")
  return 0

  }
	else{
  		var items=[]
	  	for(var i=1;i<lsItems.length;i++){
	  	items.push(lsItems[i])
	}
	}
	return items
  }

    deleteConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Remove Player '+item.name+' ?',
      message: 'Do you agree to remove this team member ?' ,
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');

            var items=JSON.parse(localStorage.getItem("information"))
      		for(var i=0;i<items.length;i++){
	        	if(item.id==items[i].id){
	          		break;
	        	}
      		}
      		items.splice(i,1)
      		localStorage.setItem("information",JSON.stringify(items))
          }
        }
      ]
    });
    confirm.present();
  }

  itemActionSheet(item) {
  	//console.log(item.id)
  	let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your player',
      buttons: [
        {
          text: 'Remove',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.deleteConfirm(item)
          }
        },{
          text: 'Edit',
          handler: () => {
          	this.navCtrl.push(Start, item)
          	//document.getElementById("tabs").disabled = false ;
            console.log('Archive clicked');

          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
    //console.log("Selected Item", item);
  }

  
}
