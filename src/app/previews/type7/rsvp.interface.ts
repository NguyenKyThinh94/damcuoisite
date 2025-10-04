export interface RSVPData {
  id: number;
  name: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no' | 'maybe';
  guestCount: number;
  message?: string;
  dietaryRestrictions?: string;
  createdAt: string;
}

export interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no' | 'maybe';
  guestCount: number;
  message?: string;
  dietaryRestrictions?: string;
}
