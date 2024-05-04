-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "DoctorApprovalStatus" AS ENUM ('PENDING', 'INTHERAPY', 'DECLINED');

-- CreateEnum
CREATE TYPE "DoctorType" AS ENUM ('PSYCHOLOGIST', 'PSYCHIATRIST');

-- CreateTable
CREATE TABLE "SurveyResponse" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "gender" TEXT,
    "therapyPreference" TEXT,
    "beenToPsychologist" BOOLEAN,
    "reasonForHelp" TEXT,
    "expectations" TEXT,
    "experiencingAnxiety" BOOLEAN,
    "takingMedication" BOOLEAN,
    "chronicPain" BOOLEAN,
    "financialStatus" TEXT,
    "sleepHabits" TEXT,
    "doctorPreferences" TEXT,

    CONSTRAINT "SurveyResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateOfBirth" TIMESTAMP(3),
    "receiveNotifications" BOOLEAN NOT NULL DEFAULT false,
    "preferredCity" TEXT,
    "preferredCounty" TEXT,
    "profilePhoto" TEXT,
    "streak" INTEGER NOT NULL DEFAULT 0,
    "surveyResponseId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "yearsOfExperience" INTEGER NOT NULL,
    "specialization" TEXT NOT NULL,
    "practicingCity" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "polyclinic" TEXT NOT NULL,
    "subscriptionTier" INTEGER NOT NULL DEFAULT 0,
    "doctorType" "DoctorType" NOT NULL,
    "isAvailableForAppointments" BOOLEAN NOT NULL DEFAULT true,
    "availableTimes" JSONB,
    "doctorSurvey" JSONB,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'PENDING',
    "price" DOUBLE PRECISION,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FactorCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FactorCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfluencingFactor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" INTEGER NOT NULL,
    "journalId" INTEGER,

    CONSTRAINT "InfluencingFactor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entryText" TEXT,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mood" (
    "id" SERIAL NOT NULL,
    "emoji" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Mood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoodEntry" (
    "id" SERIAL NOT NULL,
    "journalId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "moodId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MoodEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreathingExercise" (
    "id" SERIAL NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "exerciseDescription" TEXT,
    "exercisePhoto" TEXT,

    CONSTRAINT "BreathingExercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorUser" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isDoctorApprovedByUser" "DoctorApprovalStatus" NOT NULL,
    "journalAccess" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "DoctorUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" TEXT NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SurveyResponse_userId_key" ON "SurveyResponse"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FactorCategory_name_key" ON "FactorCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InfluencingFactor_name_key" ON "InfluencingFactor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MoodEntry_journalId_key" ON "MoodEntry"("journalId");

-- AddForeignKey
ALTER TABLE "SurveyResponse" ADD CONSTRAINT "SurveyResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfluencingFactor" ADD CONSTRAINT "InfluencingFactor_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "FactorCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfluencingFactor" ADD CONSTRAINT "InfluencingFactor_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoodEntry" ADD CONSTRAINT "MoodEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoodEntry" ADD CONSTRAINT "MoodEntry_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoodEntry" ADD CONSTRAINT "MoodEntry_moodId_fkey" FOREIGN KEY ("moodId") REFERENCES "Mood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorUser" ADD CONSTRAINT "DoctorUser_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorUser" ADD CONSTRAINT "DoctorUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
