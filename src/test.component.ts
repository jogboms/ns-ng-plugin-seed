import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "test",
  styleUrls: ['./test.css'],
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit, OnDestroy {

  constructor(){}

  ngOnInit() { }

  ngOnDestroy() { }
}

