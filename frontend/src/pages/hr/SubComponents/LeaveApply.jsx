import React from 'react'

const LeaveApply = () => {
  const [newLeaveForm, setNewLeaveForm] = React.useState({
    employeeId: '',
    leaveType: 'annual',  
    startDate: '',
    endDate: '',
    reason: '',
    notes: '',
  });
  const [employees, setEmployees] = React.useState([
    { id: '1', name: 'Sarah Johnson', position: 'Senior Frontend Developer' },
    { id: '2', name: 'Michael Chen', position: 'Product Manager' },
    { id: '3', name: 'Emily Rodriguez', position: 'Senior UX Designer' },
    { id: '4', name: 'David Kim', position: 'Engineering Manager' },
  ]);
  const [coveringEmployee, setCoveringEmployee] = React.useState('');
  const [emergencyContact, setEmergencyContact] = React.useState('');
  const [selectedLeaveType, setSelectedLeaveType] = React.useState('annual');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const handleSubmitLeave = () => {
    // Handle leave application submission
    console.log('Leave applied:', newLeaveForm);
  };
  const calculateDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate - startDate;
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Include both start and end dates
  };
  const Send = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13M11 13L2 22M11 13L22 22M2 2L22 22M2 22L11 13M2 2L11 13" />
    </svg>
  );

  return (
 <div className="p-6  gap-6">
            <h1 className="text-3xl font-bold">Employee Onboarding</h1>
      <p className="text-gray-600">Manage Employee Onboarding</p>
        <div className="space-y-6 mt-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Apply for Leave</h3>
        
        <form onSubmit={(e) => { e.preventDefault(); handleSubmitLeave(); }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employee Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
              <select
                value={newLeaveForm.employeeId}
                onChange={(e) => setNewLeaveForm({...newLeaveForm, employeeId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Employee</option>
                {employees.map(emp => (
                  <option key={emp.id} value={emp.id}>{emp.name} - {emp.position}</option>
                ))}
              </select>
            </div>

            {/* Leave Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type</label>
              <select
                value={newLeaveForm.leaveType}
                onChange={(e) => setNewLeaveForm({...newLeaveForm, leaveType: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="annual">Annual Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="personal">Personal Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="paternity">Paternity Leave</option>
                <option value="emergency">Emergency Leave</option>
                <option value="unpaid">Unpaid Leave</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={newLeaveForm.startDate}
                onChange={(e) => setNewLeaveForm({...newLeaveForm, startDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={newLeaveForm.endDate}
                onChange={(e) => setNewLeaveForm({...newLeaveForm, endDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Covering Employee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Covering Employee</label>
              <input
                type="text"
                value={newLeaveForm.coveringEmployee}
                onChange={(e) => setNewLeaveForm({...newLeaveForm, coveringEmployee: e.target.value})}
                placeholder="Who will cover your responsibilities?"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
              <input
                type="text"
                value={newLeaveForm.emergencyContact}
                onChange={(e) => setNewLeaveForm({...newLeaveForm, emergencyContact: e.target.value})}
                placeholder="Emergency contact number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Leave</label>
            <textarea
              value={newLeaveForm.reason}
              onChange={(e) => setNewLeaveForm({...newLeaveForm, reason: e.target.value})}
              placeholder="Please provide a brief reason for your leave request..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea
              value={newLeaveForm.notes}
              onChange={(e) => setNewLeaveForm({...newLeaveForm, notes: e.target.value})}
              placeholder="Any additional information or special requests..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Leave Summary */}
          {newLeaveForm.startDate && newLeaveForm.endDate && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-blue-900 mb-2">Leave Summary</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-700">Total Days:</span>
                  <span className="font-medium text-blue-900 ml-2">
                    {calculateDays(newLeaveForm.startDate, newLeaveForm.endDate)} days
                  </span>
                </div>
                <div>
                  <span className="text-blue-700">Leave Type:</span>
                  <span className="font-medium text-blue-900 ml-2 capitalize">
                    {newLeaveForm.leaveType.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Submit Request</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default LeaveApply
