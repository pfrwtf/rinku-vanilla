import { FC } from 'hono/jsx'

export const LandingPage: FC = () => (
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>URL Shortener</title>
    </head>
    <body>
      <h1>URL Shortener</h1>
      <p>Please provide a short URL key.</p>
    </body>
  </html>
)

export const renderLandingPage = () => <LandingPage />