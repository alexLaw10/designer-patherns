import { Observer } from './observer.interface';

/**
 * Interface que define o contrato para subjects (observáveis)
 */
export interface SubjectInterface {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(data: any): void;
}
