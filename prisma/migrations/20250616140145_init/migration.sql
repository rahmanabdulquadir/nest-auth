-- CreateEnum
CREATE TYPE "SellerRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sellerRequest" "SellerRequestStatus" DEFAULT 'PENDING',
ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';
