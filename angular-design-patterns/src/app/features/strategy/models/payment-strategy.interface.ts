/**
 * Interface que define o contrato para estratégias de pagamento
 */
export interface PaymentStrategy {
  processPayment(amount: number): string;
  getStrategyName(): string;
  getDescription(): string;
}
