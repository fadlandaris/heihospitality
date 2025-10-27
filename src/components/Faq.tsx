'use client';
import React, { useState } from 'react';
import Title from './reusable/Title';
import { QuestionIcon, PlusIcon } from '@phosphor-icons/react';
import { faqData } from '@/data/data';
import Fadein from '@/animation/Fadein';
import Blur from '@/animation/blur';

const blob = [
  { id: 0, color: 'bg-red-200' },
  { id: 1, color: 'bg-primary/70' },
  { id: 2, color: 'bg-green-200' },
  { id: 3, color: 'bg-blue-200' },
];

export default function Faq() {
  // Bisa buka banyak item sekaligus
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="py-24 border-b border-border border-dashed">
      <div className="relative">
        <div className="flex items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-between w-[600px] pointer-events-none">
          {blob.map((b) => (
            <div key={b.id} className={`w-[120px] h-[120px] ${b.color} blur-[90px]`} />
          ))}
        </div>
        <div className="relative">
          <Title
            title={['Find your answers', 'common questions', 'about our platform']}
            desc="Question & Answers"
            IconBase={QuestionIcon}
          />
        </div>
      </div>

      <div className='px-4 lg:px-0'>
        <Blur delay={0}>
          <div className="max-w-3xl mt-12 lg:mt-16 mx-auto bg-accent/10 rounded-lg p-3 grid grid-cols-1 gap-y-1 ">
            {faqData.map((item) => {
              const open = openIds.has(item.id);
              return (
                <Fadein key={item.id} delay={0.3 * item.id}>
                  <div className="bg-white rounded-lg">
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      className="w-full px-3 py-4 text-left cursor-pointer select-none"
                      aria-expanded={open}
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-foreground font-medium">{item.title}</h2>
                        <span
                          className={`transition-transform duration-300 ${
                            open ? 'rotate-45 text-foreground' : 'text-accent'
                          }`}
                        >
                          <PlusIcon size={16} />
                        </span>
                      </div>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-3 pb-4 text-accent">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Fadein>
              );
            })}
          </div>
        </Blur>
      </div>
    </section>
  );
}
