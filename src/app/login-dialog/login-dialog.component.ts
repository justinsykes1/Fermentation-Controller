import { MatDialogRef, MatInputModule, MatSelectModule } from '@angular/material';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParticleService } from '../services/particle.service';
import {FirebaseService} from '../services/firebase.service';
@Component({
    selector: 'login-dialog',
    templateUrl: './login-dialog.component.html',
    styles: [`
        .head {
      background-color : #ffc4c4;
        }`
    ]
})
export class LoginDialogComponent implements OnInit{
    public devices: string[];
    selectedDevice: string;
    loginSuccess: boolean = false;

    constructor(private fbService : FirebaseService,private particleService: ParticleService,public dialogRef: MatDialogRef<LoginDialogComponent>) {}
  
    login(form){
        let username = form.username;
        username = username.trim();
        let password = form.password;
        this.particleService.Login(username,password)
            .subscribe(
            res =>{
                console.log("particle login success: ",res);
                //this.selectedDevice = localStorage.getItem('Device');
                this.dialogRef.close();
            },
            err => {
                console.log('login failed',err);
                alert('Login Failed: '+err);
                }
            );
            
    }
    
   ngOnInit() {
      /* let deviceCheck = localStorage.getItem('Device');
       if (deviceCheck === null){
         this.selectedDevice = "Click to Select Device";
       }
        else
        this.selectedDevice = localStorage.getItem('Device');
       */ 
            
    }
/*
    onChange(value) { 
        console.log('devisce change');
        this.particleService.NewDevice(value);
        this.dialogRef.close();
    }
    
 */   
  }
 