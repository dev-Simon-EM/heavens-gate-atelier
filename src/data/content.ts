import type { LucideIcon } from 'lucide-react';
import { MessageCircle, PackageCheck, Ruler, Shirt } from 'lucide-react';

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    id: 'clothing-repairs',
    title: 'Clothing Repairs',
    summary:
      'Torn garments and worn fabric deserve careful attention. We repair them neatly so that they look as considered as the day you first wore them.',
    points: ['Repairing torn garments', 'Patching damaged areas', 'Restoring the finish of everyday pieces'],
    image: 'https://images.pexels.com/photos/7147595/pexels-photo-7147595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Designer working on an unfinished garment on a mannequin in a studio',
  },
  {
    id: 'clothing-alterations',
    title: 'Clothing Alterations',
    summary:
      'The right fit changes everything. We adjust waistlines, sleeves and overall proportions so that each piece sits beautifully on you.',
    points: ['Waist and sleeve adjustments', 'Refining the fit through the body', 'Other agreed alterations'],
    image: 'https://images.pexels.com/photos/4622423/pexels-photo-4622423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Tailor adjusting a garment on a mannequin',
  },
  {
    id: 'school-uniforms',
    title: 'School Uniform Adjustments',
    summary:
      'Neat, comfortable uniforms help children feel confident at school. We make repairs and adjustments so that each uniform fits well and looks smart.',
    points: ['Repairs to children’s school uniforms', 'Adjustments for comfort and fit', 'Fixing loose seams and damaged areas'],
    image: 'https://images.pexels.com/photos/17697757/pexels-photo-17697757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Stylish woman in a plaid outfit against a blurred background',
  },
  {
    id: 'zip-and-button',
    title: 'Zip and Button Replacement',
    summary:
      'Small details complete a garment. We replace faulty zips and missing buttons so that every fastening works and looks just right.',
    points: ['Replacing faulty zips where feasible', 'Replacing missing or damaged buttons', 'Matching finishing details'],
    image: 'https://images.pexels.com/photos/8030153/pexels-photo-8030153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Fabric being pinned on a mannequin during dressmaking',
  },
  {
    id: 'hemming',
    title: 'Hemming and Shortening',
    summary:
      'The length of a hem sets the whole silhouette. We shorten trousers, skirts and sleeves with clean, precise finishing.',
    points: ['Trouser hemming', 'Skirt and dress shortening', 'Sleeve shortening'],
    image: 'https://images.pexels.com/photos/7147587/pexels-photo-7147587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Dressmaker at a desk with a flexible ruler in a studio',
  },
  {
    id: 'patching-fabric',
    title: 'Patching and Fabric Repairs',
    summary:
      'Fine fabrics need a gentle hand. We carry out discreet patching and fabric repairs that preserve the look and feel of the garment.',
    points: ['Discreet patching', 'Fabric repairs that keep the original character', 'Careful finishing'],
    image: 'https://images.pexels.com/photos/8465992/pexels-photo-8465992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up of cream silk fabric with smooth texture and gentle folds',
  },
];

export type Celebration = {
  id: string;
  label: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const CELEBRATIONS: Celebration[] = [
  {
    id: 'festive',
    label: 'Festive Season',
    title: 'Festive Season Dressing',
    summary:
      'Dresses, suits and family outfits for the festive season deserve to look their very best. We refine the fit, finish the details and make the changes you need in good time.',
    image: 'https://images.pexels.com/photos/18747597/pexels-photo-18747597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Stylish woman in a black outfit posing in a studio with a chair',
  },
  {
    id: 'new-year',
    label: 'New Year',
    title: 'New Year Elegance',
    summary:
      'Welcome the new year in an outfit that feels made for you. We check the fit, refine the lines and attend to the finishing so you feel confident all evening.',
    image: 'https://images.pexels.com/photos/33714925/pexels-photo-33714925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Fashion model in a black dress in a dramatic studio setting',
  },
  {
    id: 'birthdays',
    label: 'Birthdays',
    title: 'Celebration and Party Wear',
    summary:
      'Planning a birthday celebration? Bring us the outfit you have chosen and we will fine-tune the fit and details so that it is ready for the occasion.',
    image: 'https://images.pexels.com/photos/13920565/pexels-photo-13920565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Stylish woman in a white outfit posing elegantly',
  },
  {
    id: 'events',
    label: 'Events and Ceremonies',
    title: 'Occasion Wear',
    summary:
      'Weddings, ceremonies and special events call for clothes that feel as good as they look. We care for occasion garments with the same attention we give every piece, with prices agreed before work begins.',
    image: 'https://images.pexels.com/photos/17173186/pexels-photo-17173186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Fashion portrait of a woman posing against a vibrant red backdrop',
  },
];

export type Value = { title: string; body: string };

export const VALUES: Value[] = [
  {
    title: 'Elegance',
    body: 'We believe beautiful clothing is about proportion, balance and the quiet confidence of a garment that fits well.',
  },
  {
    title: 'Personal Style',
    body: 'Clothing is an expression of who you are, so every piece and every request receives individual consideration.',
  },
  {
    title: 'Attention to Detail',
    body: 'From the choice of finish to the smallest stitch, every element shapes how a garment looks and feels.',
  },
  {
    title: 'Quality Workmanship',
    body: 'Careful, well-finished work that respects the fabric and the purpose of the garment.',
  },
  {
    title: 'Customer Satisfaction',
    body: 'Clear communication, agreed prices and a genuine interest in helping you feel comfortable and well presented.',
  },
];

export type Step = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const STEPS: Step[] = [
  {
    title: 'Get in Touch',
    body: 'Reach out on WhatsApp or by phone to tell us what you have in mind.',
    icon: MessageCircle,
  },
  {
    title: 'Share Your Garment',
    body: 'Show us the piece or describe the service you are looking for.',
    icon: Shirt,
  },
  {
    title: 'Agree on the Details',
    body: 'Discuss the fit, finish and timeline, and agree on a clear price before any work begins.',
    icon: Ruler,
  },
  {
    title: 'Finish and Collection',
    body: 'Your garment is finished with care and made ready for collection.',
    icon: PackageCheck,
  },
];
