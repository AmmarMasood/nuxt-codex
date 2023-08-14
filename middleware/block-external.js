export default function (req, res, next) {
  const allowedOrigins = [
    'http://localhost:3000',
    'https://wor-codex.com'
  ];

  const origin = req.headers.origin || req.headers.referer;

  if (allowedOrigins.includes(origin)) {
    return next();
  }

  res.status(403).send('Forbidden');
}
