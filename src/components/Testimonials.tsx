
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'This platform transformed our workflow! Highly recommended.',
    title: 'Product Manager, Acme Corp',
  },
  {
    name: 'John Smith',
    feedback: 'Excellent support and intuitive design. Five stars!',
    title: 'CTO, BetaTech',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-2 text-base px-4 py-2 bg-primary/10 text-primary">What Our Clients Say</Badge>
          <h2 className="text-4xl font-bold mb-2 text-primary">Testimonials</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col items-center p-8 shadow-lg border border-border bg-card">
              <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H7.83l3.59-3.59L10 6l-6 6 6 6 1.41-1.41L7.83 13H19v-2z" />
              </svg>
              <CardContent className="flex-1 flex flex-col items-center justify-center p-0">
                <p className="text-lg italic mb-4 text-muted-foreground text-center">"{t.feedback}"</p>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
