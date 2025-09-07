import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

// Interface para o Observer
interface Observer {
  update(data: any): void;
}

// Interface para o Subject
interface SubjectInterface {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(data: any): void;
}

// Implementação do Subject
class NewsSubject implements SubjectInterface {
  private observers: Observer[] = [];
  private subject = new Subject<any>();

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(data: any): void {
    this.observers.forEach(observer => observer.update(data));
    this.subject.next(data);
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}

// Implementação do Observer
class NewsObserver implements Observer {
  constructor(private name: string) {}

  update(data: any): void {
    console.log(`${this.name} recebeu: ${data}`);
  }
}

@Component({
  selector: 'app-observer-pattern',
  templateUrl: './observer-pattern.component.html',
  styleUrls: ['./observer-pattern.component.css']
})
export class ObserverPatternComponent implements OnInit, OnDestroy {
  private newsSubject = new NewsSubject();
  private subscription: Subscription = new Subscription();
  
  news: string[] = [];
  observers: NewsObserver[] = [];
  newNews: string = '';

  ngOnInit(): void {
    // Criar alguns observadores
    this.observers = [
      new NewsObserver('Jornal A'),
      new NewsObserver('Jornal B'),
      new NewsObserver('Rádio C')
    ];

    // Adicionar observadores ao subject
    this.observers.forEach(observer => {
      this.newsSubject.addObserver(observer);
    });

    // Subscrever ao Observable
    this.subscription.add(
      this.newsSubject.getObservable().subscribe(news => {
        this.news.unshift(news);
        if (this.news.length > 10) {
          this.news.pop();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addNews(): void {
    if (this.newNews.trim()) {
      this.newsSubject.notifyObservers(this.newNews);
      this.newNews = '';
    }
  }

  addObserver(): void {
    const observerName = `Observer ${this.observers.length + 1}`;
    const newObserver = new NewsObserver(observerName);
    this.observers.push(newObserver);
    this.newsSubject.addObserver(newObserver);
  }

  removeObserver(index: number): void {
    const observer = this.observers[index];
    this.newsSubject.removeObserver(observer);
    this.observers.splice(index, 1);
  }
}
