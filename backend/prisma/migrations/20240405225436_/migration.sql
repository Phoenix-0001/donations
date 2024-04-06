-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonationItems" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "Community" TEXT NOT NULL,
    "person" TEXT NOT NULL,
    "need" TEXT NOT NULL,

    CONSTRAINT "DonationItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
