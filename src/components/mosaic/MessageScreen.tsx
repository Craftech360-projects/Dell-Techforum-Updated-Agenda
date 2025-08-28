"use client"

import type React from "react"
import { useState } from "react"
import { Check } from "lucide-react"

interface MessageScreenProps {
  onSubmit: (options: string[]) => void
  isSubmitting: boolean
}

export const MessageScreen: React.FC<MessageScreenProps> = ({ onSubmit, isSubmitting }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const options = [
    "Reimagine",
    "Innovation",
    "Transformation",
    "Possibilities",
    "Future-Ready",
    "Acceleration",
    "Collaboration",
    "Disruption",
    "Vision",
    "Reinvention",
    "Scalability",
    "Agility",
    "Resilience",
    "Synergy",
    "Breakthroughs",
    "Next-Gen",
    "Intelligence",
    "Optimization",
    "Evolution",
    "Empowerment",
  ]

  const handleOptionToggle = (option: string) => {
    setSelectedOptions((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]))
  }

  const handleSubmit = () => {
    if (selectedOptions.length > 0) {
      onSubmit(selectedOptions)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vertical Lines Background Pattern */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("./bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute', // Keep the button absolutely positioned
            top: '-10px', // Adjust this value to control how high the button is
          }}
        >

        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col px-4 py-24">
        {/* Header */}
        <div className="text-start mb-6">
          <h2 className="text-3xl sm:text-3xl font-bold text-white leading-tight px-2">
            What does it take to
            <br />
            reimagine what's next?
          </h2>
        </div>

        {/* Options Grid */}
   <div className="flex-1 mb-4">
  <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
    {options.map((option) => (
      <label key={option} className="block cursor-pointer">
        <div className="flex items-center space-x-3 py-2">
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionToggle(option)}
            className="sr-only"
          />

          {/* Custom Checkbox */}
          <div
            className={`w-4 h-4 border border-white/70 rounded-sm flex items-center justify-center transition-all duration-200 ${selectedOptions.includes(option) ? "bg-white border-white" : "bg-transparent"
              }`}
          >
            {selectedOptions.includes(option) && <Check className="w-3 h-3 text-blue-900" strokeWidth={3} />}
          </div>

          {/* Option Text */}
          <span className="text-white text-xl font-medium">{option}</span> {/* Changed text-sm to text-lg */}
        </div>
      </label>
    ))}
  </div>
</div>


        {/* Submit Button */}
        <div className="px-4 pb-6">
          <button
            onClick={handleSubmit}
            disabled={selectedOptions.length === 0 || isSubmitting}
            className={`w-full py-3 px-6 rounded font-bold text-xl transition-all duration-300 ${selectedOptions.length > 0 && !isSubmitting
                ? "bg-[#81C7FA] hover:bg-blue-300 text-blue-900 shadow-lg"
                : "bg-blue-700/50 text-blue-300 cursor-not-allowed"
              }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
                <span>SUBMITTING...</span>
              </div>
            ) : (
              "SUBMIT"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}