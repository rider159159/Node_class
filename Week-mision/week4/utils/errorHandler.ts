export const errorHandler = (res:any, err = "欄位未填寫正確，或無此 id", code = 400) => {
  res.status(code).send({
      status: false,
      message : err
  })
}
