# Skill Np1.md (Namesis Protocol) — Diretrizes de Performance, Segurança e Engenharia
# Projeto: Ecossistema Web de Alta Conversão — https://portfolio.foxstorebr.com
# Especialista: Osvaldo Queta Fernando (TI, Dados, IA, Governança, Libras)

> **Diretrizes Canônicas de Engenharia, Performance e Segurança.**
> Este documento define os padrões obrigatórios (Np1) adaptados especificamente para a plataforma web do portfólio executivo de alta conversão `https://portfolio.foxstorebr.com`, integrando o ecossistema FoxStoreBR e Fox Libras com estética futurista TechAI.

---

### 🛡️ Princípios Fundamentais (Invioláveis)
1. **Desacoplamento e Modularidade:** Componentes atômicos e isolados em `components/`, sem vazamento de estado global desnecessário.
2. **Performance de Elite (Core Web Vitals 100/100):** LCP < 1.2s, FID/INP < 100ms, CLS = 0.
3. **Segurança de Borda & Iframe Sandboxing:** Proteção rigorosa para embeds de Power BI e links externos.
4. **Hiper-Responsividade & Acessibilidade (WCAG 2.1 AA):** Suporte total a desktop, tablet e mobile, com contraste adequado e tags semânticas para leitores de tela e Libras.
5. **Estética Futurista de Alta Conversão:** Visual TechAI (Cyberpunk Executivo), micro-interações fluidas e tipografia moderna sem comprometer o First Contentful Paint.

---

### 🏛️ Seção 1 — Engenharia, Clean Code e Tipagem Estrita
- **TypeScript Strict Mode:** Proibido uso de `any`. Toda interface de dados (KPIs, Planos, Serviços, Dashboards, Depoimentos) deve possuir tipagem explícita e imutável (`readonly`).
- **Padrão de Componentização:**
  - Componentes de apresentação isolados com props documentadas.
  - Client Components apenas onde houver real necessidade de interatividade (`'use client'`).
  - Hooks customizados para comportamentos reutilizáveis (e.g. scroll reveal, terminal input, tabs do Power BI).
- **Consistência de Nomenclatura:** PascalCase para componentes (`PowerBISection.tsx`), camelCase para funções utilitárias e kebab-case para rotas.

---

### ⚡ Seção 2 — Performance, Core Web Vitals e Otimização Visual
- **LCP (Largest Contentful Paint):**
  - Otimização crítica de fontes via `next/font/google` com subsets latinos e preconnect automático (`display: 'swap'`).
  - Priorização de renderização estática para o Hero e Navbar, evitando bloqueios na thread principal.
- **CLS (Cumulative Layout Shift = 0):**
  - Contêiner do Iframe do Power BI com aspect ratio responsivo fixo (`aspect-video` ou `min-h-[520px]`) e Skeleton loader com animação de scanline enquanto o iframe carrega.
  - Reservas explícitas de espaço dimensional para todos os badges, modais e cards flutuantes.
- **INP (Interaction to Next Paint < 100ms):**
  - Efeitos de hover, glow e partículas acelerados via hardware (`transform-gpu`, `will-change-transform`).
  - Animações via Framer Motion configuradas com `layout="position"` e transições em `easeOut` leves.
- **Bundle Optimization:**
  - Importação seletiva de ícones do `lucide-react`.
  - Zero dependências desnecessárias ou bibliotecas pesadas de charts quando o Power BI Embed for o motor principal de BI.

---

### 🔒 Seção 3 — Segurança, Iframe Sandboxing e Governança de Links
- **Power BI Publish to Web Sandboxing:**
  - Os iframes de relatórios públicos devem conter atributos de segurança:
    ```html
    <iframe
      src="..."
      title="Dashboard Interativo - Osvaldo Queta Fernando"
      loading="lazy"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      referrerPolicy="no-referrer-when-downgrade"
    />
    ```
  - Fallback visual inteligente caso o usuário esteja em rede corporativa que bloqueie iframes do Power BI Service (`app.powerbi.com`).
- **Links Externos Seguros:**
  - Todos os links que apontam para fora do domínio principal (`foxstorebr.com`, `libras.foxstorebr.com`, WhatsApp, LinkedIn, GitHub) devem utilizar obrigatoriamente `rel="noopener noreferrer"` e `target="_blank"`.
- **Sanitização de Entradas de Contato:**
  - Formulário estilo terminal com validação preventiva no cliente de tamanho de caracteres, e-mail válido e sanitização de query parameters antes de despachar para o WhatsApp API (`https://api.whatsapp.com/send?phone=...&text=...`).

---

### 🌐 Seção 4 — Ecossistema Integrado, i18n e Acessibilidade (Libras / WCAG)
- **Topologia de Domínios:**
  - Central: `https://portfolio.foxstorebr.com` (Engenharia, BI, Consultoria e IA).
  - Comercial: `https://foxstorebr.com` (E-commerce, produtos e presença de mercado).
  - Social / Inclusão: `https://libras.foxstorebr.com` (Fox Libras, Acessibilidade e Educação Especial).
- **Acessibilidade Universal (WCAG 2.1 AA):**
  - Rótulos `aria-label` descritivos em todos os botões de ação e ícones interativos.
  - Indicadores de foco visíveis (`focus-visible:ring-2 focus-visible:ring-cyan-400`).
  - Destaque especial para a credencial e serviços de Tradução/Interpretação de Libras, com link direto para o canal de acessibilidade.

---

### 🚀 Seção 5 — SEO Técnico e Metadados para Alta Conversão
- **Open Graph & Twitter Cards:** Configuração completa de metadados em `app/layout.tsx` (título dinâmico, descrição rica, imagem de preview com estética cyberpunk executiva).
- **Schema.org (JSON-LD):** Estrutura de `Person`, `ProfessionalService` e `WebSite` injetada no `<head>` para indexação avançada no Google e Bing (destacando especialidades: Business Intelligence, Software Engineering, IT Leadership, AI Solutions).
- **Semântica HTML5:** Uma única tag `<h1>` no Hero, `<section>` delimitadas com IDs claros para navegação por âncoras (`#powerbi`, `#servicos`, `#planos`, `#trajetoria`, `#contato`).

---

### 🛠️ Seção 6 — Auto-Recuperação e Tolerância a Falhas
- **Error Boundaries:** Captura graciosa de erros em componentes com fallback estilizado no tema TechAI ("Sistema em Modo de Segurança - Reiniciar Módulo").
- **Iframe Resiliency:** Detecção de status de carregamento com timeout e botão de recarregamento manual para o visualizador do Power BI.
- **WhatsApp Fallback:** Caso a API do WhatsApp web falhe no dispositivo, o terminal fornece botões secundários para e-mail direto (`mailto:osvaldoqueta@gmail.com`) e ligação telefônica.

---

### 🧠 Seção 7 — Continuidade de Contexto e Documentação Viva
- **Atualização Contínua:** Qualquer adição de novo dashboard, alteração de paleta, criação de novas rotas ou componentes deve ser imediatamente refletida em:
  - `CONTEXT.md`: Histórico de implementações, decisões e marcos concluídos.
  - `ARCHITECTURE.md`: Árvore de componentes, fluxo de dados, contratos de props e design tokens.