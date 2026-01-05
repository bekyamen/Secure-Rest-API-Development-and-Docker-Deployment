import prisma from "../prisma.js";

// CREATE
export const createCustomer = async (req, res) => {
  const customer = await prisma.customer.create({
    data: { ...req.body, userId: req.user.id },
  });
  res.json(customer);
};

// READ
export const getCustomers = async (req, res) => {
  const customers = await prisma.customer.findMany({
    where: { userId: req.user.id },
  });
  res.json(customers);
};

// UPDATE
export const updateCustomer = async (req, res) => {
  const updated = await prisma.customer.updateMany({
    where: { id: req.params.id, userId: req.user.id },
    data: req.body,
  });

  if (!updated.count) return res.status(403).json({ message: "Access denied" });
  res.json({ message: "Customer updated" });
};

// DELETE
export const deleteCustomer = async (req, res) => {
  const deleted = await prisma.customer.deleteMany({
    where: { id: req.params.id, userId: req.user.id },
  });

  if (!deleted.count) return res.status(403).json({ message: "Access denied" });
  res.json({ message: "Customer deleted" });
};
