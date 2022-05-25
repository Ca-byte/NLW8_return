import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface onFeedbackTypeChangedProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged} : onFeedbackTypeChangedProps){
    return(
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value])=> {
                    return(
                        <button
                        className="dark:bg-zinc-700 bg-zinc-100 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent dark:focus:border-brand-500 focus:border-brand-600 focus:outline-none drop-shadow-md"
                        key={key}
                        type="button"
                        onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt}/>
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}