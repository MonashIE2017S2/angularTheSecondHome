export interface HomelessReason {
  id: string,
  value: number
}

export const Reasons: HomelessReason[] = [
  {id: 'Domestic and family violence', value: 2400},
  {id: 'Financial difficulties', value: 2000},
  {id: 'Housing crisis', value: 1600},
  {id: 'Inappropriate dwellings', value: 1100},
  {id: 'Other relationship issues', value: 800},
  {id: 'Other accommodation issues', value: 500},
  {id: 'Health issues', value: 400},
  {id: 'Custody transition', value: 200},
  {id: 'Itinerant', value: 100},
  {id: 'Lack support', value: 100},
  {id: 'Other', value: 800},
];

export * from './HomelessReason';

