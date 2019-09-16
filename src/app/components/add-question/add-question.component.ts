import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() addQuestion: EventEmitter<any> = new EventEmitter();

  title: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const question = {
      title: this.title,
      description: this.description
    }

    this.addQuestion.emit(question);
    this.title = null;
    this.description = null;
  }

}
