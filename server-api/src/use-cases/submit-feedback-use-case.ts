import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?:string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,

    ){}
    async execute(request : SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if(!type) {
            throw new Error('Type is required.')
        }

        if(!comment) {
            throw new Error('Comment is required.')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('invalid screeshot format.')
        }
        
        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
              
        })
        await this.mailAdapter.sendMail({
            subject:'New Feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Feedback type: ${type}</p>`,
                `<p>Comment: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}