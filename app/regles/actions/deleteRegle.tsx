'use server'

import { prisma } from '@/lib/prisma'

export async function deleteRegle(id: string) {
  await prisma.regle.delete({ where: { id } })
  return { success: true }
}
