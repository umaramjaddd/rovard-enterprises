"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../Redux/Slices/adminSlice";
import { addCategory, updateCategory, deleteCategory } from "../../api/adminAPI";

export default function CategoryTab({ categories }) {
  const [newCat, setNewCat] = useState({ name: "", description: "" });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();

  // Add or Update category
  const handleSave = async () => {
    if (!newCat.name) return alert("Name is required");

    try {
      if (editingId) {
        // Update
        await updateCategory(editingId, newCat, imageFile);
        setEditingId(null);
      } else {
        // Add
        await addCategory(newCat, imageFile);
      }
      setNewCat({ name: "", description: "" });
      setImageFile(null);
      dispatch(fetchCategories());
    } catch (err) {
      console.error("Error saving category:", err);
      alert("Failed to save category.");
    }
  };

  // Start editing
  const handleEdit = (cat) => {
    setEditingId(cat.id);
    setNewCat({ name: cat.name, description: cat.description || "" });
    setImageFile(cat.image);
  };

  // Delete with confirmation
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    try {
      await deleteCategory(id);
      dispatch(fetchCategories());
    } catch (err) {
      console.error("Error deleting category:", err);
      alert("Failed to delete category.");
    }
  };

  return (
    <div>
      {/* Add / Edit Form */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Category Name"
          value={newCat.name}
          onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
          className="border p-2 flex-1"
        />
        <input
          type="text"
          placeholder="Description"
          value={newCat.description}
          onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
          className="border p-2 flex-1"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="border p-2"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-amber-500 text-white rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Category List */}
      <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="flex flex-col items-center border p-2 rounded gap-2"
          >
            {cat.image ? (
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-32 object-cover rounded"
              />
            ) : (
              <div className="w-full h-32 bg-zinc-800 flex items-center justify-center text-zinc-500 rounded">
                No Image
              </div>
            )}

            <span className="font-medium">{cat.name}</span>
            <span className="text-zinc-500 text-sm">{cat.description}</span>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(cat)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(cat.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
