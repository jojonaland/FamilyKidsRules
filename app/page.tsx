import RegleCard from '@/components/RegleCard'
import AddRegleButton from '@/components/AddRegleButton'
import { prisma } from '@/lib/prisma'

export default async function ReglesPage() {
  const regles = await prisma.regle.findMany()

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Règles de la maison</h1>

      <div className="flex flex-col gap-4">
        {regles.map(regle => (
          <RegleCard key={regle.id} regle={regle} />
        ))}
      </div>

      <div className="mt-12">
        <AddRegleButton />
      </div>
    </main>
  )
}