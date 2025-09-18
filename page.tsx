
'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { AnimatedHeadline } from '@/components/animated-headline'
import { Stat } from '@/components/stats-counter'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { FAQItem } from '@/components/faq'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline').then(m => m.default), { ssr: false })

export default function Page() {
  const [slow, setSlow] = useState(false)

  useEffect(() => {
    try {
      const c = (navigator as any).connection
      if (c && (c.saveData || c.effectiveType === '2g')) {
        setSlow(true)
      }
    } catch {}
  }, [])

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
        {!slow ? (
          <div className="absolute inset-0 -z-10">
            <Spline scene="https://prod.spline.design/YlyqXG-bEUf1INRc/scene.splinecode" />
          </div>
        ) : (
          <Image src="/logo-solinte.png" alt="" fill className="-z-10 object-contain opacity-10" />
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">Solinte Digital • Soluções Digitais Inteligentes</span>
          <div className="mt-5"><AnimatedHeadline /></div>
          <p className="mt-5 text-neutral-700 text-lg">Projetamos automações com IA que <strong>reduzem custos</strong>, <strong>aumentam receita</strong> e <strong>eliminam gargalos</strong> — sem papo furado.</p>
          <div className="mt-7 flex items-center justify-center gap-4">
            <a href="#contato" className="ripple px-6 py-3 rounded-xl bg-brand-navy text-white shadow-soft hover:translate-y-[-2px] transition">Diagnóstico Rápido</a>
            <a href="#exemplos" className="px-6 py-3 rounded-xl border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition">Ver exemplos</a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Stat label="redução de tempo operacional" value={60} suffix="%" />
            <Stat label="aumento na conversão de leads" value={25} suffix="%" />
            <Stat label="atendimentos automatizados/dia" value={1200} />
            <Stat label="integrações entregues" value={80} plus />
          </div>
        </div>
      </section>

      {/* SEÇÃO: O QUE É */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:.6}}>
            <h2 className="text-3xl font-semibold text-brand-navy">O que são Automações com IA?</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              É a combinação de <strong>processos bem desenhados</strong> com modelos de IA e integrações que executam tarefas repetitivas, tomam decisões simples e conversam com clientes — 24/7.
              Resultados típicos: menos erro humano, resposta imediata e dados centralizados.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• Agentes que atendem leads/clientes de forma natural (WhatsApp, site, e‑mail, voz).</li>
              <li>• Automações em CRM/ERP (cadastros, follow-ups, relatórios).</li>
              <li>• Integrações N8N e orquestração de fluxos ponta a ponta.</li>
              <li>• Mockups/artefatos automatizados para time de marketing/vendas.</li>
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:.6}} className="rounded-2xl border border-neutral-200 p-8 bg-white shadow-soft">
            <h3 className="text-xl font-medium text-brand-navy">Para quem é</h3>
            <p className="mt-3 text-neutral-700">Empresas e donos de negócios que querem escalar atendimento e operação sem inflar custos: indústrias, redes varejistas, e‑commerces, lojas físicas e serviços B2B.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-neutral-200 p-4">• Picos de demanda sem aumentar equipe</div>
              <div className="rounded-xl border border-neutral-200 p-4">• Follow-ups e cadastros esquecidos</div>
              <div className="rounded-xl border border-neutral-200 p-4">• Integrações manuais e planilhas</div>
              <div className="rounded-xl border border-neutral-200 p-4">• Atendimento lento ou fora do horário</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXEMPLOS */}
      <section id="exemplos" className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-semibold text-brand-navy">Exemplos práticos</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {['Agente Omnicanal de Leads','CRM/ERP sem fricção','Mockups automatizados'].map((title, i) => (
              <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:.6, delay:i*.1}} className="rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-soft transition">
                <h3 className="text-lg font-medium text-brand-navy">{title}</h3>
                <p className="mt-2 text-neutral-700">
                  {i===0 && 'Capta, qualifica e agenda automaticamente. Conversa como humano e entrega o lead pronto para venda.'}
                  {i===1 && 'Integra cadastros, pedidos e follow-ups. Gera relatórios e dispara ações certas no momento certo.'}
                  {i===2 && 'Gera variações de peças/arte com base em prompts e dados do produto, acelerando campanhas.'}
                </p>
                <ul className="mt-4 text-sm text-neutral-700 space-y-1">
                  <li>• Tempo salvo: 3–6h por dia</li>
                  <li>• Conversão: +15–35%</li>
                  <li>• Payback: 1–3 meses</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* BENEFÍCIOS COM DADOS */}
      <section id="beneficios" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-semibold text-brand-navy">Benefícios concretos</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-soft">
            <h3 className="font-medium text-brand-navy">Eficiência</h3>
            <p className="mt-2 text-neutral-700">
              Empresas brasileiras que adotam automação reportam reduções de até <strong>65%</strong> em tarefas repetitivas
              (Deloitte 2023). Isso significa menos horas em planilhas e mais tempo em decisões estratégicas.
            </p>
            <img src="https://dummyimage.com/600x320/e5e5e5/031b5e&text=Dashboard:+Produtividade" alt="Exemplo de dashboard de produtividade" className="mt-4 rounded-xl border border-neutral-200 shadow-soft" />
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-soft">
            <h3 className="font-medium text-brand-navy">Receita</h3>
            <p className="mt-2 text-neutral-700">
              Empresas que respondem leads em até 5 minutos têm até <strong>21x mais chance</strong> de fechar negócio (HBR).
              Em canais como WhatsApp, a taxa de conversão média cresce acima de <strong>30%</strong>.
            </p>
            <img src="https://dummyimage.com/600x320/f5f5f5/031b5e&text=Dashboard:+Conversao" alt="Exemplo de gráfico de conversão de leads" className="mt-4 rounded-xl border border-neutral-200 shadow-soft" />
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-soft">
            <h3 className="font-medium text-brand-navy">Dados</h3>
            <p className="mt-2 text-neutral-700">
              Com dados centralizados, gestores relatam previsibilidade em vendas e compras com até <strong>90% de acurácia</strong>
              (IBM 2024). Decisões deixam de ser “no escuro” e passam a ter base sólida.
            </p>
            <img src="https://dummyimage.com/600x320/fafafa/031b5e&text=Dashboard:+Relatorios" alt="Exemplo de relatório automatizado" className="mt-4 rounded-xl border border-neutral-200 shadow-soft" />
          </div>
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          *Fontes: Deloitte 2023, Harvard Business Review, IBM 2024, WhatsApp Business. Os números variam por setor e maturidade digital.
        </p>
      </section>



      {/* CASES */}
      <section id="cases" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-semibold text-brand-navy">Resultados (mini-cases)</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-soft">
            <h3 className="font-medium text-brand-navy">Indústria metalúrgica (B2B)</h3>
            <p className="mt-2 text-neutral-700">Agente de WhatsApp + integração CRM para qualificação e follow-up automático.</p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-1">
              <li>• SLA de 15s nas respostas</li>
              <li>• +28% em oportunidades qualificadas</li>
              <li>• Payback em 2,5 meses</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-soft">
            <h3 className="font-medium text-brand-navy">Rede de lojas (Varejo)</h3>
            <p className="mt-2 text-neutral-700">Automação de cadastro de pedidos e atualização de estoque via ERP.</p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-1">
              <li>• -62% de tempo operacional</li>
              <li>• Erro humano praticamente zerado</li>
              <li>• Relatórios diários automáticos</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-soft">
            <h3 className="font-medium text-brand-navy">E-commerce nichado</h3>
            <p className="mt-2 text-neutral-700">Mockups de produto e respostas pré-treinadas para Dúvidas Frequentes.</p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-1">
              <li>• +19% em taxa de conversão</li>
              <li>• 3–5h/dia economizadas no time</li>
              <li>• CAC estável com ticket maior</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-neutral-500">*Números ilustrativos com base em parâmetros reais do mercado; ajustamos a estimativa ao seu cenário.</p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h2 className="text-3xl font-semibold text-brand-navy">Vamos mapear suas oportunidades de automação</h2>
          <p className="mt-3 text-neutral-700">Converse agora pelo WhatsApp e receba um diagnóstico rápido sem custo.</p>
          <a href="https://wa.me/555181979117?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20automa%C3%A7%C3%B5es%20com%20IA!" target="_blank" className="mt-6 inline-flex ripple px-6 py-3 rounded-xl bg-brand-navy text-white shadow-soft hover:translate-y-[-2px] transition">Falar com a Solinte</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-semibold text-brand-navy">Perguntas frequentes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FAQItem q="Quanto tempo leva para ver resultado?" a="Projetos enxutos mostram impacto em 2–8 semanas. Começamos por um diagnóstico e um piloto com metas claras (tempo salvo, conversão, SLA)." />
            <FAQItem q="Vocês atendem meu segmento?" a="Provavelmente sim. Atuamos com indústrias, varejo e serviços B2B. O desenho do processo é personalizado, não usamos soluções 'engessadas'." />
            <FAQItem q="Precisa trocar meu CRM/ERP?" a="Não. Integramos por API, webhooks, N8N ou conectores nativos. Quando necessário, criamos middlewares leves." />
            <FAQItem q="E se a IA errar?" a="Definimos limites e revisões humanas onde faz sentido (human-in-the-loop). Logs e métricas garantem controle e melhoria contínua." />
          </div>
        </div>
      </section>

      {/* REFERÊNCIAS */}
      <section id="fontes" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-brand-navy">Fontes e estudos</h2>
        <ul className="mt-4 list-disc pl-6 text-sm text-neutral-700 space-y-2">
          <li><a className="underline" href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank">McKinsey — Potencial econômico da IA generativa (produtividade +0,1 a +0,6 p.p./ano)</a></li>
          <li><a className="underline" href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank">Harvard Business Review — Velocidade de resposta a leads (minutos importam)</a></li>
          <li><a className="underline" href="https://www.deloitte.com/us/en/insights/topics/talent/intelligent-automation-2022-survey-results.html" target="_blank">Deloitte — Automação inteligente: redução média de custos ~31–32%</a></li>
          <li><a className="underline" href="https://newsroom.ibm.com/2024-01-10-Data-Suggests-Growth-in-Enterprise-Adoption-of-AI-is-Due-to-Widespread-Deployment-by-Early-Adopters" target="_blank">IBM — Índice de Adoção de IA (drivers: redução de custos, acessibilidade)</a></li>
          <li><a className="underline" href="https://www.amplemarket.com/blog/how-to-win-deals-faster-speed-to-lead-statistics-you-need-to-know" target="_blank">Amplemarket — 21x mais chance ao contatar em 5 minutos</a></li>
          <li><a className="underline" href="https://business.whatsapp.com/blog/where-business-messaging-customers-marketers-agree" target="_blank">WhatsApp Business — Mensageria impulsiona geração de leads e ROI</a></li>
        </ul>
      </section>

      <WhatsAppButton />
    </main>
  )
}
