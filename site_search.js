document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('.site-search-input');

    // Site Content Index
    const siteIndex = [
        { title: "Home", url: "index.html", keywords: "home, main, welcome, start" },
        { title: "About Us", url: "about.html", keywords: "about, history, mission, vision, principal, leadership" },
        { title: "Academics", url: "academics.html", keywords: "curriculum, subjects, math, science, art, learning, grades" },
        { title: "Admissions", url: "admission.html", keywords: "enroll, apply, join, fees, admission, process" },
        { title: "Parents", url: "parents.html", keywords: "parents, portal, login, handbook, lunch menu, resources" },
        { title: "News", url: "news.html", keywords: "news, updates, blog, announcements, events" },
        { title: "Activities", url: "activities.html", keywords: "clubs, sports, extracurricular, art, music, drama" },
        { title: "Calendar", url: "calendar.html", keywords: "calendar, events, dates, schedule, holidays" },
        { title: "Book a Tour", url: "book_tour.html", keywords: "tour, visit, campus, schedule, booking" },
        {
            url: "curriculum.html",
            title: "Curriculum Details",
            content: "Detailed curriculum guide kindergarten first second third fourth fifth grade core subjects reading math science social studies special projects",
            keywords: "curriculum, grades, k-5, subjects, projects, learning objectives"
        },
        { title: "Contact Us", url: "contact.html", keywords: "contact, email, phone, address, map, location" },
        { title: "Gallery", url: "gallery.html", keywords: "photos, images, pictures, gallery, life" },
        { title: "Staff Directory", url: "staff_directory.html", keywords: "staff, teachers, educators, team, leadership, directory" },
        { title: "Start Application", url: "start_application.html", keywords: "application, form, register, sign up" },
        { title: "Virtual Tour", url: "virtual_tour.html", keywords: "virtual, video, tour, online, explore" }
    ];

    searchInputs.forEach(input => {
        // Create results container if it doesn't exist relative to the input
        let resultsContainer = input.parentElement.parentElement.querySelector('.search-results');
        if (!resultsContainer) {
            // Check if wrapper exists, if not, might need to rely on the static HTML structure I will enforce
            // For now, assume the HTML structure provided in the plan is used.
            // If not found, we can try to dynamically create it, but standardizing HTML is better.
        }

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const resultsContainer = input.parentElement.nextElementSibling; // Assuming structure: parent(input-wrapper) -> sibling(results)

            if (!resultsContainer || !resultsContainer.classList.contains('search-results')) return;

            if (query.length < 2) {
                resultsContainer.innerHTML = '';
                resultsContainer.classList.add('hidden');
                return;
            }

            const results = siteIndex.filter(page =>
                page.title.toLowerCase().includes(query) ||
                page.keywords.includes(query)
            );

            if (results.length > 0) {
                const html = results.map(result => `
                    <a href="${result.url}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a3424] text-[#181611] dark:text-gray-200 border-b border-gray-100 dark:border-[#3a3424] last:border-0 transition-colors">
                        <div class="font-bold text-sm">${result.title}</div>
                    </a>
                `).join('');

                resultsContainer.innerHTML = html;
                resultsContainer.classList.remove('hidden');
            } else {
                resultsContainer.innerHTML = `
                    <div class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No results found</div>
                `;
                resultsContainer.classList.remove('hidden');
            }
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target)) {
                const resultsContainer = input.parentElement.nextElementSibling;
                if (resultsContainer && resultsContainer.classList.contains('search-results')) {
                    resultsContainer.classList.add('hidden');
                }
            }
        });

        // Show results again if input has value and is focused
        input.addEventListener('focus', () => {
            if (input.value.length >= 2) {
                const resultsContainer = input.parentElement.nextElementSibling;
                if (resultsContainer) resultsContainer.classList.remove('hidden');
            }
        });
    });
});
