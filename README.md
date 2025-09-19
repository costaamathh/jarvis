# Jarvis Agent - Landing Page

Landing page para o Jarvis Agent, uma plataforma de chat inteligente para produtividade.

## Tecnologias

- **Next.js 14** - Framework React
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones

## Como rodar o projeto

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do projeto

```
jarvis-landing/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais
├── components/
│   └── ui/                 # Componentes shadcn/ui
├── lib/
│   └── utils.ts            # Utilitários
├── public/
│   ├── hero.png           # Placeholder - substitua pela imagem real
│   ├── demo.mp4           # (Não usado) - agora usa YouTube embed
│   ├── notion1.png        # Placeholder - substitua pela screenshot
│   └── notion2.png        # Placeholder - substitua pela screenshot
└── ...arquivos de config

```

## Assets necessários

Substitua os arquivos placeholder em `/public/` pelos seus assets reais:

- `hero.png` - Imagem do hero
- `demo.mp4` - (Não usado) - vídeo agora via YouTube embed
- `notion1.png` - Screenshot do template Notion
- `notion2.png` - Screenshot do template Notion

## Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Seções da página

1. **Header** - Navegação fixa com links para seções
2. **Hero** - Apresentação principal com CTAs
3. **Recursos** - Grid com 3 funcionalidades principais
4. **Demo** - Player de vídeo com roteiro em dialog
5. **Notion** - Integração com template personalizado
6. **Contato** - Formulário para beta access
7. **Footer** - Links e informações da empresa