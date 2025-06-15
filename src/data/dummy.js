import { v7 as uuidv7 } from 'uuid';

// Data dummy untuk User
let users = [
    {
        id: uuidv7(),
        username: 'adminuser',
        email: 'admin@klinik.com',
        password: '$2a$10$f3WnJ9qN.A9K/f/R4p8.9.P8.z8.J8.z8.J8.z8.J8.J8.J8', // 'password123' hashed
        role: 'admin',
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        username: 'vetdokter',
        email: 'vet@klinik.com',
        password: '$2a$10$f3WnJ9qN.A9K/f/R4p8.9.P8.z8.J8.z8.J8.z8.J8.J8.J8', // 'password123' hashed
        role: 'vet',
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        username: 'resepsionis',
        email: 'resepsionis@klinik.com',
        password: '$2a$10$f3WnJ9qN.A9K/f/R4p8.9.P8.z8.J8.z8.J8.z8.J8.J8.J8', // 'password123' hashed
        role: 'receptionist',
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        username: 'ownerpetra',
        email: 'owner@klinik.com',
        password: '$2a$10$f3WnJ9qN.A9K/f/R4p8.9.P8.z8.J8.z8.J8.z8.J8.J8.J8', // 'password123' hashed
        role: 'user',
        createdAt: new Date(),
    },
];

// Data dummy untuk Owner
let owners = [
    {
        id: uuidv7(),
        fullName: 'Budi Santoso',
        address: 'Jl. Merpati No. 10',
        phone: '081234567890',
        email: 'budi@mail.com',
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        fullName: 'Siti Aminah',
        address: 'Jl. Anggrek No. 5',
        phone: '085678901234',
        email: 'siti@mail.com',
        createdAt: new Date(),
    },
];

// Data dummy untuk Patient (Hewan)
let patients = [
    {
        id: uuidv7(),
        name: 'Milo',
        species: 'Kucing',
        breed: 'Persian',
        gender: 'Male',
        dateOfBirth: '2022-01-15',
        ownerId: owners[0].id, // Milo milik Budi
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        name: 'Buddy',
        species: 'Anjing',
        breed: 'Golden Retriever',
        gender: 'Male',
        dateOfBirth: '2021-05-20',
        ownerId: owners[0].id, // Buddy milik Budi
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        name: 'Luna',
        species: 'Kucing',
        breed: 'Ragdoll',
        gender: 'Female',
        dateOfBirth: '2023-03-10',
        ownerId: owners[1].id, // Luna milik Siti
        createdAt: new Date(),
    },
];

// Data dummy untuk Medication
let medications = [
    {
        id: uuidv7(),
        name: 'Antibiotik A',
        description: 'Untuk infeksi bakteri',
        stock: 100,
        unit: 'tablet',
        price: 5000,
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        name: 'Vitamin Kucing',
        description: 'Suplemen vitamin untuk kucing',
        stock: 50,
        unit: 'botol',
        price: 35000,
        createdAt: new Date(),
    },
];

// Data dummy untuk Service (layanan klinik)
let services = [
    {
        id: uuidv7(),
        name: 'Konsultasi Dokter',
        description: 'Pemeriksaan umum dan konsultasi dengan dokter hewan',
        price: 75000,
        createdAt: new Date(),
    },
    {
        id: uuidv7(),
        name: 'Vaksinasi Rabies',
        description: 'Pemberian vaksin rabies',
        price: 150000,
        createdAt: new Date(),
    },
];

export { users, owners, patients, medications, services };
