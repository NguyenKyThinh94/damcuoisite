import { NextRequest, NextResponse } from 'next/server';

interface RSVPData {
  id: number;
  name: string;
  email: string;
  phone: string;
  attendance: string;
  guestCount: number;
  message: string;
  dietaryRestrictions: string;
  createdAt: string;
}

// Mock RSVP data - in real app this would be from database
let rsvpData: RSVPData[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    phone: "0901234567",
    attendance: "yes",
    guestCount: 2,
    message: "Chúc mừng cô dâu chú rể! Rất mong được tham dự đám cưới của hai bạn.",
    dietaryRestrictions: "",
    createdAt: "2024-10-01T10:00:00Z"
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@email.com", 
    phone: "0912345678",
    attendance: "yes",
    guestCount: 1,
    message: "Xin chúc mừng! Hy vọng hai bạn sẽ hạnh phúc bên nhau.",
    dietaryRestrictions: "Ăn chay",
    createdAt: "2024-10-02T14:30:00Z"
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@email.com",
    phone: "0923456789", 
    attendance: "no",
    guestCount: 0,
    message: "Rất tiếc không thể tham dự được. Chúc hai bạn hạnh phúc!",
    dietaryRestrictions: "",
    createdAt: "2024-10-02T16:45:00Z"
  }
];

export async function GET(): Promise<NextResponse> {
  try {
    return NextResponse.json({
      success: true,
      data: rsvpData,
      total: rsvpData.length
    });
  } catch (error) {
    console.error('Error fetching RSVP data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch RSVP data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, attendance, guestCount } = body;
    
    if (!name || !email || !phone || !attendance) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new RSVP entry
    const newRsvp: RSVPData = {
      id: rsvpData.length + 1,
      name,
      email,
      phone,
      attendance,
      guestCount: parseInt(guestCount) || (attendance === 'yes' ? 1 : 0),
      message: body.message || '',
      dietaryRestrictions: body.dietaryRestrictions || '',
      createdAt: new Date().toISOString()
    };

    rsvpData.push(newRsvp);

    return NextResponse.json({
      success: true,
      message: 'RSVP submitted successfully',
      data: newRsvp
    });
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}
