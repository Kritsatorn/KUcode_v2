-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Learning" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "audioURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    CONSTRAINT "Learning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlideScript" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL,
    "PageNumber" INTEGER NOT NULL,
    "learningId" INTEGER,

    CONSTRAINT "SlideScript_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SideBarScript" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "learningId" INTEGER,

    CONSTRAINT "SideBarScript_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CursorScript" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL,
    "hidden" BOOLEAN NOT NULL,
    "learningId" INTEGER,

    CONSTRAINT "CursorScript_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypingScript" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "timeDiff" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "js" TEXT NOT NULL,
    "learningId" INTEGER,

    CONSTRAINT "TypingScript_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "learningId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Learning" ADD CONSTRAINT "Learning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlideScript" ADD CONSTRAINT "SlideScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SideBarScript" ADD CONSTRAINT "SideBarScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursorScript" ADD CONSTRAINT "CursorScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypingScript" ADD CONSTRAINT "TypingScript_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learning"("id") ON DELETE SET NULL ON UPDATE CASCADE;
