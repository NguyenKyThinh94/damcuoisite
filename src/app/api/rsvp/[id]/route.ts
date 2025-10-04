import { NextRequest, NextResponse } from 'next/server';

// Mock RSVP data - should match the data in main route
const rsvpData = [
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const rsvpId = parseInt(id);
    
    const rsvp = rsvpData.find(item => item.id === rsvpId);
    
    if (!rsvp) {
      return NextResponse.json(
        { success: false, error: 'RSVP not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: rsvp
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch RSVP' },
      { status: 500 }
    );
  }
}
