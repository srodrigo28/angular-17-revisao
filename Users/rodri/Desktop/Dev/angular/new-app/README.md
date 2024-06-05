### Criando projetos Angular

#### Instalando angular global
* requisito ter o nodeJS instalado na maquina
```abri o terminal e ver a versão do nodeJS
node --version
```

```instalando o angular no computador
npm install -g @angular/cli
```

```verficar versão do angular
ng version
```

#### Criando projetos Angular 17 2024
```1. Criando app
npx ng new cp-estilizacao --no-standalone
```

```2. Entrando na pasta do projeto
cd new-app
```

```3. Rodando o projeto
ng server
ou
npm start
```

```4. Criando component
ng generate component favorito
```

```5. Criando component
ng g c components/cadastro --skip-tests=true
ng g c components/radio-button --skip-tests=true
ng g c components/app-checkbox --skip-tests=true
ng g c components/input --skip-tests=true
ng g c components/form-group --skip-tests=true
ng g c components/form-group2 --skip-tests=true
```

```Criando diretivas
ng g directive invalid-text-valiator --skip-tests=true
```

```6. Criando serviço
ng g s services/cadastro
```

```7. Criando model
ng g m model/cadastro

```