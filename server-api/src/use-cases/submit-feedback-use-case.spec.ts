import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeebackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeebackSpy},
    {sendMail: sendMailSpy},
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async()=> {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'feedback comment',
            screenshot: 'data:image/png;base64,qrtytyuu1558632',
        })).resolves.not.toThrow();
        expect(createFeebackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
});

describe('Submit feedback', () => {
    it('should not be able to submit a feedback without type', async()=> {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'feedback comment',
            screenshot: 'data:image/png;base64,qrtytyuu1558632',
        })).rejects.toThrow();
    });
});

describe('Submit feedback', () => {
    it('should not be able to submit a feedback without comment', async()=> {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,qrtytyuu1558632',
        })).rejects.toThrow();
    });
});

describe('Submit feedback', () => {
    it('should not be able to submit a feedback with invalid format', async()=> {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'feedback comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
});