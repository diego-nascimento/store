import { NextApiRequest, NextApiResponse } from 'next'
import { updateStatusTransactionFactory } from '../../../Factory/updatePedidoFactory'
import { IUpdateStatusTransacionEntry } from '../../../domain/useCases/Transactions/updateStatusTransaction'
import { updateStatusMessageFactory } from '../../../Factory/statusUpdateEmailFactory'

export default async function handler (
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  if (Request.method === 'POST') {
    try {
      const { id, currentStatus } = Request.body
      const updatePedido = updateStatusTransactionFactory()
      const data: IUpdateStatusTransacionEntry = {
        idTransaction: id,
        status: currentStatus
      }
      const response = await updatePedido.update(data)
      const updateStatus = updateStatusMessageFactory()
      await updateStatus.send({
        email: response.email,
        idTransaction: response.idTransaction,
        method: response.method,
        status: response.status
      })
      if (response) {
        return Response.status(200).json({ message: 'ok' })
      }
    } catch (error) {
      return Response.status(500).json({
        message: 'error'
      })
    }
  }
}
