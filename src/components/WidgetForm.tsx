import { CloseButton } from './CloseButton'
import bugImgUrl from '../assets/emoji.svg'
import ideaImgUrl from '../assets/idea.svg'
import thoughtImgUrl from '../assets/thought.svg'

const feedbackTypes = {
  BUG: {
    title: 'Bug',
    image: {
      src: bugImgUrl,
      alt: 'image bug',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImgUrl,
      alt: 'image bulb',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImgUrl,
      alt: 'image cloud',
    },
  },
}

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6 ">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-600 focus:outline-none"
          >
            <img
              src={value.image.src}
              alt={value.image.alt}
              className="w-12 h-12"
            />
            <span className="text-xl leading-6">{value.title}</span>
          </button>
        ))}
      </div>
      <footer className="text-xs text-neutral-400">
        Desenvolvido por{' '}
        <a className="underline-offset-2" href="https://github.com/Gilles30">
          * Lorison Gilles *
        </a>
      </footer>
    </div>
  )
}
// End of snippet
// ---------------------------------------------------------------
// Language: typescript
