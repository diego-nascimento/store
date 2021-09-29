import { NextApiRequest, NextApiResponse } from 'next'
import { PostFactory } from '../../Factory/http/PostFactory'

export default async function handler(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  if (Request.method === 'POST') {
    const login: string = Request.body.login
    const password: string = Request.body.password

    const api = PostFactory()
    const response = await api.handle({
      url: `${process.env.APIURL}/auth/local`,
      body: {
        identifier: login,
        password: password,
      },
    })

    return Response.json(response.body)
  }
}
