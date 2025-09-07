# 🎯 Angular Design Patterns

Uma aplicação educativa que demonstra a implementação de 5 Design Patterns essenciais no Angular, com exemplos interativos e código funcional.

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido para analisar e demonstrar como os Design Patterns podem ser implementados de forma prática no Angular, mostrando suas aplicações reais no desenvolvimento frontend.

## 📋 Design Patterns Implementados

### 1. 🏭 **Factory Pattern**
- **Conceito:** Criação de objetos sem especificar suas classes concretas
- **Implementação:** Sistema de criação de veículos (Carro, Moto, Caminhão)
- **Angular:** ComponentFactoryResolver, ViewContainerRef, Service Factories

### 2. 👁️ **Observer Pattern**
- **Conceito:** Notificação automática de mudanças de estado
- **Implementação:** Sistema de notícias com observadores
- **Angular:** RxJS Observables, EventEmitter, Change Detection

### 3. 🔒 **Singleton Pattern**
- **Conceito:** Garantir uma única instância de uma classe
- **Implementação:** Sistema de logging centralizado
- **Angular:** `providedIn: 'root'`, Dependency Injection

### 4. 🎯 **Strategy Pattern**
- **Conceito:** Algoritmos intercambiáveis em tempo de execução
- **Implementação:** Sistema de pagamentos (PIX, Cartão, Transferência)
- **Angular:** Form Validators, HTTP Interceptors, Route Guards

### 5. 🎨 **Decorator Pattern**
- **Conceito:** Adicionar comportamentos dinamicamente
- **Implementação:** Sistema de personalização de café
- **Angular:** @Component, @Injectable, HTTP Interceptors, Directives

## 🛠️ Tecnologias Utilizadas

- **Angular 17+** - Framework principal
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa
- **CSS3** - Estilização moderna
- **HTML5** - Estrutura semântica

## 🎨 Características

- ✅ **Exemplos Interativos** - Cada padrão possui uma demonstração funcional
- ✅ **Código Real** - Implementações completas e funcionais
- ✅ **Interface Moderna** - Design responsivo e intuitivo
- ✅ **Explicações Detalhadas** - Conceitos, fluxos e implementações
- ✅ **Estrutura Organizada** - Código limpo e bem documentado

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
ng serve

# Compilar para produção
ng build
```

## 📁 Estrutura do Projeto

```
src/app/
├── core/
│   └── components/          # Componentes principais
├── features/
│   ├── factory/            # Factory Pattern
│   ├── observer/           # Observer Pattern
│   ├── singleton/          # Singleton Pattern
│   ├── strategy/           # Strategy Pattern
│   └── decorator/          # Decorator Pattern
└── shared/
    └── styles/             # Estilos compartilhados
```

## 🎯 Objetivos

- **Educativo:** Demonstrar padrões de forma prática
- **Prático:** Mostrar implementações reais no Angular
- **Interativo:** Permitir experimentação com os padrões
- **Moderno:** Usar as melhores práticas do Angular

## 📚 Aprendizado

Este projeto é ideal para:
- Desenvolvedores Angular que querem entender Design Patterns
- Estudantes de programação
- Profissionais que buscam melhorar a arquitetura de código
- Qualquer pessoa interessada em padrões de design

---

**Desenvolvido com ❤️ para a comunidade Angular**