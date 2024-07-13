 
import { RiMusicLine, RiTeamLine, RiVideoLine } from "@remixicon/react";
import { Handshake, UserRound, UserRoundCheck, UsersRound } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-4xl text-center underline font-bold ">
          What we do
        </div>
        <div className="text-center text-slate-500 italic my-5 md:px-32">
          "For God knew his people in advance, and he chose them to become like
          his Son, so that his Son would be the firstborn among many brothers
          and sisters." - Romans 8:29
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <UsersRound className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Counselling Services</h3>
              <p className="text-muted-foreground">
                "We offer qualified substance abuse counselling, rehabilitation,
                and support for family reunification and community integration."
              </p>
            </div>
            {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn more</span>
            </Link> */}
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <UserRoundCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Rehabilitation Programs</h3>
              <p className="text-muted-foreground">
                "Through biblical teachings and structured programs, we help
                individuals transform and equip them for a better life.",
              </p>
            </div>
            {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn more</span>
            </Link> */}
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Community Outreach</h3>
              <p className="text-muted-foreground">
                "We actively engage with individuals addicted to substances on
                the streets, offering support and guidance.",
              </p>
            </div>
            {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn more</span>
            </Link> */}
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiTeamLine className="h-8 w-10" />
              </div>
              <h3 className="text-xl font-semibold">Family Support</h3>
              <p className="text-muted-foreground">
                "We provide support to families to help them understand and deal
                with the challenges of substance abuse.",
              </p>
            </div>
            {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn more</span>
            </Link> */}
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiVideoLine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Online Training</h3>
              <p className="text-muted-foreground">
                "We offer online training sessions to help individuals gain new
                skills and improve their lives.",
              </p>
            </div>
            {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn more</span>
            </Link> */}
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiMusicLine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">
                Musical Instrument Lessons
              </h3>
              <p className="text-muted-foreground">
                "We provide lessons in playing musical instruments as part of
                our effort to equip individuals with valuable skills.",
              </p>
            </div>
            {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Learn more</span>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function LaptopIcon(props) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
