import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class Start {
  changeForm: FormGroup;
  bat=50;
  bowl=50;
  field=50;
  constructor(public navCtrl: NavController, private navParams: NavParams,public formBuilder: FormBuilder,public alertCtrl:AlertController){
  //this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
    this.changeForm = this.formBuilder.group({
      bat:[''],
    bowl:[''],
    field:['']

    })
    
    }

   

  ngOnInit(){
  //this.tabBarElement.style.display = 'none';
    console.log(this.navCtrl)
      var receivedId = this.navParams.get('id');
      var items=JSON.parse(localStorage.getItem("information"))
      for(var i=0;i<items.length;i++){
        if(receivedId==items[i].id){
          break;
        }
      }
      this.bat=items[i].bat
      this.bowl=items[i].bowl
      this.field=items[i].field
  }
  ngOnPageWillLeave()
    {

        console.log("exit")

    }
  ngOnHide(){
    console.log("exit")
  }
  
  receivedId = this.navParams.get('id');
  
  change(){
    

    this.editConfirm()
  }
    editConfirm(){
        let confirm = this.alertCtrl.create({
        title: 'Edit Skills?',
        message: 'Do you agree to confirm these skills?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
               var items=JSON.parse(localStorage.getItem("information"))
              for(var i=0;i<items.length;i++){
                if(this.receivedId==items[i].id){
                  break;
                }
              }
              this.bat=items[i].bat
              this.bowl=items[i].bowl
              this.field=items[i].field
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              var value=this.changeForm.value;
              var items=JSON.parse(localStorage.getItem("information"))
              for(var i=0;i<items.length;i++){
                if(this.receivedId==items[i].id){
                  break;
                }
              }
              console.log(value.bat)
              items[i].bat=value.bat
              items[i].bowl=value.bowl
              items[i].field=value.field
              localStorage.setItem("information",JSON.stringify(items))
              this.navCtrl.pop()
            }
          }
        ]
      });
      confirm.present();
  }
  

}
