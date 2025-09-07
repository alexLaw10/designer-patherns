/**
 * Interface que define a estrutura de um item do menu
 */
export interface MenuItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly route: string;
  readonly isImplemented: boolean;
}
