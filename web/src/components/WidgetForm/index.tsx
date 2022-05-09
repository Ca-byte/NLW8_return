import { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },

    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
        
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
}

export type FeedbackType = keyof typeof feedbackTypes;



export function WidgetForm(){
    const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedBackType(null);
    }

    return (
        
        <div className="bg-[#27272A] p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        { feedbackSent ? (
            <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        ): (
            <>

        { !feedBackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
            
        ) : (
                <FeedbackContentStep 
                    feedbackType={feedBackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                    onFeedbackSent={() => setFeedbackSent(true) }
                />
        )

        }
            </>
        )
        }


            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline-offset-2" href="https://github.com/Ca-byte">Carol</a>
            </footer>

        </div>
    )
}