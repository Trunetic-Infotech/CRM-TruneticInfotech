import { ArrowDown, ArrowUp, IndianRupee, Percent, Plus, Edit, X, Save } from 'lucide-react';
import React, { useState } from 'react';

const SalaryStructure = () => {
  const [showComponentModal, setShowComponentModal] = useState(false);
  const [componentForm, setComponentForm] = useState({
    name: '',
    type: 'earning',
    calculationType: 'percentage',
    value: 0,
    description: '',
    isTaxable: false,
    isActive: true,
    baseComponent: null,
  });
  const defaultSalaryComponents = [
    {
      id: 1,
      name: "Basic",
      amount: 10000,
      type: "earning",
      calculationType: "fixed",
      value: 10000,
      description: "Base salary component",
      isTaxable: true,
      isActive: true,
      baseComponent: null,
    },
    {
      id: 2,
      name: "HRA",
      amount: 5000,
      type: "earning",
      calculationType: "percentage",
      value: 40,
      description: "House Rent Allowance calculated as % of Basic",
      isTaxable: false,
      isActive: true,
      baseComponent: "Basic",
    },
    {
      id: 3,
      name: "Special Allowance",
      amount: 3000,
      type: "earning",
      calculationType: "fixed",
      value: 3000,
      description: "Monthly special allowance",
      isTaxable: true,
      isActive: false,
      baseComponent: null,
    },
      {
      id: 4,
      name: "Other Allowance",
      amount: 3000,
      type: "earning",
      calculationType: "fixed",
      value: 3000,
      description: "Quarterly performance bonus",
      isTaxable: true,
      isActive: false,
      baseComponent: null,
    },
    {
      id: 5,
      name: "Statutory Bonus",
      amount: 3000,
      type: "earning",
      calculationType: "fixed",
      value: 3000,
      description: "Monthly statutory bonus",
      isTaxable: true,
      isActive: false,
      baseComponent: null,
    },
    {
      id: 6,
      name: "Conveyance",
      amount: 2000,
      type: "deduction",
      calculationType: "fixed",
      value: 2000,
      description: "Monthly travel allowance",
      isTaxable: false,
      isActive: true,
      baseComponent: null,
    },
    {
      id: 7,
      name: "PF",
      amount: 1200,
      type: "deduction",
      calculationType: "percentage",
      value: 12,
      description: "Provident Fund (12% of Basic)",
      isTaxable: false,
      isActive: true,
      baseComponent: "Basic",
    },
    {
      id: 8,
      name: "Professional Tax",
      amount: 200,
      type: "deduction",
      calculationType: "fixed",
      value: 200,
      description: "State-level professional tax",
      isTaxable: false,
      isActive: false,
      baseComponent: null,
    },
  ];

  return (
    <div className="p-6 gap-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Salary Components</h2>
            <p className="text-gray-600">Manage earnings and deduction components</p>
          </div>
          <button
            onClick={() => setShowComponentModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Component</span>
          </button>
        </div>
          {showComponentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Add Salary Component</h3>
              <button
                onClick={() => setShowComponentModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); handleAddComponent(); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Component Name</label>
                <input
                  type="text"
                  value={componentForm.name}
                  onChange={(e) => setComponentForm({...componentForm, name: e.target.value})}
                  placeholder="e.g., Transport Allowance"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={componentForm.type}
                  onChange={(e) => setComponentForm({...componentForm, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="earning">Earning</option>
                  <option value="deduction">Deduction</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Calculation Type</label>
                <select
                  value={componentForm.calculationType}
                  onChange={(e) => setComponentForm({...componentForm, calculationType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                  <option value="formula">Formula</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Value {componentForm.calculationType === 'percentage' ? '(%)' : '(₹)'}
                </label>
                <input
                  type="number"
                  value={componentForm.value}
                  onChange={(e) => setComponentForm({...componentForm, value: Number(e.target.value)})}
                  placeholder={componentForm.calculationType === 'percentage' ? '10' : '5000'}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other Details (Optional)
                </label>
                <input
                  type="text"
                  value={componentForm.description}
                  onChange={(e) => setComponentForm({...componentForm, description: e.target.value})}
                  placeholder="Specify any additional details or conditions related to this component"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Additional Amount (Optional)
                </label>
                <input
                  type="text"
                  value={componentForm.additionalAmount}
                  onChange={(e) => setComponentForm({...componentForm, additionalAmount: e.target.value})}
                  placeholder="Bonus, Overtime, etc."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={componentForm.isTaxable}
                    onChange={(e) => setComponentForm({...componentForm, isTaxable: e.target.checked})}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Taxable</span>
                </label>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowComponentModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Add Component</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Earnings */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <ArrowUp className="h-5 w-5 text-green-500 mr-2" />
                Earnings Components
              </h3>
              <span className="text-sm text-gray-500">
                {defaultSalaryComponents.filter(c => c.type === 'earning').length} components
              </span>
            </div>
            <div className="space-y-4">
              {defaultSalaryComponents.filter(c => c.type === 'earning').map(component => (
                <div key={component.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{component.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        component.calculationType === 'percentage' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {component.calculationType === 'percentage' ? (
                          <>
                            <Percent className="h-3 w-3 mr-1" />
                            {component.value}%
                          </>
                        ) : (
                          <>
                            <IndianRupee className="h-3 w-3 mr-1" />
                            {component.value.toLocaleString()}
                          </>
                        )}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{component.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className={`flex items-center ${component.isTaxable ? 'text-red-600' : 'text-green-600'}`}>
                      {component.isTaxable ? 'Taxable' : 'Non-taxable'}
                    </span>
                    {component.baseComponent && <span>Base: {component.baseComponent}</span>}
                    <span className={`flex items-center ${component.isActive ? 'text-green-600' : 'text-gray-400'}`}>
                      {component.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deductions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <ArrowDown className="h-5 w-5 text-red-500 mr-2" />
                Deduction Components
              </h3>
              <span className="text-sm text-gray-500">
                {defaultSalaryComponents.filter(c => c.type === 'deduction').length} components
              </span>
            </div>
            <div className="space-y-4">
              {defaultSalaryComponents.filter(c => c.type === 'deduction').map(component => (
                <div key={component.id} className="p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{component.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        component.calculationType === 'percentage' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {component.calculationType === 'percentage' ? (
                          <>
                            <Percent className="h-3 w-3 mr-1" />
                            {component.value}%
                          </>
                        ) : (
                          <>
                            <IndianRupee className="h-3 w-3 mr-1" />
                            {component.value.toLocaleString()}
                          </>
                        )}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{component.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    {component.baseComponent && <span>Base: {component.baseComponent}</span>}
                    <span className={`flex items-center ${component.isActive ? 'text-green-600' : 'text-gray-400'}`}>
                      {component.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SalaryStructure;
