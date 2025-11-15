# Quiz Vocacional Senac

Quiz vocacional interativo para auxiliar estudantes a descobrir qual curso técnico do Senac mais combina com seu perfil.

## 🎯 Cursos Disponíveis

- **Jogos Digitais** 🎮
- **Desenvolvimento de Sistemas** 💻
- **Multimídia** 🎨

## 🚀 Como Executar Localmente

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173/`

## 📦 Como Fazer o Build

Para criar a versão de produção:

```bash
npm run build
```

## 🌐 Deploy no GitHub Pages

### Configuração Inicial

1. **Edite o `package.json`** e altere a linha do `homepage` com seu usuário e nome do repositório:
```json
"homepage": "https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO"
```

2. **Edite o `vite.config.js`** e altere o `base` para o nome do seu repositório:
```javascript
base: '/NOME-DO-REPOSITORIO/'
```

### Deploy

1. Crie um repositório no GitHub

2. Faça o commit inicial:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

3. Execute o deploy:
```bash
npm run deploy
```

4. Configure o GitHub Pages:
   - Vá em Settings > Pages
   - Em "Source", selecione a branch `gh-pages`
   - Clique em "Save"

5. Acesse seu site em: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO`

## 🎨 Paleta de Cores

### Azul Senac
- **Pantone**: 288 C
- **Europa**: C100 M67 Y0 K23
- **RGB**: R0 G75 B181
- **HEX**: #004C94

### Laranja Senac
- **Pantone**: 144 C
- **Europa**: C0 M50 Y100 K0
- **RGB**: R247 G148 B30
- **HEX**: #F7941E

### Laranja Claro
- **Pantone**: 144 em 55%
- **Europa**: C0 M27 Y55 K0
- **RGB**: R253 G193 B128
- **HEX**: #FBC483

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── ProgressBar.jsx
│   └── Question.jsx
├── pages/              # Páginas da aplicação
│   ├── Home.jsx
│   ├── Quiz.jsx
│   ├── Result.jsx
│   └── CourseDetails.jsx
├── data/               # Dados do quiz e cursos
│   ├── questions.js
│   └── courses.js
├── App.jsx
└── main.jsx
```

## ✨ Funcionalidades

- ✅ Quiz com 7 perguntas
- ✅ Barra de progresso
- ✅ Resultado personalizado
- ✅ Páginas de detalhes dos cursos
- ✅ Design responsivo
- ✅ Animações suaves
- ✅ Navegação com React Router
- ✅ Pronto para GitHub Pages

## 🛠️ Tecnologias

- React 19
- React Router DOM
- Vite
- CSS3 com animações
- GitHub Pages

## 📝 Licença

Projeto desenvolvido para o Senac. Pelo Professor Bruno Martins de Abreu

