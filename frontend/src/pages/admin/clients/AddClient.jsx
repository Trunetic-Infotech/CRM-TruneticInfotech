import React, { useState } from 'react';
import { Save, X, Upload, Building2 } from 'lucide-react';

const AddClient = ({ editingClient = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: editingClient?.name || '',
    email: editingClient?.email || '',
    phone: editingClient?.phone || '',
    company: editingClient?.company || '',
    industry: editingClient?.industry || '',
    address: editingClient?.address || '',
    city: editingClient?.city || '',
    country: editingClient?.country || '',
    clientType: editingClient?.clientType || '',
    contactPerson: editingClient?.contactPerson || '',
    website: editingClient?.website || '',
    notes: editingClient?.notes || '',
    status: editingClient?.status || 'Prospect',
    avatar: editingClient?.avatar || ''
  });

  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState(editingClient?.avatar || null);

  const industries = [
    'Technology', 'Banking & Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Real Estate', 'Consulting', 'Media & Entertainment',
    'Government', 'Non-Profit', 'Transportation', 'Energy', 'Agriculture',
    'Construction', 'Telecommunications', 'Insurance', 'Legal Services',
    'Food & Beverage', 'Automotive', 'Aerospace', 'Pharmaceuticals'
  ];

  const countries = [
    'USA', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia',
    'Japan', 'India', 'China', 'Brazil', 'Mexico', 'Netherlands',
    'Sweden', 'Norway', 'Denmark', 'Switzerland', 'Singapore', 'South Korea'
  ];

  const mockClientTypes = [
    { id: 1, name: 'Enterprise' },
    { id: 2, name: 'SMB' },
    { id: 3, name: 'Startup' },
    { id: 4, name: 'Government' },
    { id: 5, name: 'Non-Profit' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Client name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.clientType) newErrors.clientType = 'Client type is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL (include http:// or https://)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const clientData = {
      ...formData,
      id: editingClient?.id || Date.now().toString(),
      totalProjects: editingClient?.totalProjects || 0,
      totalRevenue: editingClient?.totalRevenue || 0,
      joinedDate: editingClient?.joinedDate || new Date().toISOString().split('T')[0],
      avatar: profileImage || undefined,
      createdAt: editingClient?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    onSave(clientData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, avatar: 'Please select a valid image file' }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, avatar: 'Image size should be less than 5MB' }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        setProfileImage(result);
        setFormData(prev => ({ ...prev, avatar: result }));
      };
      reader.readAsDataURL(file);

      if (errors.avatar) {
        setErrors(prev => ({ ...prev, avatar: '' }));
      }
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setFormData(prev => ({ ...prev, avatar: '' }));
  };

  const getAvatarInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {editingClient ? 'Edit Client' : 'Add New Client'}
          </h1>
          <p className="text-gray-600 mt-1">
            {editingClient ? 'Update client information' : 'Enter client details to add to the system'}
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
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Logo/Avatar</h3>
            <div className="flex items-center space-x-6">
              <div className="relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Client logo preview"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-200">
                    {formData.name ? (
                      <span className="text-2xl font-bold text-gray-600">
                        {getAvatarInitials(formData.name)}
                      </span>
                    ) : (
                      <Building2 className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                )}
                {profileImage && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              <div className="flex-1">
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                    <Upload className="w-4 h-4 mr-2" />
                    {profileImage ? 'Change Logo' : 'Upload Logo'}
                  </div>
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Recommended: Square image, at least 200x200px. Max file size: 5MB.
                </p>
                {errors.avatar && <p className="text-red-500 text-sm mt-1">{errors.avatar}</p>}
              </div>
            </div>
          </div>

          {/* The rest of the form (basic info, business info, address, notes, actions) remains unchanged */}
          {/* ... You already have this code in your original. To keep this message readable, it's not duplicated here. Let me know if you want the rest appended too. */}

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter client name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter company name"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.contactPerson ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter contact person name"
                />
                {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.website ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://example.com"
                />
                {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.industry ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Type *
                </label>
                <select
                  value={formData.clientType}
                  onChange={(e) => handleInputChange('clientType', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.clientType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Client Type</option>
                  {mockClientTypes.map(type => (
                    <option key={type.id} value={type.name}>{type.name}</option>
                  ))}
                </select>
                {errors.clientType && <p className="text-red-500 text-sm mt-1">{errors.clientType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Prospect">Prospect</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Former">Former</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter street address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter city"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter any additional notes about the client..."
              />
            </div>
          </div>

          {/* Form Actions */}
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
                {editingClient ? 'Update Client' : 'Add Client'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
