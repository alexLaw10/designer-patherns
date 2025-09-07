import { Component } from '@angular/core';
import { Vehicle } from './models/vehicle.interface';
import { VehicleFactory } from './services/vehicle-factory.service';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {
  public vehicleType: string = 'car';
  public brand: string = '';
  public model: string = '';
  public year: number = new Date().getFullYear();
  public readonly currentYear: number = new Date().getFullYear();
  
  public createdVehicles: Vehicle[] = [];
  public selectedVehicle: Vehicle | null = null;
  public actionLog: string[] = [];

  public readonly availableTypes = VehicleFactory.getAvailableTypes();

  public createVehicle(): void {
    try {
      if (!this.brand.trim() || !this.model.trim()) {
        this.addToLog('❌ Por favor, preencha marca e modelo');
        return;
      }

      const vehicle = VehicleFactory.createVehicle(
        this.vehicleType,
        this.brand,
        this.model,
        this.year
      );

      this.createdVehicles.push(vehicle);
      this.addToLog(`✅ ${vehicle.getInfo()} criado com sucesso!`);
      
      // Limpar formulário
      this.brand = '';
      this.model = '';
    } catch (error) {
      this.addToLog(`❌ Erro: ${error}`);
    }
  }

  public selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    this.addToLog(`🔍 Selecionado: ${vehicle.getInfo()}`);
  }

  public startVehicle(): void {
    if (this.selectedVehicle) {
      const message = this.selectedVehicle.start();
      this.addToLog(message);
    } else {
      this.addToLog('❌ Selecione um veículo primeiro');
    }
  }

  public stopVehicle(): void {
    if (this.selectedVehicle) {
      const message = this.selectedVehicle.stop();
      this.addToLog(message);
    } else {
      this.addToLog('❌ Selecione um veículo primeiro');
    }
  }

  public removeVehicle(index: number): void {
    const vehicle = this.createdVehicles[index];
    this.createdVehicles.splice(index, 1);
    this.addToLog(`🗑️ ${vehicle.getInfo()} removido`);
    
    if (this.selectedVehicle === vehicle) {
      this.selectedVehicle = null;
    }
  }

  public clearLog(): void {
    this.actionLog = [];
  }

  public isFormValid(): boolean {
    return this.brand.trim().length > 0 && this.model.trim().length > 0;
  }

  public getVehicleTypeIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'car': '🚗',
      'motorcycle': '🏍️',
      'truck': '🚛'
    };
    return icons[type] || '🚗';
  }

  public getVehicleCount(type: string): number {
    return this.createdVehicles.filter(v => v.constructor.name.toLowerCase() === type).length;
  }

  public getCapacityUnit(type: string): string {
    const units: { [key: string]: string } = {
      'car': 'pessoas',
      'motorcycle': 'pessoas',
      'truck': 'toneladas'
    };
    return units[type] || 'unidades';
  }

  public getCurrentTime(): string {
    return new Date().toLocaleTimeString('pt-BR');
  }

  private addToLog(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.unshift(`[${timestamp}] ${message}`);
    if (this.actionLog.length > 20) {
      this.actionLog.pop();
    }
  }
}
