# Estrutura do Projeto - Design Patterns Angular

## 📁 Organização de Arquivos

### Features (`src/app/features/`)

#### Observer Pattern (`src/app/features/observer/`)
- **models/**: Interfaces do padrão Observer
  - `observer.interface.ts` - Interface Observer
  - `subject.interface.ts` - Interface Subject
- **services/**: Implementações do padrão Observer
  - `news-subject.service.ts` - Implementação do Subject
  - `news-observer.service.ts` - Implementação do Observer
- **observer.component.ts** - Componente de demonstração
- **observer.module.ts** - Módulo do Observer

#### Factory Pattern (`src/app/features/factory/`)
- **models/**: Modelos de veículos
  - `vehicle.interface.ts` - Interface Vehicle
  - `car.model.ts` - Modelo Car
  - `motorcycle.model.ts` - Modelo Motorcycle
  - `truck.model.ts` - Modelo Truck
- **services/**: Factory Service
  - `vehicle-factory.service.ts` - Factory para criar veículos
- **factory.component.ts** - Componente de demonstração
- **factory.module.ts** - Módulo do Factory

### Components (`src/app/components/`)
- **menu/**: Componente de menu responsivo
  - **models/**: Interfaces do menu
    - `menu-item.interface.ts` - Interface MenuItem
  - **components/home/**: Página inicial
    - `home.component.ts` - Componente da página inicial
    - `home.component.html` - Template da página inicial
    - `home.component.css` - Estilos da página inicial
  - `menu.component.ts` - Componente do menu responsivo
  - `menu.component.html` - Template do menu responsivo
  - `menu.component.css` - Estilos responsivos do menu
  - `menu.module.ts` - Módulo do menu com lazy loading

## 🎯 Design Patterns Implementados

### ✅ **Implementados e Funcionais:**

#### 1. Observer Pattern
- **Localização**: `src/app/features/observer/`
- **Descrição**: Padrão para notificação de mudanças de estado
- **Implementação**: Sistema de notícias com observadores
- **Status**: ✅ Funcional

#### 2. Factory Pattern
- **Localização**: `src/app/features/factory/`
- **Descrição**: Padrão para criação de objetos sem especificar suas classes
- **Implementação**: Factory de veículos (Car, Motorcycle, Truck)
- **Status**: ✅ Funcional

### 🚧 **Em Desenvolvimento:**

#### 3. Singleton Pattern
- **Status**: 🚧 Realizando estudos de casos para demonstração e implementação

#### 4. Strategy Pattern
- **Status**: 🚧 Realizando estudos de casos para demonstração e implementação

#### 5. Decorator Pattern
- **Status**: 🚧 Realizando estudos de casos para demonstração e implementação

## 🔧 Convenções de Código

### Níveis de Acesso
- `public`: Métodos e propriedades acessíveis externamente
- `private`: Métodos e propriedades internos da classe
- `protected`: Métodos e propriedades acessíveis por herança
- `readonly`: Propriedades imutáveis após inicialização

### Estrutura de Arquivos
- Cada interface/classe em arquivo separado
- Separação clara entre models, services e components
- Nomenclatura consistente (kebab-case para arquivos)

### Organização por Feature
- Cada design pattern em sua própria feature
- Módulos independentes para cada feature
- **Lazy Loading** implementado para melhor performance
- Estrutura escalável para novos patterns
- **Foco exclusivo** nos design patterns (sem serviços desnecessários)

## 🚀 Lazy Loading

### Rotas Implementadas
- `/patterns` - Menu principal com página inicial
- `/observer` - Observer Pattern (lazy loaded)
- `/factory` - Factory Pattern (lazy loaded)
- `/singleton` - Singleton Pattern (em breve)
- `/strategy` - Strategy Pattern (em breve)
- `/decorator` - Decorator Pattern (em breve)

### Benefícios do Lazy Loading
- **Performance**: Módulos carregados apenas quando necessário
- **Bundle Size**: Redução do tamanho inicial do bundle
- **Escalabilidade**: Fácil adição de novos patterns
- **Manutenibilidade**: Código organizado e modular
