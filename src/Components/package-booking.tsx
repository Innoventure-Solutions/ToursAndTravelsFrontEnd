import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type BookingFormProps = {
  packageTitle: string;
  amount: string;
  selectedHotelClass: string;
  onClose: () => void;
  onBack: () => void;
  onBook: (data: {
    name: string;
    email: string;
    countryCode: string;
    mobile: string;
  }) => void;
};

const countryCodes = [
  { label: "+84 Vietnam", value: "+84" },
  { label: "+91 India", value: "+91" },
  { label: "+1 USA", value: "+1" },
  { label: "+44 UK", value: "+44" },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PackageBooking = ({
  packageTitle,
  amount,
  selectedHotelClass,
  onClose,
  onBack,
  onBook,
}: BookingFormProps) => {
  const [countryCode, setCountryCode] = useState(countryCodes[0].value);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const isValid =
    name.trim().length > 1 && emailRegex.test(email) && mobile.trim().length > 5;

  const formAction = import.meta.env.VITE_FORMSUBMIT_EMAIL
    ? `https://formsubmit.co/${import.meta.env.VITE_FORMSUBMIT_EMAIL}`
    : "#";

    console.log("Form action URL:", formAction);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!isValid) {
      event.preventDefault();
      return;
    }

    setTimeout(() => {
      onBook({ name: name.trim(), email: email.trim(), countryCode, mobile: mobile.trim() });
    }, 0);
  };

  const handleWhatsApp = () => {
    const phoneNumber = `918056111314`; // use country code, no +
    const message = `Booking request:\nPackage: ${packageTitle}\nSelected hotel: ${selectedHotelClass}\nAmount: ${amount}\nName: ${name.trim()}\nEmail: ${email.trim()}\nMobile: ${countryCode} ${mobile.trim()}`;
    const whatsappUrl = phoneNumber
      ? `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`
      : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/60 px-4 py-6">
      <div className="flex max-h-[90dvh] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-200 bg-slate-900 px-6 py-5 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Booking Form
            </p>
            <h2 className="mt-2 text-2xl font-bold">Confirm your booking</h2>
            <p className="mt-1 text-sm text-slate-300">
              Fill the contact details below to book this package.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20"
          >
            x
          </button>
        </div>

        <form
          action={formAction}
          method="POST"
          target="_blank"
          noValidate
          onSubmit={handleSubmit}
          className="min-h-0 flex-1 space-y-6 overflow-y-auto px-6 py-6"
        >
          <input type="hidden" name="_subject" value="New travel booking request" />
          <input type="hidden" name="_replyto" value={email} />
          <input type="hidden" name="package" value={packageTitle} />
          <input type="hidden" name="selected_hotel" value={selectedHotelClass} />
          <input type="hidden" name="amount" value={amount} />
          <input type="hidden" name="country_code" value={countryCode} />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Package</span>
              <input
                type="text"
                value={packageTitle}
                disabled
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-700 disabled:cursor-not-allowed disabled:bg-slate-100"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Selected hotel</span>
              <input
                type="text"
                value={selectedHotelClass}
                disabled
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-700 disabled:cursor-not-allowed disabled:bg-slate-100"
              />
            </label>
          </div>

          <div>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Amount</span>
              <input
                type="text"
                value={amount}
                disabled
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-700 disabled:cursor-not-allowed disabled:bg-slate-100"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Full name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-slate-500 focus:ring-2 focus:ring-sky-100"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-slate-500 focus:ring-2 focus:ring-sky-100"
              />
            </label>
          </div>

          <div>
            <span className="text-sm font-semibold text-slate-700">Mobile number</span>
            <div className="mt-2 flex gap-3">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none focus:border-slate-500 focus:ring-2 focus:ring-sky-100"
              >
                {countryCodes.map((code) => (
                  <option key={code.value} value={code.value}>
                    {code.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="123 456 7890"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-slate-500 focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 whitespace-nowrap"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              disabled={!isValid}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 whitespace-nowrap"
            >
              Book with WhatsApp
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 whitespace-nowrap"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageBooking;
