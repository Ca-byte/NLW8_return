import express from 'express'
import { NodeMaileirMailAdapter } from './adapters/nodemailer/nodemailer-mail-adpter';

import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()


routes.post('/feedbacks', async(req, res)=> {
    const { type, comment, screenshot } = req.body;

    try {
        const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodeMaileirMailAdapter = new NodeMaileirMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodeMaileirMailAdapter
    ) 

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })


    return res.status(201).send();

    }catch (err){
        console.error(err);

        return res.status(500).send();
    }

});