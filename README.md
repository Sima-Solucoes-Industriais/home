# Portfólio SIMA - Versão HTML Estática

Esta é uma versão HTML estática do portfólio da SIMA, convertida do projeto SharePoint Framework original.

## Estrutura de Arquivos

```
static-version/
├── index.html          # Página principal
├── styles/
│   └── main.css        # Estilos CSS
├── assets/             # Imagens e recursos
│   ├── LOGO.jpg
│   ├── background-banner.jpg
│   ├── 1-robo-autonomo-desinfeccao-uvc-*.jpg
│   ├── 2-linha-cura-ultravioleta-vasilhames-p13-*.jpg
│   └── ... (todas as imagens dos projetos)
└── README.md           # Este arquivo
```

## Como Usar

### Hospedagem Local
1. Abra o arquivo `index.html` diretamente no navegador
2. Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

### Hospedagem Estática
Esta versão pode ser hospedada em qualquer serviço de hospedagem estática:

- **GitHub Pages**: Faça upload dos arquivos para um repositório e ative o GitHub Pages
- **Netlify**: Arraste a pasta `static-version` para o Netlify
- **Vercel**: Conecte o repositório ao Vercel
- **AWS S3**: Faça upload dos arquivos para um bucket S3 configurado para hospedagem estática
- **Firebase Hosting**: Use o Firebase CLI para fazer deploy

## Características

- ✅ **Totalmente estático**: Não requer servidor backend
- ✅ **Responsivo**: Funciona em desktop, tablet e mobile
- ✅ **Otimizado**: Imagens com lazy loading
- ✅ **Acessível**: Estrutura semântica e navegação por teclado
- ✅ **SEO-friendly**: Meta tags e estrutura otimizada
- ✅ **Performance**: CSS e JavaScript inline para carregamento rápido
- ✅ **Sistema de vídeos**: Modal interativo para reprodução de vídeos do YouTube
- ✅ **Thumbnails otimizados**: Carregamento rápido com preview dos vídeos

## Projetos Incluídos

1. **Robô Autônomo de Desinfecção UVC** (UVtronic)
2. **Linha de Cura Ultravioleta para Vasilhames P13** (Supergasbrás)
3. **Banheiro Público PNE** (Prefeitura de São Paulo)
4. **Módulo de Cura UV LED** (ZF do Brasil)
5. **Tesoura Hidráulica para Corte de Tubos Metálicos** (Engsoil)
6. **Dispositivo Hidráulico de Corte Canalino** (Aethra)
7. **Skid de Transporte** (Anglo American)
8. **Reboque para Transporte de Veículos** (AC Implementos Rodoviários)
9. **Berço de Corte** (Rieter)
10. **Engate para Trator de Movimentação** (CNH)
11. **Rack para Transporte** (CNH)
12. **Dispositivo de Controle Calandra** (IVECO)

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos com CSS Grid e Flexbox
- **JavaScript**: Navegação suave entre seções e sistema de vídeos modal
- **Google Fonts**: Fonte Inter para tipografia moderna
- **YouTube API**: Integração com vídeos do YouTube via iframe

## Sistema de Vídeos

O portfólio inclui um sistema avançado de reprodução de vídeos:

### Características do Sistema
- **Thumbnails interativos**: Preview dos vídeos com botão de play
- **Modal responsivo**: Reprodução em tela cheia com controles
- **Carregamento otimizado**: Vídeos carregam apenas quando clicados
- **Navegação por teclado**: Suporte a tecla Escape para fechar
- **Design responsivo**: Funciona perfeitamente em todos os dispositivos

### Como Funciona
1. Os vídeos são exibidos como thumbnails com overlay de play
2. Ao clicar, abre um modal com o vídeo em tela cheia
3. O vídeo carrega automaticamente com autoplay
4. Fechamento por botão X, clique fora do modal ou tecla Escape

### Arquivos de Teste
- `test.html`: Página de teste básica para verificar o sistema de vídeos
- `video-test.html`: Página de teste completa com links diretos e thumbnails
- Acesse via: `http://localhost:8000/test.html` ou `http://localhost:8000/video-test.html`

### Vídeos Incluídos
**Projeto 1 - Robô Autônomo de Desinfecção UVC (UVtronic):**
- Vídeo 1: https://www.youtube.com/watch?v=-ebQXr7ZHEw
- Vídeo 2: https://www.youtube.com/watch?v=-SuBZ-sk6Ec
- Vídeo 3: https://www.youtube.com/watch?v=xNKsIzT7f0M
- Vídeo 4: https://www.youtube.com/watch?v=swUx6vOCQmk

**Projeto 2 - Linha de Cura Ultravioleta para Vasilhames P13 (Supergasbrás):**
- Vídeo 1: https://www.youtube.com/watch?v=uY1nCLWdUXA
- Vídeo 2: https://www.youtube.com/watch?v=V1CZrliYVzo

## Personalização

### Cores
As cores principais estão definidas como variáveis CSS no arquivo `styles/main.css`:
```css
:root {
  --sima-blue: #004B8D;
  --sima-grey-brown: #6A5F5B;
  --white: #FFFFFF;
  --black: #000000;
  --text-gray-700: #4A5568;
  --bg-gray-50: #F9FAFB;
  --bg-gray-100: #F3F4F6;
}
```

### Conteúdo
Para modificar o conteúdo:
1. Edite o arquivo `index.html`
2. Atualize as informações de contato na seção "Entre em Contato"
3. Adicione ou remova projetos conforme necessário

### Imagens
- Substitua as imagens na pasta `assets/`
- Mantenha os mesmos nomes de arquivo ou atualize as referências no HTML
- Otimize as imagens para web (formato WebP recomendado)

## Suporte

Para dúvidas ou suporte técnico, entre em contato:
- **Email**: rsilveira@simaprojetos.com.br
- **Telefone**: +55 31 99424-7765
- **WhatsApp**: [Clique aqui](https://wa.me/5531994247765)

---

© 2024 SIMA Projetos e Soluções Industriais. Todos os direitos reservados.
