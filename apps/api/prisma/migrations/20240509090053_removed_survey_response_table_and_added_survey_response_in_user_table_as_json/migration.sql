/*
  Warnings:

  - You are about to drop the column `surveyResponseId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `SurveyResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SurveyResponse" DROP CONSTRAINT "SurveyResponse_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "surveyResponseId",
ADD COLUMN     "surveyResponse" JSONB;

-- DropTable
DROP TABLE "SurveyResponse";
