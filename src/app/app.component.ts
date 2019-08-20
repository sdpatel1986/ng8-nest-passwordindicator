import { Component, OnInit } from '@angular/core';
import { PasswordService } from './services/password.service';
import { Contents } from './models/textContent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng7-passwordindicator-client';

  textContent: Contents;
  password: string;
  watchPassword: boolean;
  progress: any[];
  lowerCase: boolean;
  upperCase: boolean;
  numeric: boolean;
  symbols: boolean;
  length: boolean;
  passwordLength: number;
  reviews: string[];
  count: number;
  review: string;

  constructor(private passwordService: PasswordService) {

    this.textContent = {
      headerText: "Password Strength Indicator/ Checker Tool",
      characterInfoText: "Characters Entered : ",
      conditionText1: "Upper Case ",
      conditionText2: "Lower Case ",
      conditionText3: "Numbers ",
      conditionText4: "Symbols ",
      statusText1: "Weak",
      statusText2: "Medium",
      statusText3: "Strong",
      footerLeftBoxHeaderText: "Review",
      footerRightBoxHeaderText: "Requirements :",
      footerRightBoxInfoText1: "Should contain at least 6 characters and maximum 24 characters is allowed.",
      footerRightBoxInfoText2: "Should contain at least 3 features from the below points :",
      footerRightBoxInfoText3: "Tips for a Strong Password for example: H3lloW0#ld",
      footerRightBoxConditionText1: "1 Lowercase Character",
      footerRightBoxConditionText2: "1 Uppercase Character",
      footerRightBoxConditionText3: "1 Number",
      footerRightBoxConditionText4: "1 Special Character like @#!"
    };

    this.progress = [];
    this.count = 0;
    this.lowerCase = false;
    this.upperCase = false;
    this.numeric = false;
    this.symbols = false;
    this.length = false;
    this.passwordLength = 0;
    this.watchPassword = false;
    
    this.reviews = [
      "",
      "Oh dear, using that password is like leaving your front door wide open. Your password is very weak because it contains a dictionary word.",
      "Oh dear, using that password is like leaving your front door wide open. Your password is very weak because it contains a dictionary word.",
      "Oh dear, using that password is like leaving your front door wide open. Your password is very weak because it contains a dictionary word.",
      "Oops, using that password is like leaving your key in the lock. Your password is weak because it contains 2 dictionary words.",
      "Oops, using that password is like leaving your key in the lock. Your password is weak because it contains 2 dictionary words.",
      "Hmm, using that password is like locking your front door, but leaving the key under the mat. Your password is of medium strength because it contains 2 dictionary words and a combination of characters that are close together on the keyboard.",
      "Hmm, using that password is like locking your front door, but leaving the key under the mat. Your password is of medium strength because it contains 2 dictionary words and a combination of characters that are close together on the keyboard.",
      "Hmm, using that password is like locking your front door, but leaving the key under the mat. Your password is of medium strength because it contains 2 dictionary words and a combination of characters that are close together on the keyboard.",
      "Good, using that password is like locking your front door and keeping the key in a safety deposit box.",
      "Good, using that password is like locking your front door and keeping the key in a safety deposit box.",
      "Fantastic, using that password makes you as secure as Fort Knox.",
      "Fantastic, using that password makes you as secure as Fort Knox.",
    ];

    this.review = this.reviews[this.count];
  }

  ngOnInit() {

    for (let i = 0; i < 12; i++) {
      this.progress.push(false);
    }

  }

  passwordType() {

    this.watchPassword = !this.watchPassword;

    let x = <HTMLInputElement>document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

  }

  // REST API Call to get response back from backend
  checkPasswordStrength() {

    this.passwordService.checkPasswordStrength(this.password).subscribe((response: any) =>{

      this.upperCase = response.upperCase;
      this.lowerCase = response.lowerCase;
      this.numeric = response.numeric;
      this.symbols = response.symbols;
      this.length = response.length;
      this.progress = response.progress;
      this.count = response.count;
      this.passwordLength = response.passLength;

      this.review = this.reviews[this.count];

    });

  }
}
