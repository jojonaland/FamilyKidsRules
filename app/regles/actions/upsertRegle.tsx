'use server'

import { prisma } from '@/lib/prisma'

export interface RegleData {
  id?: string
  manquement: string
  punition: string
}

export async function upsertRegle(data: RegleData) {
  if (data.id) {
    // Modifier une règle existante
    await prisma.regle.update({
      where: { id: data.id },
      data: {
        manquement: data.manquement,
        punition: data.punition,
      },
    })
  } else {
    // Créer une nouvelle règle
    await prisma.regle.create({
      data: {
        manquement: data.manquement,
        punition: data.punition,
      },
    })
  }
}
