document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('.site-search-input');

    // Site Content Index
    const siteIndex = [
        { title: "Home", url: "/", keywords: "home, main, welcome, start" },
        { title: "About Us", url: "/about/", keywords: "about, history, mission, vision, principal, leadership" },
        { title: "Academics", url: "/academics/", keywords: "curriculum, subjects, math, science, art, learning, grades" },
        { title: "Admissions", url: "/admission/", keywords: "enroll, apply, join, fees, admission, process" },
        { title: "Parents", url: "/parents/", keywords: "parents, portal, login, handbook, lunch menu, resources" },
        { title: "News", url: "/news/", keywords: "news, updates, blog, announcements, events" },
        { title: "Activities", url: "/activities/", keywords: "clubs, sports, extracurricular, art, music, drama" },
        { title: "Calendar", url: "/calendar/", keywords: "calendar, events, dates, schedule, holidays" },
        { title: "Book a Tour", url: "/book_tour/", keywords: "tour, visit, campus, schedule, booking" },
        { title: "Curriculum Details", url: "/curriculum/", keywords: "curriculum, grades, k-5, subjects, projects, learning objectives, kindergarten, first, second, third, fourth, fifth, grade, core, reading, math, science, social studies" },
        { title: "Contact Us", url: "/contact/", keywords: "contact, email, phone, address, map, location" },
        { title: "Gallery", url: "/gallery/", keywords: "photos, images, pictures, gallery, life" },
        { title: "Staff Directory", url: "/staff_directory/", keywords: "staff, teachers, educators, team, leadership, directory" },
        { title: "Start Application", url: "/start_application/", keywords: "application, form, register, sign up" },
        { title: "Virtual Tour", url: "/virtual_tour/", keywords: "virtual, video, tour, online, explore" },
        { title: "Support Services", url: "/support_services/", keywords: "support, counseling, nurse, safety, mental health" },
        { title: "Character Counts", url: "/character_counts/", keywords: "character, values, caring, fairness, trustworthiness, responsibility, respect, citizenship, clubs" },
    ];

    searchInputs.forEach(input => {
        // Robustly find the nearest .search-results sibling by walking up to the .site-search-wrapper
        // The expected DOM structure is:
        //   <div class="site-search-wrapper relative ...">
        //     <div class="..."> <!-- input-box wrapper -->
        //       <span>search icon</span>
        //       <input class="site-search-input" />
        //     </div>
        //     <div class="search-results ..."></div>   <-- sibling of input-box wrapper
        //   </div>
        function getResultsContainer(inputEl) {
            // Walk up until we find an element that contains a .search-results child
            let el = inputEl.parentElement;
            while (el) {
                const results = el.querySelector('.search-results');
                if (results) return results;
                el = el.parentElement;
            }
            return null;
        }

        const resultsContainer = getResultsContainer(input);

        if (!resultsContainer) return; // Guard: skip if no container found

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            if (query.length < 2) {
                resultsContainer.innerHTML = '';
                resultsContainer.classList.add('hidden');
                return;
            }

            const results = siteIndex.filter(page =>
                page.title.toLowerCase().includes(query) ||
                page.keywords.toLowerCase().includes(query)
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
                    <div class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No results found for "<strong>${query}</strong>"</div>
                `;
                resultsContainer.classList.remove('hidden');
            }
        });

        // Hide results when clicking outside the search wrapper
        document.addEventListener('click', (e) => {
            if (!resultsContainer.contains(e.target) && !input.contains(e.target)) {
                resultsContainer.classList.add('hidden');
            }
        });

        // Show results again if input has value and is re-focused
        input.addEventListener('focus', () => {
            if (input.value.trim().length >= 2) {
                resultsContainer.classList.remove('hidden');
            }
        });
    });
});
