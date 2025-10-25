'use client';

import { useEffect, useState } from 'react';
import { programData } from '@/data/data';
import Title from '@/components/reusable/Title';
import { StudentIcon, WarningIcon, TableIcon, ThumbsUpIcon, ArrowRightIcon, CircleNotchIcon } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

const blob = [
  { id: 0, color: 'bg-red-200' },
  { id: 1, color: 'bg-primary/70' },
  { id: 2, color: 'bg-green-200' },
  { id: 3, color: 'bg-blue-200' },
];

export default function EnrollmentFormPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', whatsapp: '', email: '', address: '', programTitle: '', age: ''
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const programs = programData.map(p => p.title);

  // Auto-hide toast 5 detik
  useEffect(() => {
    if (!err && !ok) return;
    const t = setTimeout(() => {
      if (err) setErr(null);
      if (ok) setOk(null);
    }, 7000);
    return () => clearTimeout(t);
  }, [err, ok, setErr, setOk]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr(null); setOk(null);

    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || 'Gagal mengirim pendaftaran');
      return;
    }
    setOk('Your enrollment success');
    setForm({ firstName:'', lastName:'', whatsapp:'', email:'', address:'', programTitle:'', age: ''});
  }

  return (
    <section>
      <div className="max-w-[1400px] mx-auto border-x border-dashed border-border bg-white pt-42">
        <div className="relative">
          <div className="flex items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-between w-[600px]">
            {blob.map((item) => (
              <div key={item.id} className={`w-[120px] h-[120px] ${item.color} blur-[90px]`} />
            ))}
          </div>
          <div className="relative">
            <Title title={['Join our community', 'of Learners today', 'easy, fast, inspiring']} desc={'Enrollment'} IconBase={StudentIcon}/>
          </div>
        </div>

        <div className="flex items-center justify-center border-y border-dashed border-border mt-16 py-3 tracking-tighter">
          <div className="flex items-center gap-x-1 border rounded-full text-sm py-3 px-5 bg-muted border border-border/40 text-foreground">
            <TableIcon size={18} weight="light"/>
            <p>Enrollment Form</p>
          </div>
        </div>

        {/* FORM */}
        <div className='relative pt-16 pb-24 border-b border-dashed border-border'>
          <div className="flex items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-between w-[1200px]">
            {blob.slice(2,4).map((item) => (
              <div key={item.id} className={`w-[200px] h-[300px] ${item.color} blur-[150px]`} />
            ))}
          </div>
          <form
            onSubmit={onSubmit}
            className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-border/30 bg-muted/90 p-12 text-foreground relative"
            >
            <div className="relative tracking-normal">
              <div className="grid grid-cols-2 gap-12 tracking-tighter">
                <div>
                  <p className="text-accent mb-1">What's your first name? *</p>
                  <input
                    className="w-full py-3 border-b border-border focus:outline-none text-foreground placeholder:text-[#d1d1d3]"
                    placeholder="e.g. Fatih"
                    value={form.firstName}
                    onChange={e=>setForm(f=>({...f, firstName:e.target.value}))}
                    required
                  />
                </div>
                <div>
                  <p className="text-accent mb-1">What's your second name? *</p>
                  <input
                    className="w-full py-3 border-b border-border focus:outline-none text-foreground placeholder:text-[#d1d1d3]"
                    placeholder="e.g. Surya"
                    value={form.lastName}
                    onChange={e=>setForm(f=>({...f, lastName:e.target.value}))}
                    required
                  />
                </div>
                <div>
                  <p className="text-accent mb-1">What's your main email? *</p>
                  <input
                    type="email"
                    className="w-full py-3 border-b border-border focus:outline-none text-foreground placeholder:text-[#d1d1d3]"
                    placeholder="e.g. example@gmail.com"
                    value={form.email}
                    onChange={e=>setForm(f=>({...f, email:e.target.value}))}
                    required
                  />
                </div>
                <div>
                  <p className="text-accent mb-1">What's your whatsapp number? *</p>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="\d*"
                    className="w-full py-3 border-b border-border focus:outline-none text-foreground placeholder:text-[#d1d1d3]"
                    placeholder="e.g. 081319446773"
                    value={form.whatsapp}
                    onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <p className="text-accent mb-1">How old are you? *</p>
                  <input
                    type="number"
                    min={10}
                    max={40}
                    step={1}
                    className="w-full py-3 border-b border-border focus:outline-none text-foreground placeholder:text-[#d1d1d3]"
                    placeholder="e.g. 23"
                    value={form.age}
                    onChange={e=>setForm(f=>({...f, age:e.target.value}))}
                    required
                  />
                </div>
                <div>
                  <p className="text-accent mb-1">Choose program *</p>
                  <select
                    className="w-full py-3 border-b border-border focus:outline-none text-foreground"
                    value={form.programTitle}
                    onChange={e=>setForm(f=>({...f, programTitle:e.target.value}))}
                    required
                  >
                    <option className="text-[#d1d1d3]" value="">—</option>
                    {programs.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="col-span-2">
                  <p className="text-accent mb-3">What's your current address? *</p>
                  <textarea
                    className="w-full p-3 border border-border focus:outline-none text-foreground placeholder:text-[#d1d1d3] h-30 bg-white rounded-xl"
                    placeholder="e.g. Jl.Dahlia Raya Blok G no 25"
                    value={form.address}
                    onChange={e=>setForm(f=>({...f, address:e.target.value}))}
                    required
                  />
                </div>

                <div className="col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`${loading ? 'opacity-50' : 'opacity-100'} bg-black text-white rounded-lg px-4 py-3 font-medium flex items-center gap-x-2 hover:gap-x-4 transition-all duration-300 cursor-pointer`}
                  >
                    {loading ? 'Please wait' : 'Send Enrollment'}
                     {loading ? (
                      <div>
                        <CircleNotchIcon weight='bold' className='animate-spin'/>
                      </div>
                     ) : (
                      <div>
                        <ArrowRightIcon/>
                      </div>
                     )}
                  </button>
                </div>

                <div className="col-span-2 fixed inset-x-0 bottom-4 pointer-events-none z-[9999]">
                  <div className="relative">
                    <AnimatePresence mode="popLayout">
                      {err && (
                        <motion.div
                          key={`err-${err}`}
                          initial={{ y: 24, opacity: 0 }}
                          animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
                          exit={{ y: 24, opacity: 0, transition: { duration: 0.25 } }}
                          className="mx-auto max-w-max pointer-events-auto flex items-center gap-x-1 justify-center text-sm rounded-full
                                    bg-gradient-to-b from-red-500 to-red-700 text-white py-2 px-3 shadow-lg"
                          role="status" aria-live="polite"
                        >
                          <div className="text-yellow-300">
                            <WarningIcon weight="fill" />
                          </div>
                          <p>{err}</p>
                        </motion.div>
                      )}
                      {ok && (
                        <motion.div
                          key={`ok-${ok}`}
                          initial={{ y: 24, opacity: 0 }}
                          animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
                          exit={{ y: 24, opacity: 0, transition: { duration: 0.25 } }}
                          className="mx-auto max-w-max pointer-events-auto flex items-center gap-x-1 justify-center text-sm rounded-full
                                    bg-gradient-to-b from-green-500 to-green-700 text-white py-2 px-3 shadow-lg"
                          role="status" aria-live="polite"
                        >
                          <div className="text-green-200">
                            <ThumbsUpIcon weight="fill" />
                          </div>
                          <p>{ok}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Faq/>
      </div>
      <Footer/>
    </section>
  );
}
