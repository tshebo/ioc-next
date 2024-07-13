import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Building } from "lucide-react";
import ContactForm from "./ContactForm";
import { RiBankFill } from "@remixicon/react";

export function ContactPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Whether you're seeking help to overcome addiction, looking to make a
            difference through donations, or eager to join our team as a
            volunteer, we welcome you to reach out to us for support,
            opportunities, and collaboration on this journey towards recovery
            and hope.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">+27 78 070 0179</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  IOCRecoverycentre@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-muted-foreground mt-1" />
                <span className="text-muted-foreground">
                  Johannesburg
                  <br />
                  South Africa
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Banking Details</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <RiBankFill className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Bank Name: First National Bank (FNB)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCardIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Account Number: 6289 129 1868
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Branch Code: 259605
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BanknoteIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  SWIFT Code: FIRNZAJJ
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-4">
            <ContactForm />
          </div>
          {/* 
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Donation Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input id="name" type="text" placeholder="Enter name on card" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  type="text"
                  placeholder="Enter card number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger id="expiry-month" aria-label="Month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="expiry-year" aria-label="Year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                      <SelectItem value="2030">2030</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" type="text" placeholder="Enter CVC" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <Button type="submit" className="w-full">
                  Donate
                </Button>
              </div>
            </form>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

function BanknoteIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function CreditCardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function MailIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
 