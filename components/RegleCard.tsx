'use client'

import { useRouter } from 'next/navigation'
import DeleteRegleButton from './DeleteRegleButton'

interface RegleCardProps {
  regle: {
    id: string
    manquement: string
    punition: string
  }
}

export default function RegleCard({ regle }: RegleCardProps) {
  const router = useRouter()

  return (
    <div className="flex justify-between items-center border p-4 rounded shadow-sm bg-white">
      <div>
        <p className="font-semibold">{regle.manquement}</p>
        <p className="text-sm text-gray-600">{regle.punition}</p>
      </div>
      <div className="flex gap-4 items-center">
        {/* Bouton Modifier - redirige vers la page d'édition */}
        <button
          aria-label="Modifier"
          title="Modifier"
          className="text-blue-600 hover:text-blue-800 text-xl"
          onClick={() => router.push(`/regles/${regle.id}/edit`)}
        >
          ✏️
        </button>

        {/* Bouton Supprimer */}
        <DeleteRegleButton id={regle.id} />
      </div>
    </div>
  )
}
