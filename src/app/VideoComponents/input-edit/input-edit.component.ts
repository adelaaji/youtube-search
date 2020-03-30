import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-edit",
  templateUrl: "./input-edit.component.html",
  styleUrls: ["./input-edit.component.scss"]
})
export class InputEditComponent implements OnInit {
  @Input() data: string;
  @Output() focusOut: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;
  constructor() {}

  ngOnInit() {}

  onFocusOut() {
    this.focusOut.emit(this.data);
  }
}
