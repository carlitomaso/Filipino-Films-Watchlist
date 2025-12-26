export interface Writing {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
}

export const writings: Writing[] = [
  {
    id: '1',
    title: 'The Golden Age of Philippine Cinema',
    author: 'Maria Santos',
    date: '2024-11-15',
    excerpt: 'Exploring the revolutionary period of Filipino filmmaking from the 1950s to 1970s.',
    content: 'The golden age of Philippine cinema represents a transformative period in Filipino cultural expression. During this era, filmmakers like Lamberto Avellana, Gerardo de Leon, and Lino Brocka created masterpieces that not only entertained but also challenged societal norms and political structures. These films were characterized by their bold storytelling, innovative cinematography, and deep exploration of Filipino identity.',
    imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
  },
  {
    id: '2',
    title: 'Indie Revolution: New Wave Filipino Cinema',
    author: 'Juan Dela Cruz',
    date: '2024-10-22',
    excerpt: 'How independent filmmakers are reshaping the landscape of Philippine cinema.',
    content: 'The indie film movement in the Philippines has brought fresh perspectives and authentic storytelling to the forefront. Directors like Brillante Mendoza, Lav Diaz, and Khavn de la Cruz have gained international recognition while staying true to Filipino narratives. This new wave represents a democratization of filmmaking, where stories from marginalized communities finally get the platform they deserve.',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
  },
  {
    id: '3',
    title: 'Women Behind the Camera',
    author: 'Isabel Reyes',
    date: '2024-09-10',
    excerpt: 'Celebrating female directors who are breaking barriers in Philippine filmmaking.',
    content: 'Filipino women directors have been instrumental in shaping contemporary Philippine cinema. From Laurice Guillen to Antoinette Jadaone, these visionaries have crafted stories that resonate with authenticity and emotional depth. Their films often explore themes of family, identity, and social justice, providing perspectives that enrich the entire cinematic landscape.',
    imageUrl: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80',
  },
  {
    id: '4',
    title: 'Cinema as Social Commentary',
    author: 'Ramon Gonzales',
    date: '2024-08-05',
    excerpt: 'How Filipino films reflect and critique societal issues.',
    content: 'Philippine cinema has always been a mirror to society, reflecting its struggles, dreams, and contradictions. Films serve as powerful tools for social commentary, addressing issues from poverty and corruption to identity and resistance. This tradition of socially conscious filmmaking continues to thrive, making Filipino cinema not just entertainment but a vital form of cultural discourse.',
    imageUrl: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80',
  },
  {
    id: '5',
    title: 'The Rise of Digital Filmmaking',
    author: 'Sofia Martinez',
    date: '2024-07-18',
    excerpt: 'Technology is democratizing Filipino storytelling.',
    content: 'Digital technology has revolutionized how Filipino stories are told and shared. With accessible equipment and online platforms, more voices can now participate in the cinematic conversation. This shift has led to diverse narratives and experimental forms that challenge traditional filmmaking conventions.',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
  },
];
