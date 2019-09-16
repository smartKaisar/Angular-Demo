import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuestionService } from '../../services/question.service';

import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  @Input() question: Question;
  @Output() deleteQuestion: EventEmitter<Question> = new EventEmitter();

  constructor(private todoService:QuestionService) { }

  ngOnInit() {
  }

  onDelete(question) {
    this.deleteQuestion.emit(question);
  }
  onClick(questionId){
    console.log(questionId);
  }

}