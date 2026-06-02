import { createContext, useContext, useState } from 'react'

const translations = {
  pt: {
    headline: 'Empresa de edição de vídeos focada no mercado de direct response — agilidade, qualidade e comprometimento com cada cliente.',
    navVsl: "VSL's",
    navCreativos: 'Criativos',
    lsVsl: "ls ./vsl/",
    lsCreativos: 'ls ./criativos/',
    comingSoon: 'Em breve',
    newProject: 'Novo projeto',
    footer: 'CTR Labs © 2025 — direct response video editing',
    files: 'arquivos',
    backToHome: 'Voltar',
    noVideos: 'Nenhum vídeo adicionado ainda.',
    sectionVsl: "VSL's",
    sectionCreativos: 'Criativos',
    whatsapp: 'Fale conosco no WhatsApp',
  },
  en: {
    headline: 'Video editing company focused on the direct response market — agility, quality, and commitment with every client.',
    navVsl: "VSL's",
    navCreativos: 'Creatives',
    lsVsl: 'ls ./vsl/',
    lsCreativos: 'ls ./creatives/',
    comingSoon: 'Coming soon',
    newProject: 'New project',
    footer: 'CTR Labs © 2025 — direct response video editing',
    files: 'files',
    backToHome: 'Back',
    noVideos: 'No videos added yet.',
    sectionVsl: "VSL's",
    sectionCreativos: 'Creatives',
    whatsapp: 'Talk to us on WhatsApp',
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('pt')
  const t = translations[lang]
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
