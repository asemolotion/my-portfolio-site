import { Component, OnInit } from '@angular/core';

const MY_SKILLS = {
  // プログラミング言語
  programmingLanguages : [
    'python', 'javascript', 'typescript', 'google app script'
  ],
  // マークアップ言語
  markupLanguages : [
    'html5', 'css3', 'bootstrap4'
  ],
  // フロントエンド
  frontendSkills : [
    'jquery', 'angular','ionic', 'vue.js'
  ],
  // pythonライブラリ
  python_skills : {
    // web application
    webApps : [
      'django', 'flask', 'bottle'
    ],
    scraping : [
      'scrapy', 'beautifulsoup4', 'selenium'
    ],
    stackQueue : [
      'celery'
    ],
    // 機械学習
    machineLearningPackages : [
      'scikit-learn', 'mecab', 'gensim', 'fasttext',
    ],         
  },
  // DB
  DB : [
    'postgresql', 'mongodb', 
    'elasticsearch', 'redis'
  ],
  // クラウドサービス
  cloudService : [
    'firebase', 
    'heroku', 
    'scrapinghub', 
    'aws-S3',
    'colaboratory'
  ],


}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  programmingLanguages = MY_SKILLS.programmingLanguages;

  markupLanguages = MY_SKILLS.markupLanguages;

  frontendSkills = MY_SKILLS.frontendSkills;

  pythonSkills = MY_SKILLS.python_skills;

  DB = MY_SKILLS.DB;

  cloudService = MY_SKILLS.cloudService;

  constructor() { }

  ngOnInit() {
  }

}