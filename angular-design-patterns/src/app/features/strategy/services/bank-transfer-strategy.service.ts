import { PaymentStrategy } from '../models/payment-strategy.interface';

/**
 * Estratégia concreta para pagamento via transferência bancária
 */
export class BankTransferStrategy implements PaymentStrategy {
  private readonly bankCode: string;
  private readonly accountNumber: string;

  constructor(bankCode: string, accountNumber: string) {
    this.bankCode = bankCode;
    this.accountNumber = accountNumber;
  }

  public processPayment(amount: number): string {
    const maskedAccount = this.maskAccountNumber(this.accountNumber);
    return `🏦 Pagamento de R$ ${amount.toFixed(2)} processado via transferência bancária (Banco: ${this.bankCode}, Conta: ${maskedAccount})`;
  }

  public getStrategyName(): string {
    return 'Transferência Bancária';
  }

  public getDescription(): string {
    return 'Pagamento via transferência bancária tradicional com processamento em até 1 dia útil';
  }

  private maskAccountNumber(accountNumber: string): string {
    if (accountNumber.length < 4) return accountNumber;
    return '****' + accountNumber.slice(-4);
  }
}
