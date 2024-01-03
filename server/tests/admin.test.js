const request = require("supertest");
const app = require("../../app");
describe("Admin API endpoints", () => {
  let createdAdminId; // To store the ID of the created admin for further testing

  it("should create a new admin", async () => {
    const res = await request(app).post("/api/admins").send({
      name: "Test Admin",
      email: "testadmin@example.com",
      password: "testpassword",
      schoolName: "Test School",
      // Other fields as needed
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id");
    createdAdminId = res.body.data.id; // Store the created admin's ID for further tests
  });

  it("should get admin by ID", async () => {
    const res = await request(app).get(`/api/admins/${createdAdminId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", createdAdminId);
    // Assert other properties based on the response
  });

  it("should update an admin", async () => {
    const res = await request(app).put(`/api/admins/${createdAdminId}`).send({
      name: "Updated Test Admin",
      // Update other fields as needed
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", createdAdminId);
    // Assert other properties based on the updated response
  });

  it("should delete an admin", async () => {
    const res = await request(app).delete(`/api/admins/${createdAdminId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Admin deleted successfully");
  });
});
