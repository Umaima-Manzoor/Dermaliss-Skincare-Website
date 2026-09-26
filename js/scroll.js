    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 90, 
                behavior: 'smooth'
            });
        }
    }
    
    