import { postController } from '../controllers/post'
import { IncomingMessage, ServerResponse } from 'http'
import { errorHandler } from '../utils/errorHandler'
import { HEADERS } from '../utils/header'

export const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req
  let body = ''

  req.on('data', (chunk: string) => {
    body += chunk
  })

  req.on('end', async () => {
    if(url?.includes('/posts')) {  
      switch (method) {
        case 'GET':
          postController.getAll(res)
          break
        case 'POST':
          postController.create(res, body)
          break
        case 'PATCH':
          postController.update(res, body)
          break
        case 'DELETE':
          if (url === '/posts') {
            // 刪除全部
            postController.deleteAll(res)
          } else {
            // 刪除單筆
            const _id = req.url?.split('/').pop() || ''
            postController.deleteById(res, _id)
          }
          break
        case 'OPTIONS':
          res.writeHead(200, HEADERS)
          res.end()
          break
      }
    } else {
      errorHandler(res, '錯誤路由')
    }
  })
}