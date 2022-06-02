import { CloseButton } from '../CloseButton'
import bugImgUrl from '../../assets/emoji.svg'
import ideaImgUrl from '../../assets/idea.svg'
import thoughtImgUrl from '../../assets/thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <div>
          <FeedbackContentStep
            onFeedbackRestartRequested={handleRestartFeedback}
            feedbackType={feedbackType}
          />
        </div>
      )}
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
