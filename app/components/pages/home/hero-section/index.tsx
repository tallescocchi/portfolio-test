'use client'

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb'

import { TechBadge } from '@/app/components/tech-badge'
import { Button } from '@/app/components/button'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://linkedin.com/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://youtube.com/',
    icon: <TbBrandYoutube />,
  },
  {
    url: 'https://whatsapp.com/',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Talles Cocchi</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Meu nome é Talles, tenho 38 anos. Sou desenvolvedor Web Front-End
            com foco em UX/UI. Apaixonado por tecnologia e por criar soluções
            que possam impactar positivamente a vida das pessoas. Sou
            comprometido com a excelência e com a busca constante por
            atualizações e aprimoramentos tecnológicos. Sempre atento às
            tendências do mercado, busco utilizar as mais modernas ferramentas e
            metodologias para entregar projetos que superem as expectativas e
            que atendam às necessidades específicas.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge key={index} name="ReactJs" />
            ))}
          </div>
          <div className="flex sm:items-center sm:gap-5 mt-6 lg:mt-10 flex-col sm:flex-row">
            <Button className="shadow-button w-max" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  key={`contact-${index}`}
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Talles"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
