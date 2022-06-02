import { ArrowLeft } from 'phosphor-react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>
      <header>
        <button
          type="button"
          className="bottom-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.src}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] 
            min-h-[112px] w-full text-sm placeholder-zinc-400 text-zinc-200 border-1 
            border-zinc-400 bg-transparent rounded-md focus:border-brand-500 
            focus:ring-brand-500 focus:ring-1 resize-none
            focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte os detalhes do ocorrido..."
        />
      </form>
    </>
  )
}
