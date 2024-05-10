const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const doctors = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password1',
      gender: 'Male',
      yearsOfExperience: 10,
      specialization: 'Cardiology',
      practicingCity: 'New York',
      contactInfo: '1234567890',
      polyclinic: 'Polyclinic 1',
      doctorType: 'PSYCHOLOGIST',
      subscriptionTier: 1,
      isAvailableForAppointments: true,
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      password: 'password2',
      gender: 'Female',
      yearsOfExperience: 15,
      specialization: 'Neurology',
      practicingCity: 'Los Angeles',
      contactInfo: '0987654321',
      polyclinic: 'Polyclinic 2',
      doctorType: 'PSYCHOLOGIST',
      subscriptionTier: 2,
      isAvailableForAppointments: false,
    },
  ];

  for (let doctor of doctors) {
    doctor.password = await bcrypt.hash(doctor.password, 10);
  }

  await prisma.doctor.createMany({
    data: doctors,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
