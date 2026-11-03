'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  BarChart3, 
  Database, 
  Maximize2, 
  RefreshCw, 
  Code2, 
  TrendingUp, 
  DollarSign, 
  Boxes, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface DashboardTab {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  kpis: { label: string; value: string; change: string }[];
  daxSnippet: string;
  insights: string[];
}

export default function PowerBISection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('financial');
  const [showDaxCode, setShowDaxCode] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const dashboards: DashboardTab[] = [
    {
      id: 'financial',
      name: t.powerbi.tabs.financial.tabName,
      category: t.powerbi.tabs.financial.category,
      icon: DollarSign,
      title: t.powerbi.tabs.financial.title,
      subtitle: t.powerbi.tabs.financial.subtitle,
      kpis: t.powerbi.tabs.financial.kpis,
      daxSnippet: `// Medida DAX: Variação Year-Over-Year e Margem EBITDA
[EBITDA YoY %] = 
VAR _ReceitaAnoAtual = CALCULATE([EBITDA Total], 'dCalendario'[Ano] = MAX('dCalendario'[Ano]))
VAR _ReceitaAnoAnterior = CALCULATE([EBITDA Total], SAMEPERIODLASTYEAR('dCalendario'[Data]))
RETURN
    DIVIDE(_ReceitaAnoAtual - _ReceitaAnoAnterior, _ReceitaAnoAnterior, 0)

// Medida DAX: DRE Dinâmico com Hierarquia Customizada
[Valor DRE Formatado] = 
SWITCH(
    TRUE(),
    SELECTEDVALUE('dPlanoContas'[TipoCalculo]) = "Percentual", FORMAT([Resultado %], "0.0%"),
    SELECTEDVALUE('dPlanoContas'[TipoCalculo]) = "Monetario", FORMAT([Resultado R$], "R$ #,##0"),
    BLANK()
)`,
      insights: t.powerbi.tabs.financial.insights
    },
    {
      id: 'sales',
      name: t.powerbi.tabs.sales.tabName,
      category: t.powerbi.tabs.sales.category,
      icon: TrendingUp,
      title: t.powerbi.tabs.sales.title,
      subtitle: t.powerbi.tabs.sales.subtitle,
      kpis: t.powerbi.tabs.sales.kpis,
      daxSnippet: `// Medida DAX: Curva ABC Dinâmica com Pareto
[Classificacao Curva ABC] = 
VAR _FaturamentoProduto = [Faturamento Liquido]
VAR _TotalFaturamento = CALCULATE([Faturamento Liquido], ALLSELECTED('dProduto'))
VAR _TabelaAcumulada = 
    ADDCOLUMNS(
        ALLSELECTED('dProduto'),
        "@Fat", [Faturamento Liquido]
    )
VAR _Acumulado = 
    SUMX(
        FILTER(_TabelaAcumulada, [@Fat] >= _FaturamentoProduto),
        [@Fat]
    )
VAR _PercentualAcumulado = DIVIDE(_Acumulado, _TotalFaturamento)
RETURN
    SWITCH(
        TRUE(),
        _PercentualAcumulado <= 0.80, "Classe A",
        _PercentualAcumulado <= 0.95, "Classe B",
        "Classe C"
    )`,
      insights: t.powerbi.tabs.sales.insights
    },
    {
      id: 'supply',
      name: t.powerbi.tabs.supply.tabName,
      category: t.powerbi.tabs.supply.category,
      icon: Boxes,
      title: t.powerbi.tabs.supply.title,
      subtitle: t.powerbi.tabs.supply.subtitle,
      kpis: t.powerbi.tabs.supply.kpis,
      daxSnippet: `// Medida DAX: Projeção de Ruptura em Dias (Estoque de Segurança)
[Dias de Cobertura de Estoque] = 
VAR _EstoqueAtual = SUM('fEstoque'[QuantidadeDisponivel])
VAR _DemandaMediaDiaria = 
    AVERAGEX(
        DATESINPERIOD('dCalendario'[Data], LASTDATE('dCalendario'[Data]), -30, DAY),
        [Quantidade Vendida]
    )
RETURN
    IF(
        _DemandaMediaDiaria > 0,
        DIVIDE(_EstoqueAtual, _DemandaMediaDiaria, 0),
        999
    )`,
      insights: t.powerbi.tabs.supply.insights
    }
  ];

  const currentTab = dashboards.find(d => d.id === activeTab) || dashboards[0];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1200);
  };

  return (
    <section id="powerbi" className="relative py-20 sm:py-28 bg-[#080B12] overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF6800]/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11141F] border border-white/10 text-[#FF6800] text-xs font-mono mb-4 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t.powerbi.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.powerbi.titlePre}
            <span className="text-[#FF6800]">
              {t.powerbi.titleGradient}
            </span>
          </h2>

          <p className="text-[#A8AFB8] text-base sm:text-lg leading-relaxed">
            {t.powerbi.description}
          </p>
        </div>

        {/* Dashboard Station Frame */}
        <div className={`relative rounded-2xl border border-white/10 bg-[#11141F] shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden transition-all duration-300 ${
          isFullscreen ? 'fixed inset-4 z-50 overflow-y-auto' : ''
        }`}>
          
          {/* Station Top Bar / Terminal Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 border-b border-white/10 bg-slate-900/80">
            
            {/* Window Controls & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              
              <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#FF5722] font-bold uppercase tracking-wider">
                  Power BI Station
                </span>
                <span className="text-xs text-slate-500 hidden md:inline font-mono">
                  {t.powerbi.terminalVersion}
                </span>
              </div>
            </div>

            {/* Dashboard Tabs Selector */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/80 border border-white/5">
              {dashboards.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Header Right Tools */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowDaxCode(!showDaxCode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                  showDaxCode 
                    ? 'bg-purple-950/60 border-purple-500/40 text-purple-300' 
                    : 'bg-slate-900 border-white/10 text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                title={t.powerbi.viewDax}
              >
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span className="hidden sm:inline">{t.powerbi.viewDax}</span>
              </button>

              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                title={t.powerbi.refreshTooltip}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 transition-colors hidden sm:block"
                title={t.powerbi.fullscreenTooltip}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tab Subheader / Context Bar */}
          <div className="p-4 sm:p-6 border-b border-white/5 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <span>{currentTab.category}</span>
                <span>•</span>
                <span className="text-slate-400">{t.powerbi.realtimeUpdate}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentTab.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {currentTab.subtitle}
              </p>
            </div>

            <a
              href="#contato"
              className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 transition-colors group"
            >
              <span>{t.powerbi.btnCustomDashboard}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Interactive KPI Bar for the Selected Tab */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 p-px">
            {currentTab.kpis.map((kpi, i) => (
              <div key={i} className="bg-slate-950/90 p-4 sm:p-5">
                <span className="text-xs text-slate-400 font-mono block mb-1">
                  {kpi.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                    {kpi.value}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">
                    {kpi.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Area: Interactive Dashboard Canvas OR DAX Code Inspector */}
          <div className="relative min-h-[460px] sm:min-h-[540px] p-4 sm:p-6 bg-[#070b14] flex flex-col justify-between">
            
            {showDaxCode ? (
              /* DAX & ETL Architecture Viewer */
              <div className="animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <Database className="w-4 h-4" />
                    <span>{t.powerbi.daxTitle}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {t.powerbi.daxModel}
                  </span>
                </div>

                <pre className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-purple-500/20 text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
                  <code>{currentTab.daxSnippet}</code>
                </pre>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentTab.insights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Real Corporate Power BI Dashboard Showcase (/pbix/PBIP-01.png) */
              <div className="relative flex-1 rounded-2xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl flex flex-col">
                
                {/* Real Corporate Dashboard Viewport */}
                <div className="relative w-full aspect-[16/8.8] sm:aspect-[16/8.4] bg-slate-950 group">
                  <Image
                    src="/pbix/PBIP-01.png"
                    alt="Painel de Fraudes Cartões de Crédito - Relatório Corporativo Power BI Real"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 shadow-xl">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      PAINEL CORPORATIVO REAL • PBIP
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 text-slate-300 text-[11px] sm:text-xs font-mono hidden md:inline-block shadow-xl">
                      Volume: R$ 1,15 B | Casos: 2.055 | Telemetria ao Vivo
                    </span>
                  </div>

                  {/* Floating Action Controls */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/15 text-white hover:text-[#FF5722] hover:border-[#FF5722]/50 transition-all shadow-xl text-xs flex items-center gap-1.5 font-mono"
                      title={isFullscreen ? "Restaurar" : "Expandir em Tela Cheia"}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{isFullscreen ? 'Restaurar' : 'Tela Cheia'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowDaxCode(true)}
                      className="px-3 py-1.5 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-500/50 text-purple-200 hover:bg-purple-900/80 transition-all shadow-xl text-xs flex items-center gap-1.5 font-mono"
                      title="Inspecionar DAX"
                    >
                      <Code2 className="w-3.5 h-3.5 text-purple-400" />
                      <span className="hidden sm:inline">Ver DAX</span>
                    </button>
                  </div>

                  {/* Bottom Gradient overlay on hover for quick CTA */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <span>Painel de Fraudes Cartões de Crédito — Transações 2026</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-400 hidden sm:block">
                        Modelagem relacional em estrela, cálculo em tempo real de KPIs de risco e detecção de anomalias com DirectQuery.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href="#contato"
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] shadow-lg shadow-[#FF5722]/30 transition-all flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                        <span>{t.powerbi.btnHireDashboard}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Telemetry Stamp */}
                <div className="p-3 sm:px-6 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 bg-slate-950">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      MICROSOFT POWER BI SERVICE CONECTADO
                    </span>
                    <span className="hidden sm:inline text-slate-600">|</span>
                    <span className="hidden sm:inline text-slate-400">{t.powerbi.sandboxId}</span>
                  </div>
                  <span className="text-cyan-400/90">{t.powerbi.latency}</span>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Bar: Action Message */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                {t.powerbi.databaseQuestionPre}
                <strong className="text-white">{t.powerbi.databaseQuestionBold}</strong>?
              </span>
            </div>
            <a
              href="#contato"
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-xs shrink-0"
            >
              <span>{t.powerbi.databaseQuestionLink}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
