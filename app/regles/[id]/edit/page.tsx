import RegleForm from '@/components/RegleForm'
import { prisma } from '@/lib/prisma'

interface Params {
  params: { id: string }
}

export default async function EditReglePage({ params }: Params) {
  const regle = await prisma.regle.findUnique({
    where: { id: params.id },
  })

  if (!regle) {
    return <p>Règle non trouvée</p>
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Modifier la règle</h1>
      <RegleForm regle={regle} />
    </main>
  )
}
