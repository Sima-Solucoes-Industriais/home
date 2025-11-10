# Instruções de Deploy - GitHub Pages

## 🚀 Como fazer o deploy no GitHub Pages

### Passo 1: Criar Repositório
1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome sugerido: `sima-portfolio` ou `sima-projetos`
4. Marque como "Public" (necessário para GitHub Pages gratuito)
5. Clique em "Create repository"

### Passo 2: Upload dos Arquivos
1. Clique em "uploading an existing file"
2. Arraste todos os arquivos da pasta `static-version/` para o repositório
3. Commit message: "Initial commit - SIMA Portfolio"
4. Clique em "Commit changes"

### Passo 3: Configurar GitHub Pages
1. Vá em **Settings** do repositório
2. Role para baixo até **Pages**
3. Em **Source**, selecione "Deploy from a branch"
4. Em **Branch**, selecione "main" e pasta "/ (root)"
5. Clique em **Save**

### Passo 4: Acessar o Site
- O site estará disponível em: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO`
- Exemplo: `https://raphael.github.io/sima-portfolio`

## 📁 Arquivos Necessários

Certifique-se de que estes arquivos estão no repositório:
- ✅ `index.html`
- ✅ `styles/main.css`
- ✅ `assets/` (pasta com todas as imagens)
- ✅ `README.md`

## 🔧 Configurações Adicionais

### Domínio Personalizado (Opcional)
Se quiser usar um domínio próprio:
1. Vá em Settings > Pages
2. Adicione seu domínio em "Custom domain"
3. Configure o DNS do seu domínio para apontar para o GitHub Pages

### HTTPS (Automático)
O GitHub Pages fornece HTTPS automaticamente para todos os sites.

## 🐛 Solução de Problemas

### Site não carrega
- Verifique se o repositório é público
- Aguarde alguns minutos para o deploy
- Verifique se o arquivo `index.html` está na raiz

### Vídeos não funcionam
- Verifique se os IDs dos vídeos estão corretos
- Teste os links diretos do YouTube
- Verifique o console do navegador para erros

### Imagens não carregam
- Verifique se a pasta `assets/` foi enviada corretamente
- Verifique os caminhos das imagens no HTML

## 📞 Suporte

Para dúvidas sobre o deploy:
- **Email**: rsilveira@simaprojetos.com.br
- **Telefone**: +55 31 99424-7765
