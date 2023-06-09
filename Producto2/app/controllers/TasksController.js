const Task = require("../models/Task");

exports.getTasks = async () => {
  try {
    return await Task.find().populate("week");
  } catch (err) {
    console.error(err);
    throw new Error("Error obteniendo tarea");
  }
};

exports.getTaskById = async (id) => {
  try {
    return await Task.findById(id).populate("week");
  } catch (err) {
    console.error(err);
    throw new Error("Error obteniendo tarea");
  }
};

exports.createTask = async (taskData) => {
  try {
    const newTask = new Task(taskData);
    return await newTask.save();
  } catch (err) {
    console.error(err);
    throw new Error("Error creando tareas");
  }
};

exports.updateTaskById = async (id, updatedData) => {
  try {
    return await Task.findByIdAndUpdate(id, updatedData, { new: true });
  } catch (err) {
    console.error(err);
    throw new Error("Error actualizacion de tareas");
  }
};

exports.deleteTaskById = async (id) => {
  try {
    await Task.findByIdAndRemove(id);
  } catch (err) {
    console.error(err);
    throw new Error("Error eliminando tareas");
  }
};
