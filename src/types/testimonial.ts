export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Slot {
  image: string | null;
  bg?: string;
  borderColor?: string;
  clipPath?: string;
  h: string;
  rounded?: string;
}

export interface TestimonialColumn {
  mt?: string;
  slots: Slot[];
}
