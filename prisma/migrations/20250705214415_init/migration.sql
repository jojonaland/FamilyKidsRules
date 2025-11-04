-- CreateTable
CREATE TABLE "Regle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "manquement" TEXT NOT NULL,
    "punition" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
