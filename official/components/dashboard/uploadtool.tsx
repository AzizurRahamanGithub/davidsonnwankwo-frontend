"use client"

import { useRef, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Upload, FileVideo } from "lucide-react"

type UploadToolbarProps = {
  onUpload?: (payload: { title: string; file: File }) => void
}

export function UploadToolbar({ onUpload }: UploadToolbarProps) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // ✅ Upload button click action
  const handleUpload = () => {
    if (!title.trim() || !file) {
      alert("Please provide a title and select a video file.")
      return
    }

    // ✅ Pass data to parent if needed
    onUpload?.({ title: title.trim(), file })

    // ✅ Clear and close after upload
    setTitle("")
    setFile(null)
    setOpen(false)
  }

  return (
    <>
      {/* ✅ Clickable Upload Card */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-emerald-50/60 border-2 border-dashed border-emerald-100 rounded-2xl p-12 text-center hover:bg-emerald-50 transition"
      >
        <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
          <Upload className="h-6 w-6 text-emerald-600" />
        </div>
        <h3 className="text-sm font-bold text-slate-900 mb-1">Upload New Featured Video</h3>
        <p className="text-xs text-slate-500">
          Supported formats: MP4, MOV, AVI. File size upto 200MB per video.
        </p>
      </button>

      {/* ✅ Toolbar / Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              Upload Video
            </DialogTitle>
          </DialogHeader>

          {/* ✅ Title input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700">Video Title</label>
            <Input
              placeholder="Ex: Skill showcase - Dribbling"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* ✅ File upload */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700">Video File</label>

            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />

              <Button
                type="button"
                variant="outline"
                className="rounded-xl flex items-center gap-2"
                onClick={() => fileInputRef.current?.click()}
              >
                <FileVideo className="h-4 w-4" />
                Choose File
              </Button>

              <p className="text-xs text-slate-500 truncate flex-1">
                {file ? file.name : "No file selected"}
              </p>
            </div>

            <p className="text-[10px] text-slate-400">
              Supported formats: MP4, MOV, AVI. Max size: 200MB
            </p>
          </div>

          {/* ✅ Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              className="rounded-xl bg-emerald-700 hover:bg-emerald-800"
              onClick={handleUpload}
            >
              Upload
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
