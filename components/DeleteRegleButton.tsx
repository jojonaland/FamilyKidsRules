'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { deleteRegle } from '../app/regles/actions/deleteRegle'

export default function DeleteRegleButton({ id }: { id: string }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  async function onDelete() {
    if (!confirm('Supprimer cette règle ?')) return

    startTransition(async () => {
      await deleteRegle(id)
      router.refresh()
    })
  }

  return (
    <button
      onClick={onDelete}
      disabled={isPending}
      aria-label="Supprimer"
      title="Supprimer"
      className="text-red-600 hover:text-red-800 text-xl"
    >
      ❌
    </button>
  )
}
