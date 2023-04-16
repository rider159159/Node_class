export const successHandler = (res: any, data?: Object) => {
  if(data) {
    res.send({
      message: 'success',
      status: true,
      data
    })
    return
  }
  res.send({
    message: 'success',
    status: true,
  })
}