import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://portfolio-tutorial-2023.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FqSXcz2JdTMOPKlteRZKY&w=640&q=75"
          alt="Foto do projeto"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          BookWise
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          voluptatem quis quam exercitationem animi eos mollitia nostrum tempore
          autem explicabo quas recusandae unde atque libero, doloribus
          blanditiis similique repellendus itaque reiciendis! Quis, libero nam
          sunt enim nulla mollitia dicta modi? Recusandae harum tempore vero
          alias rem cumque odit accusantium quas.
        </p>

        <div className="flex gap-x-2 gap-y-2 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="projects/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
