import React, { useState } from 'react';
import { Save, X, Calendar, DollarSign, Users, Tag } from 'lucide-react';

const CreateProject = ({ editingProject = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: editingProject?.name || '',
    description: editingProject?.description || '',
    category: editingProject?.category || '',
    clientName: editingProject?.clientName || '',
    startDate: editingProject?.startDate || '',
    endDate: editingProject?.endDate || '',
    budget: editingProject?.budget?.toString() || '',
    priority: editingProject?.priority || 'Medium',
    status: editingProject?.status || 'Planning',
    projectManager: editingProject?.projectManager || '',
    teamMembers: editingProject?.teamMembers || [],
    technologies: editingProject?.technologies?.join(', ') || ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Project name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.clientName.trim()) newErrors.clientName = 'Client name is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (!formData.budget) newErrors.budget = 'Budget is required';
    if (!formData.projectManager) newErrors.projectManager = 'Project manager is required';

    if (formData.startDate && formData.endDate && formData.startDate >= formData.endDate) {
      newErrors.endDate = 'End date must be after start date';
    }

    if (formData.budget && parseFloat(formData.budget) <= 0) {
      newErrors.budget = 'Budget must be greater than 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const projectData = {
      ...formData,
      budget: parseFloat(formData.budget),
      technologies: formData.technologies
        .split(',')
        .map((tech) => tech.trim())
        .filter((tech) => tech),
      id: editingProject?.id || Date.now().toString(),
      clientId: editingProject?.clientId || Date.now().toString(),
      progress: editingProject?.progress || 0,
      createdAt: editingProject?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    onSave(projectData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleTeamMemberToggle = (memberId) => {
    const updatedMembers = formData.teamMembers.includes(memberId)
      ? formData.teamMembers.filter((id) => id !== memberId)
      : [...formData.teamMembers, memberId];
    handleInputChange('teamMembers', updatedMembers);
  };

  const employees = [
    { id: '1', name: 'Amar Kalel', position: 'Intern' },
    { id: '2', name: 'Sairaj Shinde', position: 'Developer' },
    { id: '3', name: 'Asad Shaikh', position: 'Project Manager' }
  ];

  const categories = [
    { id: '1', name: 'Web Development' },
    { id: '2', name: 'Mobile App' },
    { id: '3', name: 'Cloud Solutions' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {editingProject ? 'Edit Project' : 'Create New Project'}
          </h1>
          <p className="text-gray-600 mt-1">
            {editingProject
              ? 'Update project information'
              : 'Enter project details to create a new project'}
          </p>
        </div>
        <button
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Tag className="w-5 h-5 mr-2" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter project name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter project description"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name *</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.clientName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter client name"
                />
                {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Planning">Planning</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          {/* Timeline & Budget */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Timeline & Budget
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.startDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date *</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.endDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget (₹) *</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.budget ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0"
                  />
                </div>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>
            </div>
          </div>

          {/* Team Management */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Team Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Manager *</label>
                <select
                  value={formData.projectManager}
                  onChange={(e) => handleInputChange('projectManager', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.projectManager ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Project Manager</option>
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.name}
                    </option>
                  ))}
                </select>
                {errors.projectManager && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectManager}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Team Members</label>
                <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-lg p-3 space-y-2">
                  {employees.map((emp) => (
                    <label key={emp.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.teamMembers.includes(emp.id)}
                        onChange={() => handleTeamMemberToggle(emp.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {emp.name} - {emp.position}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => handleInputChange('technologies', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="React, Node.js, MongoDB, AWS"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter technologies separated by commas (e.g., React, Node.js, MongoDB)
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                {editingProject ? 'Update Project' : 'Create Project'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
