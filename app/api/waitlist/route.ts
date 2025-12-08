import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { first_name, last_name, email, pet_type, country, gender } = body;
    
    if (!email || !first_name || !last_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    // Ideally, this token should be an environment variable
    myHeaders.append("X-CSRFToken", process.env.API_CSRF_TOKEN || "pIKyLCgTIZKAqcwVniDurfk2BIevNQCgaqKQtH24zTzyMn8MhE88a7rRRhtahqn8");

    const raw = JSON.stringify({
      first_name,
      last_name,
      email,
      pet_type, // Should be an integer ID as per example (1 for Dog)
      country,
      gender
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("https://petinder.oratech.com.ng/api/waitlist/", requestOptions);
    const result = await response.json();

    if (!response.ok) {
      console.error('API Error:', result);
      
      // Handle different error structures
      let errorMessage = 'Failed to join waitlist';
      
      if (result.detail) {
        // Handle "detail": "..." format
        errorMessage = result.detail;
      } else if (typeof result === 'object') {
        // Handle { field: ["error message"] } format
        // Get the first error message from the first key
        const keys = Object.keys(result);
        if (keys.length > 0) {
          const firstKey = keys[0];
          const errorValue = result[firstKey];
          if (Array.isArray(errorValue) && errorValue.length > 0) {
            errorMessage = errorValue[0];
          } else if (typeof errorValue === 'string') {
            errorMessage = errorValue;
          }
        }
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    return NextResponse.json(result, { status: 201 });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
