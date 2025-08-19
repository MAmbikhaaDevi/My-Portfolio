'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { contact } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    form.reset();
  }
  
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight">Get in Touch</h2>
        <p className="text-muted-foreground mt-2">I&apos;m always open to discussing new projects or opportunities.</p>
      </div>

      <Card className="max-w-4xl mx-auto bg-background/50 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h3 className="font-headline text-2xl font-semibold mb-6">Contact Me</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full glow-on-hover">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Form>
          </div>
          <div className="bg-card/50 p-8 rounded-r-lg">
             <h3 className="font-headline text-2xl font-semibold mb-6">Find Me On</h3>
             <div className="space-y-4">
              <Link href={contact.email} target="_blank" className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group">
                <Mail className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">mjambikhaadevi@gmail.com</p>
                </div>
              </Link>
               <Link href={contact.linkedin} target="_blank" className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group">
                <Linkedin className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">ambikhaadevim</p>
                </div>
              </Link>
               <Link href={contact.github} target="_blank" className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group">
                <Github className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">MAmbikhaaDevi</p>
                </div>
              </Link>
             </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
