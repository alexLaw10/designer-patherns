import { Vehicle } from '../models/vehicle.interface';
import { Car } from '../models/car.model';
import { Motorcycle } from '../models/motorcycle.model';
import { Truck } from '../models/truck.model';

/**
 * Factory para criar veículos
 * Implementa o padrão Factory Method
 */
export class VehicleFactory {
  public static createVehicle(type: string, brand: string, model: string, year: number): Vehicle {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car(brand, model, year);
      case 'motorcycle':
        return new Motorcycle(brand, model, year);
      case 'truck':
        return new Truck(brand, model, year);
      default:
        throw new Error(`Tipo de veículo não suportado: ${type}`);
    }
  }

  public static getAvailableTypes(): string[] {
    return ['car', 'motorcycle', 'truck'];
  }

  public static getVehicleTypeDisplayName(type: string): string {
    const typeMap: { [key: string]: string } = {
      'car': 'Carro',
      'motorcycle': 'Moto',
      'truck': 'Caminhão'
    };
    return typeMap[type.toLowerCase()] || type;
  }
}
