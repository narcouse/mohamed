/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  iconName: string; // lucide icon identifier
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  resultsTitle: string;
  resultsMetric: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDetails?: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  tags: string[];
  client: string;
  year: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceId: string;
  message: string;
  timestamp: string;
  status: 'new' | 'responded';
}
