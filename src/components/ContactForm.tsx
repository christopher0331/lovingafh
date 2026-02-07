"use client";

import { useState } from "react";

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">(
    "email"
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const contact = data.get("contact");
        const message = data.get("message");

        // Construct mailto link as a simple submission mechanism
        const subject = encodeURIComponent(
          `Contact from ${firstName} ${lastName}`
        );
        const body = encodeURIComponent(
          `Name: ${firstName} ${lastName}\n${
            contactMethod === "email" ? "Email" : "Phone"
          }: ${contact}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:loving_afh@yahoo.com?subject=${subject}&body=${body}`;
      }}
    >
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            placeholder="First name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            placeholder="Last name"
          />
        </div>
      </div>

      {/* Contact Method Toggle */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Preferred Contact <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4 mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={contactMethod === "email"}
              onChange={() => setContactMethod("email")}
              className="h-4 w-4 text-primary accent-primary"
            />
            <span className="text-sm text-foreground/80">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={contactMethod === "phone"}
              onChange={() => setContactMethod("phone")}
              className="h-4 w-4 text-primary accent-primary"
            />
            <span className="text-sm text-foreground/80">Phone</span>
          </label>
        </div>
        <input
          type={contactMethod === "email" ? "email" : "tel"}
          id="contact"
          name="contact"
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
          placeholder={
            contactMethod === "email"
              ? "your@email.com"
              : "(555) 555-5555"
          }
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-y"
          placeholder="How can we help you? Ask about availability, services, or schedule a tour..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors w-full sm:w-auto"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        Send Message
      </button>
    </form>
  );
}
