export function handdleError() {
  console.log(error);
  if (error) {
    return res.status(error.status).send(error.message);
  }
  res.status(500);
}
