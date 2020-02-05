import { Request, Response, response } from 'express';
import { Question, questionSchema } from './question.model';
import { environment } from '../../environment';
import * as request from 'request-promise';

const loadQuestions = async () => {
    const url = environment.questionsApi;
    const questions = await request.get(url, {json: true});

    return questions;

}

export const getQuestions = async (req: Request, res: Response ) => {

    const questions = await loadQuestions();
    return res.json(questions);
}

