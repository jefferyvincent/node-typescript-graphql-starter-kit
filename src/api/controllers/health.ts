import { TestModel } from '../../models'
import { Request, Response } from 'express'

/**
 * End-point to test the service
 *
 * @param {Request} _request simple http request for test
 * @param {Response} response http response
 * @returns {Promise<Response>} returns ok as Data
 * and 200 as status || 500 if there's an error
 */

function health(_request: Request, response: Response) {
    try {
        response.status(200).json({
            data: 'OK',
        })
    } catch (error: any) {
        const { message } = error
        response.status(500).json({
            error: message,
        })
    }
}


// eslint-disable-next-line import/prefer-default-export
export { health }
