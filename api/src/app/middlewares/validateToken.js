export default async function validateToken(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "").trim();
  if (!token) return res.status(422).send("Token not found.");
  res.locals.token = token;

  next();
}
