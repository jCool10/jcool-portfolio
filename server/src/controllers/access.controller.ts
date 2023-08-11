import { NextFunction, Request, Response } from 'express'
import { SuccessResponse } from '~/core/success.response'
import { IKeyToken } from '~/models/keytoken.model'
import AccessService from '~/services/access.service'

declare module 'express' {
  interface Request {
    keyStore?: IKeyToken
  }
}

class AccessController {
  static login = async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({ metadata: await AccessService.login(req.body) }).send(res)
  }

  static signup = async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({ metadata: await AccessService.signup(req.body) }).send(res)
  }

  static logout = async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({
      message: 'Logout Success!',
      metadata: await AccessService.logout(req.keyStore)
    }).send(res)
  }
}

export default AccessController
