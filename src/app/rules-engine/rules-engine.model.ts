export interface RulesEngine {
  ruleName: 'Leave Types' | 'Time tracking' | 'Country General';
  module: 'Leaves' | 'Attendance';
  country: string;
  countryCode: string;
  status: 'Ready' | 'Active' | 'Draft' | 'Inactive';
}
