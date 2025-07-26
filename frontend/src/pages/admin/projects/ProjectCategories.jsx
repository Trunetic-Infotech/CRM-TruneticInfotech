import React, { useState } from 'react';
import { Plus, Edit, Trash2, FolderOpen } from 'lucide-react';

const ProjectCategories = () => {
  const [categories, setCategories] = useState([
    {
      id: '1',
      name: 'Web Development',
      description: 'Projects related to websites and web apps',
      color: '#3B82F6',
      projectCount: 5,
    },
    {
      id: '2',
      name: 'Mobile Apps',
      description: 'Projects for iOS and Android platforms',
      color: '#10B981',
      projectCount: 3,
    },
    {
      id: '3',
      name: 'UI/UX Design',
      description: 'Design-focused projects for interfaces',
      color: '#8B5CF6',
      projectCount: 2,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#3B82F6'
  });

  const colorOptions = [
    { value: '#3B82F6', name: 'Blue' },
    { value: '#10B981', name: 'Green' },
    { value: '#8B5CF6', name: 'Purple' },
    { value: '#F59E0B', name: 'Yellow' },
    { value: '#EF4444', name: 'Red' },
    { value: '#06B6D4', name: 'Cyan' },
    { value: '#84CC16', name: 'Lime' },
    { value: '#F97316', name: 'Orange' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingCategory) {
      setCategories(prev => prev.map(category =>
        category.id === editingCategory.id
          ? { ...category, ...formData }
          : category
      ));
    } else {
      const newCategory = {
        id: Date.now().toString(),
        projectCount: 0,
        ...formData
      };
      setCategories(prev => [...prev, newCategory]);
    }

    handleCloseModal();
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      color: category.color
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setCategories(prev => prev.filter(category => category.id !== id));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({ name: '', description: '', color: '#3B82F6' });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Project Categories</h1>
          <p className="text-gray-600 mt-1">Organize projects by categories for better management</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FolderOpen className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
            <p className="text-sm text-gray-600">Total Categories</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FolderOpen className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {categories.reduce((sum, cat) => sum + cat.projectCount, 0)}
            </p>
            <p className="text-sm text-gray-600">Total Projects</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FolderOpen className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(categories.reduce((sum, cat) => sum + cat.projectCount, 0) / categories.length) || 0}
            </p>
            <p className="text-sm text-gray-600">Avg per Category</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={() => handleEdit(category)}
                    className="p-1 text-blue-600 hover:bg-blue-100 rounded"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Projects</span>
                <span
                  className="inline-flex px-3 py-1 text-sm font-semibold rounded-full text-white"
                  style={{ backgroundColor: category.color }}
                >
                  {category.projectCount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {editingCategory ? 'Edit Category' : 'Add Category'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter category name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter description"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, color: color.value }))}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        formData.color === color.value
                          ? 'border-gray-400 scale-110'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingCategory ? 'Update' : 'Add'} Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCategories;