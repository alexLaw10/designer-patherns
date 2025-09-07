import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsSubject } from './services/news-subject.service';
import { NewsObserver } from './services/news-observer.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit, OnDestroy {
  private readonly newsSubject = new NewsSubject();
  private readonly subscription: Subscription = new Subscription();
  
  public news: string[] = [];
  public observers: NewsObserver[] = [];
  public newNews: string = '';

  public ngOnInit(): void {
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

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public addNews(): void {
    if (this.newNews.trim()) {
      this.newsSubject.notifyObservers(this.newNews);
      this.newNews = '';
    }
  }

  public addObserver(): void {
    const observerName = `Observer ${this.observers.length + 1}`;
    const newObserver = new NewsObserver(observerName);
    this.observers.push(newObserver);
    this.newsSubject.addObserver(newObserver);
  }

  public removeObserver(index: number): void {
    const observer = this.observers[index];
    this.newsSubject.removeObserver(observer);
    this.observers.splice(index, 1);
  }

  public getObserverRole(index: number): string {
    const roles = ['Editor', 'Repórter', 'Jornalista', 'Colunista', 'Editor Chefe'];
    return roles[index % roles.length];
  }

  public getCurrentTime(): string {
    return new Date().toLocaleTimeString('pt-BR');
  }
}
