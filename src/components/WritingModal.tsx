import React from "react";
import { Writing } from "../data/writingsData";
import { X, User, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface WritingModalProps {
  writing: Writing;
  onClose: () => void;
}

export function WritingModal({ writing, onClose }: WritingModalProps) {
  const formattedDate = new Date(writing.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border border-amber-900/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-slate-950/80 hover:bg-amber-600 rounded-full transition-colors border border-amber-900/30"
        >
          <X className="w-5 h-5 text-amber-400" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          {/* Image Header */}
          {writing.imageUrl && (
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={writing.imageUrl}
                alt={writing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-8">
            <h2 className="text-amber-50 mb-4">{writing.title}</h2>

            <div className="flex items-center gap-6 text-slate-400 mb-6 pb-6 border-b border-amber-900/30">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-amber-600" />
                <span>{writing.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>{formattedDate}</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-slate-800 rounded-lg border border-amber-600">
              <p className="text-amber-50 leading-relaxed whitespace-pre-line">
                {writing.excerpt}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {writing.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
