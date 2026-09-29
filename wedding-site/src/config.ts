import type { Page } from "./types";

export const PAYPAL_URL = "https://www.paypal.com/paypalme/OplusP";
export const AMAZON_WISHLIST_URL =
  "https://www.amazon.com/hz/wishlist/ls/3U2I72HKGCC2U?ref_=wl_share";
export const RSVP_EMAIL = "switchhitter.8@gmail.com";
export const VENUE_NAME = "Fenton Township Banquet Hall";
export const VENUE_ADDRESS = "12060 Mantawahka Ave Fenton, MI 48430";
export const MAP_QUERY = encodeURIComponent(
  "12060 Mantawahka Ave Fenton, MI 48430",
);

export const pages: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "venue", label: "Venue" },
  { id: "rsvp", label: "RSVP" },
  { id: "gifts", label: "Gifts" },
];
