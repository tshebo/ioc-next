import Image from "next/image";
import { MailOpen, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTiktokLine, // Added missing comma here
  RiMailLine,
  // RiMapFill, // This icon was imported but not used, can be removed if not needed elsewhere
  // RiUserLocationFill, // This icon was imported but not used, can be removed if not needed elsewhere
  RiYoutubeLine,
} from "@remixicon/react";

export function Footer() {
  return (
    <footer className="py-12 sm:py-16">
      <div className="container grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4 space-x-20">
          <div className="flex items-center gap-2">
            {/* <img
              src="/Image Of Christ/name1.webp"
              width={300}
              height={150}
              alt="ioc-name"
            /> */}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="inline-block h-6 w-6" />
            <address className="not-italic inline-block">
              <div>Johannesburg</div>
              <div>South Africa</div>
            </address>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="inline-block h-6 w-6" />
            <Link href="/+27 78 070 0179" className="hover:underline">
              +27 78 070 0179
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <RiMailLine className="inline-block h-6 w-6" />
            <Link
              href="mailto:IOCRecoverycentre@gmail.com"
              className="hover:underline"
            >
              IOCRecoverycentre@gmail.com
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/About"
                  className="hover:underline"
                  prefetch={false}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="hover:underline"
                  prefetch={false}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Gallery"
                  className="hover:underline"
                  prefetch={false}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="hover:underline"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/Image of Christ/Vision.jpg"
                  target="_blank"
                  className="hover:underline"
                  prefetch={false}
                >
                  The Vision
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Socials</h4>
            <div className="flex items-center gap-4">
              <Link
                href="mailto:IOCRecoverycentre@gmail.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <RiMailLine className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100067463223702"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <RiFacebookLine className="h-6 w-6" />
              </Link>
              {/* Removed extra </Link> tag that was here */}
              <Link
                href="https://www.tiktok.com/@imageofchrist_id=100067463223702" // Ensure this TikTok URL is correct
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <RiTiktokLine className="h-6 w-6" />
              </Link>
              <Link
                // The previous YouTube URL "https://www.youtube.com/channel/UCNABXmSZady1CqyMyPl91pQ" seemed incorrect.
                // Please replace "YOUR_YOUTUBE_CHANNEL_URL_HERE" with your actual YouTube channel URL.
                href="YOUR_YOUTUBE_CHANNEL_URL_HERE"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <RiYoutubeLine className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/imageofchristrecoverycentre_?igsh=ZnRhNDBpeHg1ZDdo&utm_source=qrigsh=MXVhdmRuZ3Fya3U0Mw=="
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <RiInstagramLine className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
