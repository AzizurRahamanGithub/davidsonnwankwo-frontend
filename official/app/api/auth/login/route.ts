import { NextResponse } from 'next/server'
import type { LoginRequest, AuthResponse } from '@/lib/types'

export async function POST(request: Request) {
  try {
    const body: LoginRequest = await request.json()
    
    // Mock authentication logic
    // In production, replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay
    
    if (body.email && body.password) {
      const response: AuthResponse = {
        success: true,
        message: 'Login successful',
        token: 'mock-jwt-token-' + Date.now(),
        user: {
          id: '1',
          email: body.email,
          name: 'John Doe',
          role: 'player'
        }
      }
      return NextResponse.json(response)
    }
    
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' } as AuthResponse,
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' } as AuthResponse,
      { status: 500 }
    )
  }
}
