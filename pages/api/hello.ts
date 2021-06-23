import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-ignore
import Binance from 'node-binance-api'
require('dotenv').config()
const binance = new Binance().options({
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.APISECRET,
})
type Data = {
  hola: string
}
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let hola = await binance.prices()

  res.status(200).json(hola)
}
