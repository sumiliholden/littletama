'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

const COGNITO_FORM_KEY = process.env.NEXT_PUBLIC_COGNITO_FORM_KEY!;
const COGNITO_FORM_ID = process.env.NEXT_PUBLIC_COGNITO_FORM_ID!;

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.dataset.key = COGNITO_FORM_KEY;
    script.dataset.form = COGNITO_FORM_ID;
    container.appendChild(script);

    return () => {
      loadedRef.current = false;
      container.innerHTML = '';
      // Remove any global Cognito iframes/scripts injected outside the container
      document
        .querySelectorAll(
          'iframe[src*="cognitoforms"], script[src*="cognitoforms"]',
        )
        .forEach((el) => el.remove());
    };
  }, []);

  return (
    <motion.div
      className="neo-card p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
    >
      <h2 className="text-2xl mb-6 flex items-center gap-2.5">
        <MessageCircle size={24} /> Get In Touch
      </h2>
      <style>{`
        .cog-form__container header{
  display: none !important;
}
.contact-form-shell {
  min-height: 320px;
  --contact-field-border-width: 2px;
  --contact-field-border-color: #000000;
  --contact-field-radius: 0.75rem;
  --contact-field-padding-y: 0.75rem;
  --contact-field-padding-x: 1rem;
  --contact-field-font-size: 0.875rem;
  --contact-field-line-height: 1.25rem;
  --contact-field-font-weight: 500;
  --contact-field-text-color: #111111;
  --contact-field-placeholder-color: #6b7280;
  --contact-field-background: #ffffff;
}
.cog-form__container{
  background-color: transparent !important;
}
.contact-form-shell .cog-cognito,
.contact-form-shell .cog-cognito--styled {
  --font-family: 'Space Grotesk', sans-serif;
  --font-size: var(--contact-field-font-size);
}
.contact-form-shell form,
.contact-form-shell .cognito {
  width: 100%;
}

.contact-form-shell ul,
.contact-form-shell ol,
.contact-form-shell li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-form-shell input:not([type='hidden']):not([type='checkbox']):not([type='radio']):not([type='submit']):not([type='file']),
.contact-form-shell textarea,
.contact-form-shell select {
  width: 100% !important;
  border: var(--contact-field-border-width) solid
    var(--contact-field-border-color) !important;
  border-radius: var(--contact-field-radius) !important;
  padding: var(--contact-field-padding-y)
    var(--contact-field-padding-x) !important;
  background: var(--contact-field-background) !important;
  color: var(--contact-field-text-color) !important;
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: var(--contact-field-font-size) !important;
  line-height: var(--contact-field-line-height) !important;
  font-weight: var(--contact-field-font-weight) !important;
  box-shadow: none !important;
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
  appearance: none;
  -webkit-appearance: none;
}

.contact-form-shell input::placeholder,
.contact-form-shell textarea::placeholder,
.contact-form-shell select {
  color: var(--contact-field-placeholder-color) !important;
}

.contact-form-shell input:focus,
.contact-form-shell textarea:focus,
.contact-form-shell select:focus {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
  border-color: var(--contact-field-border-color) !important;
  box-shadow: none !important;
}

.contact-form-shell textarea {
  min-height: 120px !important;
  resize: none;
}

.contact-form-shell button[type='submit'],
.contact-form-shell input[type='submit'] {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  width: fit-content !important;
  min-height: 46px !important;
  padding: 12px 16px !important;
  border: 1px solid #000000 !important;
  border-radius: 2px !important;
  background-color: #7FBC8C !important;
  color: #000000 !important;
  font-family: 'Archivo', 'Space Grotesk', sans-serif !important;
  font-weight: 600 !important;
  font-size: 20px !important;
  line-height: 1 !important;
  box-shadow: 6px 4px 0 0 #000000 !important;
  cursor: pointer !important;
  text-decoration: none !important;
  will-change: transform, box-shadow !important;
  transition: transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 0.18s ease !important;
}

.contact-form-shell button[type='submit']:hover,
.contact-form-shell input[type='submit']:hover {
  background-color: #77b285 !important;
  transform: translate(3px, 2px) !important;
  box-shadow: 3px 2px 0 0 #000000 !important;
}

.contact-form-shell button[type='submit']:active,
.contact-form-shell input[type='submit']:active {
  transform: translate(6px, 4px) !important;
  box-shadow: 0 0 0 0 #000000 !important;
}

.contact-form-shell .elLabel,
.contact-form-shell label {
  display: none !important;
}

.contact-form-shell .elError,
.contact-form-shell .cog-field__error,
.contact-form-shell .cog-input__error {
  margin-top: 6px;
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 0.8rem !important;
  font-weight: 600 !important;
  color: #7a1c14 !important;
}

.contact-form-shell .c-forms-form,
.contact-form-shell .cognito {
  background: transparent !important;
}

.cog-abuse.cog-wrapper, .cog-branding.cog-branding--minimal{
display: none !important;
}
.cog-confirmation__message{
  font-family: 'Bricolage Grotesque', sans-serif !important;
  font-weight: 700 !important;
  color: #111111 !important;
}
@media (max-width: 640px) {
  .contact-form-shell button[type='submit'],
  .contact-form-shell input[type='submit'] {
    font-size: 18px;
  }
}

      `}</style>
      <div className="contact-form-shell">
        <div ref={containerRef} />
      </div>
    </motion.div>
  );
}
