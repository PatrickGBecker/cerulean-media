import { FiPhone, FiMapPin } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { PageInfo } from '@/typings';
import { useState } from 'react';

type Props = {
  pageInfo: PageInfo[];
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function Contact({ pageInfo }: Props) {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        }
      );

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-center max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#85caff] text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 w-full max-w-2xl mt-20">
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          
          <div className="flex items-center space-x-3">
            <FiMapPin className="text-[#85caff] h-5 w-5 animate-pulse" />
            <p className="text-sm md:text-lg">{pageInfo[0]?.address}</p>
          </div>
          <div className="flex items-center space-x-3">
            <BsEnvelope className="text-[#85caff] h-5 w-5 animate-pulse" />
            <p className="text-sm md:text-lg">{pageInfo[0]?.email}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full">
          {/* Full Name & Email row */}
          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="contactInput flex-1"
              name="fullName"
              placeholder="Full Name"
              required
              type="text"
            />
            <input
              className="contactInput flex-1"
              name="email"
              placeholder="Email"
              required
              type="email"
              autoComplete="email"
            />
          </div>

          {/* Phone & Budget row */}
          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="contactInput flex-1"
              name="phone"
              placeholder="Phone Number"
              type="tel"
              autoComplete="tel"
            />
            <select
              className="contactInput flex-1 appearance-none cursor-pointer"
              name="budget"
              defaultValue=""
              required
            >
              <option value="" disabled className="text-[#85caff]/40 bg-[#1e3348]">
                Estimated Budget
              </option>
              <option value="Under $500" className="bg-[#1e3348]">Under $500</option>
              <option value="$500 - $1,000" className="bg-[#1e3348]">$500 – $1,000</option>
              <option value="$1,000 - $2,500" className="bg-[#1e3348]">$1,000 – $2,500</option>
              <option value="$2,500 - $5,000" className="bg-[#1e3348]">$2,500 – $5,000</option>
              <option value="$5,000+" className="bg-[#1e3348]">$5,000+</option>
              <option value="Not sure yet" className="bg-[#1e3348]">Not sure yet</option>
            </select>
          </div>

          {/* Project Description */}
          <textarea
            className="contactInput min-h-[120px] resize-none"
            name="projectDescription"
            placeholder="Tell us about your project..."
            maxLength={1000}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-[#85caff]/40 text-[#1e3348] py-4 px-10 rounded-lg font-bold text-lg
                       transition-all duration-200
                       hover:bg-[#85caff]/70 focus:bg-[#85caff]
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-[#51b4ff] text-center text-sm mt-2">
              Thanks! Your message has been sent. We&apos;ll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm mt-2">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
