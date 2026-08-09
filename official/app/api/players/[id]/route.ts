import { NextResponse } from 'next/server'
import type { Player } from '@/lib/types'

// <CHANGE> Multiple mock players to return different data based on ID
const mockPlayers: Record<string, Player> = {
  '1': {
    id: '1',
    name: 'Marcus Rodriguez',
    position: 'Central Midfielder',
    location: 'Spain',
    classOf: 2025,
    gpa: 3.5,
    image: '/player1.png',
    age: 18,
    nationality: 'Spanish',
    dateOfBirth: '03/15/2006',
    height: '178cm',
    weight: '72kg',
    dominantFoot: 'Right',
    currentClub: 'Valencia CF Youth',
    graduationYear: 2025,
    schoolName: 'Valencia Academy of Sports',
    academicInfo: 'High School Senior, GPA 3.5',
    leagueLevel: 'U19 National Youth League',
    playingExperience: '6+ years',
    speedTest: '40m in 4.7s',
    bio: 'Dynamic midfielder with excellent vision and passing ability. Strong work ethic and leadership qualities.',
    videos: [
      {
        id: 'v1',
        title: '2024 Season Highlights',
        date: 'Uploaded Mar 2024',
        duration: '4:20',
        thumbnail: '/video-1.jpg',
        url: '#'
      },
      {
        id: 'v2',
        title: 'Passing Masterclass',
        date: 'Uploaded Feb 2024',
        duration: '3:15',
        thumbnail: '/video-2.jpg',
        url: '#'
      },
      {
        id: 'v3',
        title: 'Match Performance vs Atletico',
        date: 'Uploaded Jan 2024',
        duration: '5:30',
        thumbnail: '/video-3.jpg',
        url: '#'
      }
    ],
    reels: [
      {
        id: 'r1',
        title: 'Skills Compilation',
        duration: '0:48',
        thumbnail: '/reel-1.jpg',
        url: '#'
      },
      {
        id: 'r2',
        title: 'Goals & Assists 2024',
        duration: '1:02',
        thumbnail: '/reel-2.jpg',
        url: '#'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'David Chen',
    position: 'Right Winger',
    location: 'USA',
    classOf: 2024,
    gpa: 3.8,
    image: '/player-2.jpg',
    age: 19,
    nationality: 'American',
    dateOfBirth: '07/22/2005',
    height: '175cm',
    weight: '68kg',
    dominantFoot: 'Left',
    currentClub: 'LA Galaxy Academy',
    graduationYear: 2024,
    schoolName: 'Carson High School',
    academicInfo: 'High School Graduate, GPA 3.8',
    leagueLevel: 'MLS NEXT',
    playingExperience: '8+ years',
    speedTest: '40m in 4.5s',
    bio: 'Fast and agile winger with great dribbling skills. Excellent at creating chances and scoring goals.',
    videos: [
      {
        id: 'v1',
        title: 'Speed & Skill Highlights',
        date: 'Uploaded Mar 2024',
        duration: '3:45',
        thumbnail: '/video-1.jpg',
        url: '#'
      },
      {
        id: 'v2',
        title: 'Training Day',
        date: 'Uploaded Feb 2024',
        duration: '2:50',
        thumbnail: '/video-2.jpg',
        url: '#'
      }
    ],
    reels: [
      {
        id: 'r1',
        title: 'Best Dribbles 2024',
        duration: '0:55',
        thumbnail: '/reel-1.jpg',
        url: '#'
      }
    ]
  },
  '3': {
    id: '3',
    name: 'James Thompson',
    position: 'Goalkeeper',
    location: 'Denmark',
    classOf: 2025,
    gpa: 3.9,
    image: '/player-3.jpg',
    age: 18,
    nationality: 'Denmark',
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
  '4': {
    id: '4',
    name: 'Lucas Silva',
    position: 'Left Back',
    location: 'Brazil',
    classOf: 2024,
    gpa: 3.5,
    image: '/player-4.jpg',
    age: 19,
    nationality: 'Brazilian',
    dateOfBirth: '05/10/2005',
    height: '180cm',
    weight: '75kg',
    dominantFoot: 'Left',
    currentClub: 'Palmeiras Youth',
    graduationYear: 2024,
    schoolName: 'São Paulo International School',
    academicInfo: 'High School Graduate, GPA 3.5',
    leagueLevel: 'Brazilian Youth Championship',
    playingExperience: '7+ years',
    speedTest: '40m in 4.6s',
    bio: 'Strong defensive player with excellent tackling ability. Great at overlapping runs and providing width.',
    videos: [
      {
        id: 'v1',
        title: 'Defensive Masterclass',
        date: 'Uploaded Mar 2024',
        duration: '4:00',
        thumbnail: '/video-1.jpg',
        url: '#'
      }
    ],
    reels: []
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    await new Promise(resolve => setTimeout(resolve, 300))
    
    // <CHANGE> Return specific player data based on ID, fallback to first player if ID not found
    const player = mockPlayers[id] || { ...mockPlayers['1'], id }
    return NextResponse.json(player)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch player' },
      { status: 500 }
    )
  }
}
