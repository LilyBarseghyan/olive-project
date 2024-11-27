export interface LeaveType {
    typeName: 'Annual' | 'Sick' | 'Maternity' | 'Pilgrimage' | 'Not Paid';
    module: 'Limited' | 'Unlimited' | 'Attendance';
    status: 'Ready' | 'Active' | 'Draft' | 'Inactive';
  }
  