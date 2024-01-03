// Seed data for Admins
const admins = [
  {
    name: "Admin1",
    email: "admin1@example.com",
    password: "admin1password",
    role: "Admin",
    schoolName: "School A",
  },
  // Add more admins if needed
];

// Seed data for Classes
const classes = [
  {
    ClassName: "Class 101",
    schoolId: 1, // Assuming the school ID relates to the Admin with ID 1
  },
  {
    ClassName: "Class 102",
    schoolId: 1,
  },
  // Add more classes for other schools/admins
];

// Seed data for Subjects
const subjects = [
  {
    subName: "Mathematics",
    subCode: "MATH101",
    sessions: "Session A",
    schoolId: 1,
  },
  {
    subName: "Science",
    subCode: "SCI101",
    sessions: "Session B",
    schoolId: 1,
  },
  // Add more subjects as needed
];

// Seed data for Students
const students = [
  {
    name: "Student 1",
    rollNum: 0o1,
    password: "student1password",
    ClassId: 1, // Assuming Class ID 1 refers to Class 101
    schoolId: 1,
    role: "Student",
  },
  {
    name: "Student 2",
    rollNum: 0o2,
    password: "student2password",
    ClassId: 2, // Assuming Class ID 2 refers to Class 102
    schoolId: 1,
    role: "Student",
  },
  // Add more students for different classes/schools
];

// Seed data for Teachers
const teachers = [
  {
    name: "Teacher A",
    email: "teacherA@example.com",
    password: "teacherApassword",
    role: "Teacher",
    schoolId: 1,
  },
  {
    name: "Teacher B",
    email: "teacherB@example.com",
    password: "teacherBpassword",
    role: "Teacher",
    schoolId: 1,
  },
  // Add more teachers for other schools/admins
];

// Return all seed data for Prisma seeding
const seedData = {
  admins,
  classes,
  subjects,
  students,
  teachers,
};

module.exports = seedData;
