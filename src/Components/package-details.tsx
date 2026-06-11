import { useEffect } from "react";

export type PackagePrice = {
  label: string;
  price: string;
};

export type PackageItineraryDay = {
  day: string;
  title: string;
  meals: string;
  activities: string[];
};

export type PackageDetailsData = {
  title: string;
  duration: string;
  destinations: string;
  pricing: PackagePrice[];
  included: string[];
  excluded: string[];
  itinerary: PackageItineraryDay[];
};

type PackageDetailsProps = {
  details: PackageDetailsData;
  selectedHotelClass: string;
  onClose: () => void;
  onContinueBooking: () => void;
};

const normalizeHotelClass = (value: string) => value.replace(/[-\s]/g, "").toLowerCase();

const PackageDetails = ({
  details,
  selectedHotelClass,
  onClose,
  onContinueBooking,
}: PackageDetailsProps) => {
  const selectedPrice = details.pricing.find((price) =>
    normalizeHotelClass(price.label).startsWith(normalizeHotelClass(selectedHotelClass)),
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/60 px-4 py-6">
      <div className="flex max-h-[90dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-start justify-between gap-4 bg-slate-800 px-5 py-5 text-white md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Booking Details
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              {details.title}
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              {details.duration} | {details.destinations}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close package details"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20"
          >
            x
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Selected Hotel
              </p>
              <p className="mt-2 text-xl font-bold text-slate-900">
                {selectedHotelClass}
              </p>
              <p className="mt-1 text-sm font-semibold text-orange-600">
                {selectedPrice?.price}
              </p>
            </div>

            {details.pricing.map((price) => (
              <div
                key={price.label}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
              >
                <p className="text-sm font-semibold text-gray-500">
                  {price.label}
                </p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  {price.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-green-100 bg-green-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">
                What's Included
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {details.included.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">
                What's Excluded
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {details.excluded.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>
          </div>

          {details.itinerary.length > 0 && (
            <section className="mt-6">
              <h3 className="text-xl font-bold text-slate-900">
                Detailed Itinerary
              </h3>

              <div className="mt-4 space-y-4">
                {details.itinerary.map((day) => (
                  <article
                    key={day.day}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="grid gap-2 md:grid-cols-[90px_1fr_90px] md:items-start">
                      <p className="font-bold text-blue-600">{day.day}</p>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          {day.title}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                          {day.activities.map((activity) => (
                            <li key={activity}>- {activity}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="rounded-full bg-gray-100 px-3 py-1 text-center text-sm font-semibold text-slate-700">
                        {day.meals}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="sticky bottom-0 mt-6 flex flex-col gap-3 border-t border-gray-100 bg-transparent pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-3 font-bold text-slate-700 transition hover:bg-gray-200 bg-white"
            >
              Close
            </button>
            <button
              type="button"
              onClick={onContinueBooking}
              className="rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Continue Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
