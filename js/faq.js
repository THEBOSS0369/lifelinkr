document.addEventListener('DOMContentLoaded', function() {
    // Handle FAQ items toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = answer.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.querySelector('.faq-answer').classList.remove('active');
                faqItem.querySelector('.faq-icon').innerHTML = '&#9660;';
                faqItem.querySelector('.faq-icon').style.color = '#A0AEC0';
            });
            
            // Toggle current item if it wasn't active
            if (!isActive) {
                answer.classList.add('active');
                icon.innerHTML = '&#9650;';
                icon.style.color = '#0057D8';
            }
        });
    });
    
    // Load More button functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    loadMoreBtn.addEventListener('click', function() {
        // This is where you would add code to load more FAQs
        // For demonstration, we'll just add some new FAQ items
        
        const faqContainer = document.querySelector('.faq-container');
        
        const newFAQs = [
            {
                question: "Does LifeLinkr offer integration with other healthcare systems?",
                answer: "Yes, LifeLinkr provides seamless integration capabilities with various healthcare systems, including EMRs, laboratory systems, and billing platforms. Our API allows for easy data exchange while maintaining security protocols."
            },
            {
                question: "How does LifeLinkr help with patient communication?",
                answer: "LifeLinkr includes built-in patient communication tools like automated appointment reminders, secure messaging, treatment updates, and educational resources. These features help improve patient engagement and reduce no-shows."
            },
            {
                question: "Is training provided with LifeLinkr implementation?",
                answer: "Absolutely. Every LifeLinkr implementation includes comprehensive training for your staff. We offer both remote and on-site training options, along with ongoing support and access to our knowledge base and tutorial videos."
            }
        ];
        
        newFAQs.forEach(faq => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            
            faqItem.innerHTML = `
                <div class="faq-question">
                    <h3>${faq.question}</h3>
                    <span class="faq-icon">&#9660;</span>
                </div>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            `;
            
            faqContainer.appendChild(faqItem);
            
            // Add event listener to the new FAQ item
            const question = faqItem.querySelector('.faq-question');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = faqItem.querySelector('.faq-icon');
            
            question.addEventListener('click', () => {
                // Check if this item is already active
                const isActive = answer.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.querySelector('.faq-answer').classList.remove('active');
                    item.querySelector('.faq-icon').innerHTML = '&#9660;';
                    item.querySelector('.faq-icon').style.color = '#A0AEC0';
                });
                
                // Toggle current item if it wasn't active
                if (!isActive) {
                    answer.classList.add('active');
                    icon.innerHTML = '&#9650;';
                    icon.style.color = '#0057D8';
                }
            });
        });
        
        // Hide the load more button after loading all FAQs
        loadMoreBtn.style.display = 'none';
    });
});