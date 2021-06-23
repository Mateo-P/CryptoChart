import Binance from 'node-binance-api'
require('dotenv').config()
const binance = new Binance().options({
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.APISECRET,
})

export default async (req, res) => {
  let hola = await binance.prices()

  res.status(200).json(hola)
}
