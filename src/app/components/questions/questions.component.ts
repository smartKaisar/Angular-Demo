import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

import { Question } from '../../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestion().subscribe(questions => {
      console.log(questions)
      this.questions = questions.content;
    });
  }

  deleteQuestion(question: Question) {
    // Remove From UI
    this.questions = this.questions.filter(t => t.id !== question.id);
    // Remove from server
    this.questionService.deleteQuestion(question).subscribe();
  }

  addQuestion(question: Question) {
    this.questionService.addQuestion(question).subscribe(question => {
      this.questions.push(question);
    });
  }

}
