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
