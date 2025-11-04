'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function AddRegleButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push('/regles/new')}
      className="inline-flex items-center gap-2"
    >
      ➕ Ajouter une nouvelle règle
    </Button>
  )
}
