import { ServerResponse } from 'http'
import { HEADERS } from './header'

export const errorHandler = (res: ServerResponse, e?: any) => {
  res.writeHead(404, HEADERS)
  res.write(JSON.stringify({
    status: 'Failed',
    code:404,
    message: e?.message || e
  }))
  res.end()
}