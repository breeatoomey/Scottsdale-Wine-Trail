import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    document.title = "Contact - Scottsdale Wine Trail";
  }, []);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-20" data-testid="contact-page">
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Plan Your Visit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore the Scottsdale Wine Trail? Get in touch for recommendations, group bookings, or special events
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="wine-gradient rounded-full p-3 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-gold-400"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Location</h4>
                      <p className="text-gray-600">Downtown Scottsdale Entertainment District<br />Scottsdale, Arizona 85251</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="wine-gradient rounded-full p-3 flex-shrink-0">
                      <i className="fas fa-clock text-gold-400"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Operating Hours</h4>
                      <p className="text-gray-600">Vary by winery<br />Most open daily 11am - 9pm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="wine-gradient rounded-full p-3 flex-shrink-0">
                      <i className="fas fa-phone text-gold-400"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Contact</h4>
                      <p className="text-gray-600">info@scottsdalewinetrail.com<br />(555) 123-WINE</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Quick Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-burgundy-600"></i>
                      <span>Download your passport before visiting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-burgundy-600"></i>
                      <span>Plan 2-3 hours for the full experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-burgundy-600"></i>
                      <span>Consider rideshare or designated driver</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-burgundy-600"></i>
                      <span>Make reservations for larger groups</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                                data-testid="input-first-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                                data-testid="input-last-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              {...field} 
                              className="focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                                data-testid="select-subject"
                              >
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Information</SelectItem>
                              <SelectItem value="group">Group Booking</SelectItem>
                              <SelectItem value="private">Private Events</SelectItem>
                              <SelectItem value="media">Media Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
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
                            <Textarea 
                              rows={5} 
                              {...field} 
                              className="focus:ring-2 focus:ring-burgundy-500 focus:border-transparent resize-none"
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full gold-gradient text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-[1.02]"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
