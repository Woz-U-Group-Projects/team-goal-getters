import { Component, OnInit } from "@angular/core";
import { FruitService } from "./fruit.service";
import { Fruit } from "./fruit";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  fruits: Fruit[];
  newFruit: Fruit = new Fruit();

  getFruit() {
    this.fruitService.getFruit().subscribe(f => (this.fruits = f));
  }

  addFruit() {
    this.fruitService.addFruit(this.newFruit).subscribe(f => {
      this.newFruit = new Fruit();
      this.getFruit();
    });
  }

  constructor(private fruitService: FruitService) {}
  ngOnInit() {
    this.getFruit();
  }
}
