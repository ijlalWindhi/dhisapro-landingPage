import type { Metadata } from 'next';
import { METADATA } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Home | ' + METADATA.creator,
  description: METADATA.description,
  alternates: {
    canonical: METADATA.url,
  },
};

export default function Home() {
  return <main className="relative flex min-h-screen flex-col pt-16"></main>;
}
