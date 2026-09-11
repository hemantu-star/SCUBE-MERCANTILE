"use client";

import { useState, useRef } from "react";
import { uploadMediaAction } from "@/lib/admin-actions";

const MAX_SIZE_BYTES = 1 * 1024 * 1024; // 1MB

export default function MediaUploadForm() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string; sizeFormatted: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setFileInfo(null);
      setErrorMsg(null);
      return;
    }

    const sizeMB = file.size / (1024 * 1024);
    const sizeKB = file.size / 1024;

    if (file.size > MAX_SIZE_BYTES) {
      setErrorMsg(
        `❌ Image is too large (${sizeMB.toFixed(2)} MB). Maximum allowed image size is 1 MB. Please compress or resize it to keep the website fast.`
      );
      setFileInfo(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    setErrorMsg(null);
    setFileInfo({
      name: file.name,
      sizeFormatted: sizeMB >= 0.1 ? `${sizeMB.toFixed(2)} MB` : `${Math.round(sizeKB)} KB`,
    });
  }

  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-line">
      <form
        action={async (formData) => {
          setIsUploading(true);
          try {
            await uploadMediaAction(formData);
          } finally {
            setIsUploading(false);
          }
        }}
      >
        <div className="grid gap-4 md:grid-cols-[1.5fr_1.5fr_auto] items-center">
          <div>
            <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
              Select Image (<span className="text-amber-600 font-bold">Max 1 MB</span>)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              name="file"
              accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
              required
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-navy/5 file:text-navy hover:file:bg-navy/10 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
              Alt Text / Description
            </label>
            <input
              name="alt"
              placeholder="e.g. Solar panel installation"
              className="w-full rounded-xl border border-line px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
            />
          </div>

          <div className="self-end">
            <button
              type="submit"
              disabled={isUploading || !!errorMsg}
              className="w-full md:w-auto rounded-xl bg-navy px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-navy/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                "Upload Image"
              )}
            </button>
          </div>
        </div>

        {/* Validation messages */}
        {errorMsg && (
          <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 font-medium flex items-start gap-2">
            <span>{errorMsg}</span>
          </div>
        )}

        {fileInfo && !errorMsg && (
          <div className="mt-3 text-xs text-green-700 font-medium flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Selected: <span className="font-semibold text-navy">{fileInfo.name}</span> ({fileInfo.sizeFormatted}) — Valid size under 1 MB.
          </div>
        )}
      </form>
    </div>
  );
}
