import { PaymentStrategy } from './payment-strategy.interface';

/**
 * Interface que define o contrato para o contexto de pagamento
 */
export interface PaymentContext {
  setStrategy(strategy: PaymentStrategy): void;
  processPayment(amount: number): string;
  getCurrentStrategy(): PaymentStrategy | null;
}
