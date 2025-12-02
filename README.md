# Ogum Tech - Landing Page

Landing page oficial do projeto Ogum Tech, hospedada no GitHub Pages.

**🌐 URL:** [https://dev-mateus.github.io/ogum-tech-landing/](https://dev-mateus.github.io/ogum-tech-landing/)

## 📋 Sobre

Esta é a página de apresentação do **Ogum Tech**, um sistema moderno de gerenciamento de giras e filas de atendimento para terreiros de Umbanda.

A landing page foi desenvolvida com HTML, CSS e JavaScript puros, seguindo os mesmos princípios de design do projeto principal:

- 🎨 Design minimalista em preto e branco
- ⚡ Performance otimizada
- 📱 Totalmente responsiva
- ♿ Acessível (WCAG AAA)

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos puros, sem frameworks
- **JavaScript** - Vanilla JS, sem dependências
- **GitHub Pages** - Hospedagem gratuita

## 📁 Estrutura

```
ogum-tech-landing/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Documentação
└── .gitignore          # Arquivos ignorados
```

## 🛠️ Desenvolvimento Local

1. **Clone o repositório:**
```bash
git clone https://github.com/dev-mateus/ogum-tech-landing.git
cd ogum-tech-landing
```

2. **Abra no navegador:**
```bash
# Abra o arquivo index.html diretamente ou use um servidor local
python -m http.server 8000
# ou
npx serve
```

3. **Acesse:**
```
http://localhost:8000
```

## 🚀 Deploy no GitHub Pages

### Configuração Automática

1. **Faça push para o repositório:**
```bash
git add .
git commit -m "feat: initial landing page"
git push origin main
```

2. **Ative o GitHub Pages:**
   - Vá em **Settings** → **Pages**
   - Em **Source**, selecione `main` branch
   - Clique em **Save**

3. **Aguarde o deploy** (~2 minutos)

4. **Acesse:** `https://dev-mateus.github.io/ogum-tech-landing/`

### Deploy Manual

Caso precise fazer deploy manual:

```bash
# Certifique-se de estar na branch main
git checkout main

# Faça push
git push origin main
```

O GitHub Pages detectará automaticamente e fará o deploy.

## 🎨 Personalização

### Cores

As cores estão definidas como variáveis CSS em `styles.css`:

```css
:root {
    --black: #000000;
    --white: #ffffff;
    --gray-50: #f9fafb;
    /* ... outras cores */
}
```

### Conteúdo

Edite o arquivo `index.html` para alterar:
- Textos e descrições
- Links
- Seções

### Estilos

Edite o arquivo `styles.css` para customizar:
- Layout
- Tipografia
- Espaçamentos
- Animações

## 📊 Seções da Página

1. **Hero** - Apresentação principal com CTA
2. **Sobre** - Propósito do projeto
3. **Funcionalidades** - Features principais
4. **Interface** - Placeholders para screenshots
5. **Tecnologias** - Stack utilizada
6. **Download** - Links para web app e futuro PWA
7. **Open Source** - Informações sobre contribuição
8. **Footer** - Links e informações legais

## 🔗 Links Importantes

- **Aplicação Web:** [https://ogum-tech.vercel.app](https://ogum-tech.vercel.app)
- **Repositório Principal:** [github.com/dev-mateus/ogum-tech](https://github.com/dev-mateus/ogum-tech)
- **Issues:** [github.com/dev-mateus/ogum-tech/issues](https://github.com/dev-mateus/ogum-tech/issues)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Mateus](https://github.com/dev-mateus)

---

**Ogum Tech** - Tecnologia a serviço da fé ⚔️
