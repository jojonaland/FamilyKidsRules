'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { upsertRegle, RegleData } from '@/app/regles/actions/upsertRegle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
  regle?: RegleData
}

export default function RegleForm({ regle }: Props) {
  const [manquement, setManquement] = useState(regle?.manquement ?? '')
  const [punition, setPunition] = useState(regle?.punition ?? '')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    startTransition(async () => {
      await upsertRegle({
        id: regle?.id,
        manquement,
        punition,
      })
      //router.push('/regles')  // redirection après submit
      router.push('/')
    })
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 border rounded bg-white max-w-md">
      <div>
        <Label htmlFor="manquement">Manquement</Label>
        <Input
          id="manquement"
          type="text"
          value={manquement}
          onChange={e => setManquement(e.target.value)}
          placeholder="Manquement"
          required
        />
      </div>

      <div>
        <Label htmlFor="punition">Punition</Label>
        <Input
          id="punition"
          type="text"
          value={punition}
          onChange={e => setPunition(e.target.value)}
          placeholder="Punition"
          required
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={isPending}>
          {regle ? 'Modifier' : 'Créer'}
        </Button>
      </div>
    </form>
  )
}
