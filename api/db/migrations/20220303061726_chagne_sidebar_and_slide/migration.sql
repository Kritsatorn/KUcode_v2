/*
  Warnings:

  - You are about to drop the `SidebarScript` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SidebarScript";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SlideScript" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL,
    "PageNumber" INTEGER NOT NULL,
    "learningId" INTEGER,
    CONSTRAINT "SlideScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SideBarScript" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "learningId" INTEGER,
    CONSTRAINT "SideBarScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
