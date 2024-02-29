export interface Review {
    id: string;
    stars: number;
    message: string;
    name: string;
  }

  export const mockedReview: Review[] = [
    {
      id: "1",
      stars: 5,
      message: "Absolutely fantastic! The room was spotless, the staff went above and beyond, and the breakfast buffet was to die for. Can't wait to return! Anyone who loves yoga should definitely stay here. The yoga classes were amazing. I felt so relaxed and rejuvenated after my stay. I will definitely be back and I've already recommended it to everyone I know. Thank you for a wonderful stay",
      name: "Nathalie Lysefeldt", 
    },
    {
        id: "2",
        stars: 3.5,
        message: "A decent stay overall. The room was comfortable, but the noise from the street was a bit bothersome. Breakfast was decent, but nothing extraordinary. The staff was friendly and helpful, but the service was a bit slow. I would consider staying here again, but only if I couldn't find a better option.",
        name: "Malin Sundberg", 
      },
      {
        id: "3",
        stars: 4,
        message: "A solid choice for a weekend getaway. The room was clean and cozy, the staff were friendly, and the breakfast had a good variety. Would consider staying again. But I really did love the location and the waterfall. It was so peaceful and beautiful. I would definitely recommend this hotel to anyone who wants to relax and enjoy nature.",
        name: "David Jensen", 
      },
      {
        id: "4",
        stars: 5,
        message: "Absolutely fantastic! The room was spotless, the staff went above and beyond, and the yoga classes was to die for. Can't wait to return!",
        name: "Eleni Solomon-Samulesson", 
      },
      {
        id: "5",
        stars: 1,
        message: " I cannot fathom the sheer audacity of this so-called establishment. My stay at this hotel was an absolute disaster from start to finish. Where do I even begin? Firstly, let's talk about the accommodations. The room was smaller than my shoe closet back home, and don't get me started on the bed! I've slept on park benches more comfortable than that excuse for a mattress. And the bathroom? It looked like it hadn't been cleaned since the Stone Age! Now, let's move on to the staff. Rude, incompetent, and utterly unhelpful are just a few words that come to mind. It's as if they were trained in the art of ignoring guests' needs. When I asked for assistance, I was met with blank stares and shrugged shoulders. The nerve!",
        name: "Birgitta Svensson", 
      },
]