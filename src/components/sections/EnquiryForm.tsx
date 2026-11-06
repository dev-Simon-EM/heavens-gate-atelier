import { useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/contact';

const GARMENT_OPTIONS = [
  ...SERVICES.map((service) => service.title),
  'Occasion or event outfit',
  'Something else',
];

type FormValues = { name: string; garment: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = { name: '', garment: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!values.garment) errors.garment = 'Please choose the type of garment.';
  if (values.message.trim().length < 10) {
    errors.message = 'Please tell us a little more, in at least 10 characters.';
  }
  return errors;
}

const fieldClasses =
  'w-full rounded-sm border border-ink-700 bg-ink-800 px-4 py-3 text-sm text-ivory-50 placeholder:text-ink-300 transition-colors duration-300 focus:border-champagne-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400/60';

export default function EnquiryForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const fieldId = useId();

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = `Hello Heavens Gate Atelier. My name is ${values.name.trim()}. I would like to enquire about: ${values.garment}. ${values.message.trim()}`;
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-sm border border-ink-800 bg-ink-800/60 p-6 sm:p-8">
      <div>
        <h3 className="font-serif text-2xl font-medium text-ivory-50">Send Us Your Enquiry</h3>
        <p className="mt-2 text-sm leading-[1.6] text-ink-300">
          Your enquiry opens in WhatsApp so you can send it straight to us.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor={`${fieldId}-name`} className="text-sm font-medium text-ivory-200">
          Your name
        </label>
        <input
          id={`${fieldId}-name`}
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${fieldId}-name-error` : undefined}
          placeholder="e.g. Amaka"
          className={fieldClasses}
        />
        {errors.name && (
          <p id={`${fieldId}-name-error`} className="text-sm text-error-100">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor={`${fieldId}-garment`} className="text-sm font-medium text-ivory-200">
          Type of garment or service
        </label>
        <select
          id={`${fieldId}-garment`}
          value={values.garment}
          onChange={handleChange('garment')}
          aria-invalid={Boolean(errors.garment)}
          aria-describedby={errors.garment ? `${fieldId}-garment-error` : undefined}
          className={fieldClasses}
        >
          <option value="">Choose an option</option>
          {GARMENT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.garment && (
          <p id={`${fieldId}-garment-error`} className="text-sm text-error-100">
            {errors.garment}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor={`${fieldId}-message`} className="text-sm font-medium text-ivory-200">
          How can we help?
        </label>
        <textarea
          id={`${fieldId}-message`}
          rows={4}
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${fieldId}-message-error` : undefined}
          placeholder="e.g. I would love my black midi dress tailored to fit my waist, and a button replaced on my blouse."
          className={`${fieldClasses} resize-none`}
        />
        {errors.message && (
          <p id={`${fieldId}-message-error`} className="text-sm text-error-100">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-champagne-400 px-6 py-3.5 text-sm font-semibold tracking-wide text-ink-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-champagne-300 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-300 sm:w-auto"
      >
        Continue on WhatsApp
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </form>
  );
}
