import { ServerResponse } from 'http'
import { HEADERS } from './header'

export const successHandler = (res: ServerResponse, data?: Object) => {
  res.writeHead(404, HEADERS)
  res.write(JSON.stringify({
    status: 'Success',
    code:200,
    data
  }))
  res.end()
}