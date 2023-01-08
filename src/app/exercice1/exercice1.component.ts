import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component {
  title = "exercice1"
  nom = ""
  lienImage: string = "https://www.hangoverweekends.co.uk/uploads/images/caipirinha-cocktail.jpg"

  public sauvegarder() {

    console.log("Sauvgarder");

  }
}
