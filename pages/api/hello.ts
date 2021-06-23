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
  let balance = await binance.balance(function (error: Error, balances: any) {
    console.log('balances()', balances)
    if (typeof balances.ETH !== 'undefined') {
      console.log('ETH balance: ', balances.ETH.available)
    }
  })
  res.status(200).json(balance)
}
