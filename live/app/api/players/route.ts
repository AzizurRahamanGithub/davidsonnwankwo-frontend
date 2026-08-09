import { NextResponse } from 'next/server'
import type { Player } from '@/lib/types'

// Mock player data
const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Marcus Rodriguez',
    position: 'Central Midfielder',
    location: 'Spain',
    classOf: 2025,
    gpa: 3.5,
    image: '/player1.png',
    age: 18,
    nationality: 'Spanish',
    height: '178cm',
    weight: '72kg',
    dominantFoot: 'Right',
    bio: 'Dynamic midfielder with excellent vision and passing ability.'
  },
  {
    id: '2',
    name: 'David Chen',
    position: 'Right Winger',
    location: 'USA',
    classOf: 2024,
    gpa: 3.8,
    image: '/player2.png',
    age: 19,
    nationality: 'American',
    height: '175cm',
    weight: '68kg',
    dominantFoot: 'Left',
    bio: 'Fast and agile winger with great dribbling skills.'
  },
  {
    id: '3',
    name: 'James Thompson',
    position: 'Goalkeeper',
    location: 'UK',
    classOf: 2025,
    gpa: 3.9,
    image: '/player3.png',
    age: 18,
    nationality: 'British',
    dateOfBirth: '12/03/2006',
    height: '192cm',
    weight: '82kg',
    dominantFoot: 'Right',
    currentClub: 'Copenhagen Youth',
    graduationYear: 2025,
    schoolName: 'Copenhagen Youth',
    academicInfo: 'High School Senior, GPA 3.9',
    leagueLevel: 'National Youth League',
    playingExperience: '5+ years',
    speedTest: '40m in 4.9s',
    bio: 'Commanding presence in goal with excellent distribution skills. Highly vocal leader with strong reflex ability and professional work ethic.',
    videos: [
      {
        id: 'v1',
        title: '2024 Highlight Reel',
        date: 'Uploaded Feb 2024',
        duration: '3:45',
        thumbnail: '/video-1.jpg',
        url: '#'
      },
      {
        id: 'v2',
        title: 'Training Session Clips',
        date: 'Uploaded Feb 2024',
        duration: '2:30',
        thumbnail: '/video-2.jpg',
        url: '#'
      },
      {
        id: 'v3',
        title: 'Match Performance',
        date: 'Uploaded Feb 2024',
        duration: '4:12',
        thumbnail: '/video-3.jpg',
        url: '#'
      }
    ],
    reels: [
      {
        id: 'r1',
        title: 'Skill Showcase - Dribbling, first touch',
        duration: '0:45',
        thumbnail: '/reel-1.jpg',
        url: '#'
      },
      {
        id: 'r2',
        title: 'Tournament Performance - Key moments from...',
        duration: '0:58',
        thumbnail: '/reel-2.jpg',
        url: '#'
      }
    ]
  },
  {
    id: '4',
    name: 'Lucas Silva',
    position: 'Left Back',
    location: 'Brazil',
    classOf: 2024,
    gpa: 3.5,
    image: '/player4.png',
    age: 19,
    nationality: 'Brazilian',
    height: '180cm',
    weight: '75kg',
    dominantFoot: 'Left',
    bio: 'Strong defensive player with excellent tackling ability.'
  },
  {
    id: '5',
    name: 'Sophie Martinez',
    position: 'Forward',
    location: 'Argentina',
    classOf: 2025,
    gpa: 3.7,
    image: '/player1.png',
    age: 17,
    nationality: 'Argentinian',
    height: '168cm',
    weight: '60kg',
    dominantFoot: 'Right',
    bio: 'Clinical finisher with great positioning sense.'
  },
  {
    id: '6',
    name: 'Alex Johnson',
    position: 'Defensive Midfielder',
    location: 'Canada',
    classOf: 2024,
    gpa: 3.6,
    image: '/player2.png',
    age: 18,
    nationality: 'Canadian',
    height: '183cm',
    weight: '78kg',
    dominantFoot: 'Right',
    bio: 'Tough tackler with excellent ball recovery skills.'
  },
  {
    id: '7',
    name: 'Emma Wilson',
    position: 'Center Back',
    location: 'Australia',
    classOf: 2025,
    gpa: 3.8,
    image: '/player3.png',
    age: 18,
    nationality: 'Australian',
    height: '176cm',
    weight: '70kg',
    dominantFoot: 'Right',
    bio: 'Solid defender with great aerial ability.'
  },
  {
    id: '8',
    name: 'Ryan Kim',
    position: 'Attacking Midfielder',
    location: 'South Korea',
    classOf: 2024,
    gpa: 3.9,
    image: '/player4.png',
    age: 19,
    nationality: 'Korean',
    height: '174cm',
    weight: '68kg',
    dominantFoot: 'Both',
    bio: 'Creative playmaker with excellent passing range.'
  }
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')
    
    await new Promise(resolve => setTimeout(resolve, 300))
    
    if (limit) {
      const players = mockPlayers.slice(0, parseInt(limit))
      return NextResponse.json(players)
    }
    
    return NextResponse.json(mockPlayers)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch players' },
      { status: 500 }
    )
  }
}
