// prisma/seed.ts
const { PrismaClient } = require('../lib/generated/prisma')
const prisma = new PrismaClient()

async function main() {
  await prisma.regle.createMany({
    data: [
      { manquement: 'Parle mal à un adulte', punition: '10 min sans écran' },
      { manquement: 'Ne range pas ses affaires', punition: 'Range tout seul + excuse' },
    ],
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
