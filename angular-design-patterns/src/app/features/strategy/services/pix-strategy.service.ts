import { PaymentStrategy } from '../models/payment-strategy.interface';

/**
 * Estratégia concreta para pagamento via PIX
 */
export class PixStrategy implements PaymentStrategy {
  private readonly pixKey: string;

  constructor(pixKey: string) {
    this.pixKey = pixKey;
  }

  public processPayment(amount: number): string {
    const maskedKey = this.maskPixKey(this.pixKey);
    return `📱 Pagamento de R$ ${amount.toFixed(2)} processado via PIX (${maskedKey})`;
  }

  public getStrategyName(): string {
    return 'PIX';
  }

  public getDescription(): string {
    return 'Pagamento instantâneo via PIX com transferência imediata';
  }

  private maskPixKey(pixKey: string): string {
    if (pixKey.length < 8) return pixKey;
    return pixKey.slice(0, 4) + '****' + pixKey.slice(-4);
  }
}
