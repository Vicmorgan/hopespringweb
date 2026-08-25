module.exports = [
  { label: "Home", url: "/", slug: "" },
  {
    label: "About",
    slug: "about",
    childSlugs: ["about", "staff_directory", "character_counts", "virtual_tour"],
    children: [
      { label: "Our Story", url: "/about/", slug: "about" },
      { label: "Meet Our Team", url: "/staff_directory/", slug: "staff_directory" },
      { label: "Character Counts", url: "/character_counts/", slug: "character_counts" },
      { label: "Virtual Tour", url: "/virtual_tour/", slug: "virtual_tour" }
    ]
  },
  {
    label: "Academics",
    slug: "academics",
    childSlugs: ["academics", "curriculum", "support_services"],
    children: [
      { label: "Overview", url: "/academics/", slug: "academics" },
      { label: "Curriculum Guide", url: "/curriculum/", slug: "curriculum" },
      { label: "Support Services", url: "/support_services/", slug: "support_services" }
    ]
  },
  {
    label: "Community",
    slug: "community",
    childSlugs: ["activities", "gallery", "yearbook", "alumni", "news", "calendar"],
    children: [
      { label: "Activities & Clubs", url: "/activities/", slug: "activities" },
      { label: "Gallery", url: "/gallery/", slug: "gallery" },
      { label: "Yearbook", url: "/yearbook/", slug: "yearbook" },
      { label: "Hall of Fame", url: "/alumni/", slug: "alumni" },
      { label: "News", url: "/news/", slug: "news" },
      { label: "Calendar", url: "/calendar/", slug: "calendar" }
    ]
  },
  { label: "Parents", url: "/parents/", slug: "parents" },
  {
    label: "Admissions",
    slug: "admission",
    childSlugs: ["admission", "start_application", "book_tour"],
    children: [
      { label: "Overview & FAQ", url: "/admission/", slug: "admission" },
      { label: "Start Application", url: "/start_application/", slug: "start_application" },
      { label: "Book a Tour", url: "/book_tour/", slug: "book_tour" }
    ]
  }
];
