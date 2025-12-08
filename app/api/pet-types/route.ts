import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    // Ideally use environment variable for token
    myHeaders.append("X-CSRFToken", process.env.API_CSRF_TOKEN || "FzHKlCah57JCOyNNGPUTtVMW8aLS5fV7AxQfp9Ab9WphxQ4Q5cuv9Mwauk8gzEGp");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect
    };

    const response = await fetch("https://petinder.oratech.com.ng/api/pet-types/", requestOptions);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch pet types: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching pet types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pet types' },
      { status: 500 }
    );
  }
}

