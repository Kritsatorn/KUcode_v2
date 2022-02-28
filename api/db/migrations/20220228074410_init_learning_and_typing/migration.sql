-- CreateTable
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Typing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "css" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "js" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TypingScript" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "learningId" INTEGER,
    "typingId" INTEGER NOT NULL,
    CONSTRAINT "TypingScript_typingId_fkey" FOREIGN KEY ("typingId") REFERENCES "Typing" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TypingScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Learning" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");
