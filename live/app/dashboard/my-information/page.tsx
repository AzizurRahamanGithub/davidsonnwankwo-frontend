"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Upload, Trash2, FileText, ChevronRight } from "lucide-react"
import { dashboardApi, mockDashboardData } from "@/lib/api-client"
import type { UserProfile, ProfileFormData } from "@/lib/types"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { UploadToolbar } from "@/components/dashboard/uploadtool"

export default function MyInformationPage() {
  const [step, setStep] = useState(1)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<Partial<ProfileFormData>>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const profileRes = await dashboardApi.getProfile()
        setProfile(profileRes.data || mockDashboardData.profile)
        // Initialize form data with profile data
        if (profileRes.data) {
          setFormData({
            firstName: profileRes.data.firstName,
            lastName: profileRes.data.lastName,
            title: profileRes.data.title,
            dateOfBirth: profileRes.data.dateOfBirth,
            nationality: profileRes.data.nationality,
            height: profileRes.data.height,
            weight: profileRes.data.weight,
            graduationYear: profileRes.data.graduationYear.toString(),
            academicGPA: profileRes.data.gpa,
            schoolName: profileRes.data.schoolName,
            sports: profileRes.data.sports,
            primaryPosition: profileRes.data.position,
            dominantFoot: profileRes.data.dominantFoot,
            currentClub: profileRes.data.club,
            leagueLevel: profileRes.data.leagueLevel,
            playingExperience: profileRes.data.playingExperience,
          })
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const nextStep = () => setStep((s) => Math.min(s + 1, 3))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const handleComplete = async () => {
    console.log("[v0] Submitting profile form:", formData)
    // Call dashboardApi.updateProfile
    setStep(1) // Reset for demo
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full overflow-hidden -m-8">
      <DashboardHeader userName={profile?.fullName} userAvatar={profile?.avatar} />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className=" flex-col lg:flex-row flex gap-12">
          {/* Progress Sidebar */}
          <div className="w-64 shrink-0 space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-12 relative">
                <StepItem
                  num={1}
                  title="STEP 01"
                  desc="Personal & Academic Info"
                  isActive={step === 1}
                  isDone={step > 1}
                />
                <StepItem
                  num={2}
                  title="STEP 02"
                  desc="Athletic Stats & Club Details"
                  isActive={step === 2}
                  isDone={step > 2}
                />
                <StepItem num={3} title="STEP 03" desc="Upload Videos & Resume" isActive={step === 3} isDone={false} />
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1">
            <Card className="border-none shadow-sm rounded-2xl">
              <CardContent className="p-12">
                <div className="flex justify-center mb-8">
                  <div className="flex gap-2 h-1.5 w-full max-w-md">
                    <div className={cn("flex-1 rounded-full", step >= 1 ? "bg-teal-600" : "bg-gray-100")} />
                    <div className={cn("flex-1 rounded-full", step >= 2 ? "bg-teal-600" : "bg-gray-100")} />
                    <div className={cn("flex-1 rounded-full", step >= 3 ? "bg-teal-600" : "bg-gray-100")} />
                  </div>
                </div>

                {step === 1 && <PersonalInfoForm data={formData} updateData={setFormData} onNext={nextStep} />}
                {step === 2 && (
                  <AthleticStatsForm data={formData} updateData={setFormData} onNext={nextStep} onPrev={prevStep} />
                )}
                {step === 3 && (
                  <UploadsForm data={formData} updateData={setFormData} onComplete={handleComplete} onPrev={prevStep} />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepItem({
  num,
  title,
  desc,
  isActive,
  isDone,
}: { num: number; title: string; desc: string; isActive: boolean; isDone: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={cn(
          "h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border-2 shrink-0 z-10 bg-white",
          isActive
            ? "border-teal-600 text-teal-600"
            : isDone
              ? "bg-teal-600 border-teal-600 text-white"
              : "border-gray-200 text-gray-400",
        )}
      >
        {num.toString().padStart(2, "0")}
      </div>
      <div>
        <p className={cn("text-[10px] font-bold uppercase", isActive ? "text-teal-600" : "text-gray-400")}>{title}</p>
        <p className={cn("text-xs font-bold", isActive ? "text-gray-900" : "text-gray-400")}>{desc}</p>
      </div>
    </div>
  )
}

function PersonalInfoForm({ data, updateData, onNext }: { data: any; updateData: any; onNext: () => void }) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Personal & Academic Info</h2>
        <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
          Enter your basic details, playing position, graduation year, and academic background to build the foundation
          of your profile.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="h-24 w-24 bg-gray-50 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-300">
          <Upload className="h-8 w-8" />
        </div>
        <button className="text-xs font-bold text-gray-900 underline decoration-teal-600/30">
          Upload Profile Picture
        </button>
        <p className="text-[10px] text-gray-400 mt-1 uppercase font-medium">Recommended: 500x500px, JPG, PNG, or GIF</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">First Name:</Label>
          <Input
            placeholder="First Name"
            value={data.firstName}
            onChange={(e) => updateData({ ...data, firstName: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Last Name:</Label>
          <Input
            placeholder="Last Name"
            value={data.lastName}
            onChange={(e) => updateData({ ...data, lastName: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Title:</Label>
          <Input
            placeholder="Title"
            value={data.title}
            onChange={(e) => updateData({ ...data, title: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Date of Birth:</Label>
          <div className="relative">
            <Input
              placeholder="Select Date of Birth"
              value={data.dateOfBirth}
              onChange={(e) => updateData({ ...data, dateOfBirth: e.target.value })}
              className="bg-gray-50 border-gray-100"
            />
            <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Nationality:</Label>
          <Select value={data.nationality} onValueChange={(v) => updateData({ ...data, nationality: v })}>
            <SelectTrigger className="bg-gray-50 border-gray-100">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Spain">Spain</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="UK">UK</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Height:</Label>
          <Input
            placeholder="Height (ft/cm)"
            value={data.height}
            onChange={(e) => updateData({ ...data, height: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Weight: (kg/lbs)</Label>
          <Input
            placeholder="Weight"
            value={data.weight}
            onChange={(e) => updateData({ ...data, weight: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Graduation Year:</Label>
          <Input
            placeholder="Graduation Year"
            value={data.graduationYear}
            onChange={(e) => updateData({ ...data, graduationYear: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5 col-span-1">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold text-gray-900">Academic GPA/Grade:</Label>
            <div className="flex bg-gray-100 p-0.5 rounded-lg">
              <button className="text-[10px] px-2 py-0.5 rounded-md bg-white text-gray-900 shadow-sm font-bold">
                Predicted
              </button>
              <button className="text-[10px] px-2 py-0.5 rounded-md text-gray-400 font-bold">Obtained</button>
            </div>
          </div>
          <Input
            placeholder="Academic GPA"
            value={data.academicGPA}
            onChange={(e) => updateData({ ...data, academicGPA: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">School/College Name:</Label>
          <Input
            placeholder="School/College Name"
            value={data.schoolName}
            onChange={(e) => updateData({ ...data, schoolName: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
      </div>

      <Button
        onClick={onNext}
        className="w-full bg-teal-700 hover:bg-teal-800 h-12 rounded-xl text-white font-bold gap-2"
      >
        Next <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

function AthleticStatsForm({
  data,
  updateData,
  onNext,
  onPrev,
}: { data: any; updateData: any; onNext: () => void; onPrev: () => void }) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Athletic Stats & Club Details</h2>
        <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
          Add your height, weight, dominant foot, current club/academy, and performance metrics to showcase your skills.
        </p>
      </div>

      <div className="space-y-4">
        <Label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Choose Sports:</Label>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center p-6 border-2 border-teal-600 bg-teal-50/50 rounded-2xl gap-3">
            <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-teal-700">Soccer</span>
          </button>
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-100 bg-gray-50/50 rounded-2xl gap-3 grayscale opacity-50">
            <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-sm relative">
              <div className="absolute -top-1 -right-1 bg-teal-600 text-white text-[6px] font-black px-1 rounded-sm uppercase tracking-tighter">
                Coming Soon
              </div>
              <svg className="h-6 w-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-400">Other sports coming soon</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-4">
        <div className="space-y-1.5 w-full">
          <Label className="text-xs font-bold text-gray-900">Primary Position:</Label>
          <Select value={data.primaryPosition} onValueChange={(v) => updateData({ ...data, primaryPosition: v })}>
            <SelectTrigger className="bg-gray-50  border-gray-100">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Right Back (RB)">Right Back (RB)</SelectItem>
              <SelectItem value="Central Midfielder">Central Midfielder</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Secondary Position: (Optional)</Label>
          <Select value={data.secondaryPosition} onValueChange={(v) => updateData({ ...data, secondaryPosition: v })}>
            <SelectTrigger className="bg-gray-50 border-gray-100">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="None">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Dominant Foot:</Label>
          <Select value={data.dominantFoot} onValueChange={(v) => updateData({ ...data, dominantFoot: v })}>
            <SelectTrigger className="bg-gray-50 border-gray-100">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Right">Right</SelectItem>
              <SelectItem value="Left">Left</SelectItem>
              <SelectItem value="Both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">Current Club/Academy:</Label>
          <Input
            placeholder="Enter club name"
            value={data.currentClub}
            onChange={(e) => updateData({ ...data, currentClub: e.target.value })}
            className="bg-gray-50 border-gray-100"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-900">League/Competition Level:</Label>
          <Select value={data.leagueLevel} onValueChange={(v) => updateData({ ...data, leagueLevel: v })}>
            <SelectTrigger className="bg-gray-50 border-gray-100">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="U19 National Youth League">U19 National Youth League</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5 col-span-full">
          <Label className="text-xs font-bold text-gray-900">Playing Experience:</Label>
          <Textarea
            placeholder="Describe your playing experience..."
            className="bg-gray-50 border-gray-100 min-h-[120px] resize-none"
            value={data.playingExperience}
            onChange={(e) => updateData({ ...data, playingExperience: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <Button
          variant="outline"
          onClick={onPrev}
          className="h-12 border-gray-200 text-gray-600 font-bold rounded-xl bg-transparent"
        >
          Back
        </Button>
        <Button onClick={onNext} className="bg-teal-700 hover:bg-teal-800 h-12 text-white font-bold rounded-xl">
          Next
        </Button>
      </div>
    </div>
  )
}

function UploadsForm({
  data,
  updateData,
  onComplete,
  onPrev,
}: { data: any; updateData: any; onComplete: () => void; onPrev: () => void }) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload Soccer CV/Resume</h2>
        <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
          Highlight your talent by uploading your match clips or highlight reel, and attach your CV to complete your
          profile.
        </p>
      </div>

      <div className="space-y-6">
        {/* Upload Area */}
                <UploadToolbar />

        <div>
          <h4 className="text-xs font-bold text-gray-900 mb-3">Uploaded Videos</h4>
          <div className="flex sm:flex-row flex-col gap-4 overflow-x-auto pb-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative h-24 w-32 shrink-0 rounded-xl overflow-hidden border border-gray-100 group"
              >
                <Image height={100} width={100} src="/placeholder.jpg" alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="h-5 w-5 text-white" />
                </div>
                <div className="absolute top-1 right-1 h-4 w-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  ×
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold text-gray-900">Upload CV/Resume:</h4>
          <div className="border border-gray-100 bg-white rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Upload CV/Resume</p>
                <p className="text-[10px] text-gray-400 font-medium uppercase">
                  Supported formats: PDF or DOCX | Maximum file size: 5MB
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-xs font-bold border-gray-200 text-teal-600 gap-2 h-9 rounded-lg bg-transparent"
            >
              <Upload className="h-4 w-4" /> Upload
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <Button
          variant="outline"
          onClick={onPrev}
          className="h-12 border-gray-200 text-gray-600 font-bold rounded-xl bg-transparent"
        >
          Back
        </Button>
        <Button onClick={onComplete} className="bg-teal-700 hover:bg-teal-800 h-12 text-white font-bold rounded-xl">
          Complete
        </Button>
      </div>
    </div>
  )
}
