import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with actual backend when available)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', form);
    
    toast.success('Your request has been submitted. Our engineers will contact you shortly.');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="font-body text-sm text-foreground">Full Name *</Label>
          <Input
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="bg-secondary/50 border-border font-body"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-body text-sm text-foreground">Email *</Label>
          <Input
            required
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="bg-secondary/50 border-border font-body"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="font-body text-sm text-foreground">Phone</Label>
          <Input
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            placeholder="+234..."
            className="bg-secondary/50 border-border font-body"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-body text-sm text-foreground">Service Interest</Label>
          <Select value={form.service} onValueChange={v => setForm({ ...form, service: v })}>
            <SelectTrigger className="bg-secondary/50 border-border font-body">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="power">Power & Electrification</SelectItem>
              <SelectItem value="water">Water Infrastructure</SelectItem>
              <SelectItem value="solar">Renewable Energy</SelectItem>
              <SelectItem value="civil">Civil Engineering</SelectItem>
              <SelectItem value="general">General Contracts</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="font-body text-sm text-foreground">Message *</Label>
        <Textarea
          required
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Describe your project or requirements..."
          rows={5}
          className="bg-secondary/50 border-border font-body resize-none"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-8 h-12">
        {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
        Submit Request
      </Button>
    </form>
  );
}