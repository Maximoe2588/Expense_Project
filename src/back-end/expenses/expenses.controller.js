const knex = require('knex'); 
const db = knex(); 

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await db.select().from('expenses'); 
    res.json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving expenses' });
  }
};

const createExpense = async (req, res) => {
  const { amount, description, category, date } = req.body;
  try {
    const newExpense = await db('expenses').insert({
      amount,
      description,
      category,
      date,
    }); 
    res.json({ id: newExpense[0], message: 'Expense created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating expense' });
  }
};

const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { amount, description, category, date } = req.body;
  try {
    await db('expenses').where({ id }).update({
      amount,
      description,
      category,
      date,
    }); 
    res.json({ message: 'Expense updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating expense' });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await db('expenses').where({ id }).del(); 
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting expense' });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
};
