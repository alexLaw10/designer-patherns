import { Subject, Observable } from 'rxjs';
import { Observer } from '../models/observer.interface';
import { SubjectInterface } from '../models/subject.interface';

/**
 * Implementação do Subject para notícias
 * Gerencia uma lista de observadores e notifica mudanças
 */
export class NewsSubject implements SubjectInterface {
  private readonly observers: Observer[] = [];
  private readonly subject = new Subject<any>();

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(data: any): void {
    this.observers.forEach(observer => observer.update(data));
    this.subject.next(data);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
