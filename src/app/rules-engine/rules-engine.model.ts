export interface RulesEngine {
  ruleName: 'Leave Types' | 'Time tracking' | 'Country General';
  ruleLink: 'leave-types' | 'time-tracking' | 'country-general';
  module: 'Leaves' | 'Attendance';
  country: string;
  countryCode: string;
  status: 'Ready' | 'Active' | 'Draft' | 'Inactive';
}
