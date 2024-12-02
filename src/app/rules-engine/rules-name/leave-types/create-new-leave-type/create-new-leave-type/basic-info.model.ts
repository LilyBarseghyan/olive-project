export interface BasicInfo {
  type: 'Paid' | 'Not paid' | '';
  entitled: 'Through balance' | 'Event based' | '';
  docsRequired: 'Yes' | 'No' | '';
  gracePeriod: 'Yes' | 'No' | '';
  dispute: 'Yes' | 'No' | '';
  validity: 'Yes' | 'No' | '';
  unitOption: 'Working Days' | 'Calendar Days' | 'Hours' | 'Days & Hours' | '';
  gender: 'Female' | 'Male' | 'All' | '';
  employmentType: 'Full Time' | 'Part Time' | '';
  consumption: 'Accural' | 'Accumulative' | '';
  balance: [
    { name: 'Conditional'; selected: false },
    { name: 'Extend Balance'; selected: false },
    { name: 'Balance Can Be Overridden'; selected: false }
  ];
}
