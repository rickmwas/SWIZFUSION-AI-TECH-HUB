
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: 'What is SwizFusion AI Tech Hub?',
    answer: 'SwizFusion AI Tech Hub is a platform offering innovative AI-driven solutions and services.'
  },
  {
    question: 'How can I get started?',
    answer: 'Simply contact us through the form on our website and our team will guide you.'
  },
  {
    question: 'Is there customer support?',
    answer: 'Yes, we offer 24/7 customer support for all our clients.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-2 text-base px-4 py-2 bg-primary/10 text-primary">FAQs</Badge>
          <h2 className="text-4xl font-bold mb-2 text-primary">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Card key={i} className="flex flex-col p-8 shadow-lg border border-border bg-card">
              <CardContent className="flex-1 flex flex-col justify-center p-0">
                <div className="font-semibold mb-2 text-foreground">Q: {faq.question}</div>
                <div className="text-muted-foreground">A: {faq.answer}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
