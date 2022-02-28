/*
  Warnings:

  - You are about to drop the `Typing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `typingId` on the `TypingScript` table. All the data in the column will be lost.
  - Added the required column `audioURL` to the `Learning` table without a default value. This is not possible if the table is not empty.
  - Added the required column `css` to the `TypingScript` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html` to the `TypingScript` table without a default value. This is not possible if the table is not empty.
  - Added the required column `js` to the `TypingScript` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserExample_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Typing";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserExample";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "SidebarScript" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL,
    "PageNumber" INTEGER NOT NULL,
    "learningId" INTEGER,
    CONSTRAINT "SidebarScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CursorScript" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL,
    "hidden" BOOLEAN NOT NULL,
    "learningId" INTEGER,
    CONSTRAINT "CursorScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Learning" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "audioURL" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    CONSTRAINT "Learning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Learning" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "Learning";
DROP TABLE "Learning";
ALTER TABLE "new_Learning" RENAME TO "Learning";
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "learningId" INTEGER,
    CONSTRAINT "Image_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("id", "title", "url") SELECT "id", "title", "url" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE TABLE "new_TypingScript" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "js" TEXT NOT NULL,
    "learningId" INTEGER,
    CONSTRAINT "TypingScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_TypingScript" ("id", "learningId", "order", "timeDiff") SELECT "id", "learningId", "order", "timeDiff" FROM "TypingScript";
DROP TABLE "TypingScript";
ALTER TABLE "new_TypingScript" RENAME TO "TypingScript";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
