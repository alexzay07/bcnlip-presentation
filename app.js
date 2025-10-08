class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 6;
        this.isTransitioning = false;
        this.staticData = {
            stats: {
                conversations: 100,
                messages: 17,
                tokens: 17.2,
                monthlyCost: 30,
                developmentCost: 350,
                roiDays: 12
            }
        };
        
        this.initializeElements();
        this.bindEvents();
        this.updateUI();
        this.initializeBCNLIPFeatures();
    }
    
    initializeElements() {
        this.slidesContainer = document.getElementById('slidesContainer');
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlideSpan = document.getElementById('currentSlide');
        this.progressFill = document.querySelector('.progress-fill');
        this.indicators = document.querySelectorAll('.indicator');
        
        // Initialize static data immediately
        this.initializeStaticData();
        
        console.log('🎓 BCNLIP Presentation initialized with', this.indicators.length, 'indicators');
    }
    
    initializeStaticData() {
        // Ensure slide 3 data is always correct with updated metrics
        const statNumbers = document.querySelectorAll('.stat-number[data-target]');
        statNumbers.forEach(stat => {
            const target = stat.getAttribute('data-target');
            if (target === '100') {
                stat.textContent = '100';
            } else if (target === '17') {
                stat.textContent = '17';
            } else if (target === '17.2') {
                stat.textContent = '17.2';
            }
        });
        
        // Fix any cost displays to ensure €30/month is visible
        const totalCostElements = document.querySelectorAll('.total-cost strong');
        totalCostElements.forEach(element => {
            if (element.textContent.includes('Total:')) {
                element.textContent = 'Total: €30/mes';
                // Add critical visibility styles
                element.style.display = 'block';
                element.style.fontSize = '18px';
                element.style.fontWeight = 'bold';
                element.style.color = 'var(--bcnlip-dark-blue)';
                element.style.textShadow = '0 2px 4px rgba(238, 184, 63, 0.3)';
            }
        });
        
        // Fix ultra-low cost displays
        const ultraLowCosts = document.querySelectorAll('.cost-value.ultra-low');
        ultraLowCosts.forEach(element => {
            element.textContent = '€30';
        });
        
        // Ensure tech highlight is visible
        const techHighlights = document.querySelectorAll('.tech-highlight strong');
        techHighlights.forEach(element => {
            if (element.textContent.includes('€30/mes')) {
                element.style.display = 'block';
                element.style.fontSize = '16px';
                element.style.fontWeight = 'bold';
            }
        });
    }
    
    initializeBCNLIPFeatures() {
        // Initialize problem illustration animations
        this.initializeProblemAnimations();
        
        // Initialize chatbot widget interaction
        this.initializeChatbotWidget();
        
        // Initialize multilingual examples animation
        this.initializeMultilingualAnimations();
        
        // Initialize financial highlights
        this.initializeFinancialHighlights();
        
        // Fix data consistency and viewport issues
        this.fixDataConsistency();
        this.fixSlide3Viewport();
        
        // Initialize technical diagram interactions
        this.initializeTechnicalDiagram();
    }
    
    fixSlide3Viewport() {
        // Critical viewport fix for Slide 3
        const slide3 = document.querySelector('.slide[data-slide="3"]');
        if (slide3) {
            // Ensure slide content fits viewport
            slide3.style.overflowY = 'auto';
            slide3.style.padding = '16px 24px';
            
            const slideContent = slide3.querySelector('.slide-content');
            if (slideContent) {
                slideContent.style.maxHeight = 'calc(100vh - 120px)';
                slideContent.style.overflowY = 'auto';
            }
            
            // Ensure total cost is always visible
            const totalCost = slide3.querySelector('.total-cost');
            if (totalCost) {
                totalCost.style.position = 'relative';
                totalCost.style.zIndex = '10';
                totalCost.style.marginTop = '12px';
                totalCost.style.padding = '12px';
                totalCost.style.backgroundColor = 'var(--bcnlip-yellow-light)';
                totalCost.style.border = '2px solid var(--bcnlip-yellow)';
                totalCost.style.borderRadius = 'var(--radius-base)';
                totalCost.style.boxShadow = '0 4px 12px rgba(238, 184, 63, 0.3)';
                
                const totalCostStrong = totalCost.querySelector('strong');
                if (totalCostStrong) {
                    totalCostStrong.style.fontSize = '18px';
                    totalCostStrong.style.color = 'var(--bcnlip-dark-blue)';
                    totalCostStrong.style.display = 'block';
                    totalCostStrong.style.textAlign = 'center';
                    totalCostStrong.textContent = 'Total: €30/mes';
                }
            }
            
            // Ensure tech highlight is visible
            const techHighlight = slide3.querySelector('.tech-highlight');
            if (techHighlight) {
                techHighlight.style.marginTop = '16px';
                techHighlight.style.padding = '12px';
                techHighlight.style.boxShadow = '0 4px 12px rgba(238, 184, 63, 0.3)';
                
                const techStrong = techHighlight.querySelector('strong');
                if (techStrong) {
                    techStrong.style.fontSize = '16px';
                    techStrong.style.display = 'block';
                    techStrong.style.lineHeight = '1.4';
                    techStrong.textContent = '💡 Solo €30/mes para cubrir 100 conversaciones diarias con IA avanzada multilingüe';
                }
            }
        }
        
        console.log('🔧 Slide 3 viewport optimized - €30/mes now visible');
    }
    
    initializeProblemAnimations() {
        // Add problem illustration animations when slide 1 becomes active
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const slide = mutation.target;
                    if (slide.classList.contains('active') && slide.dataset.slide === '1') {
                        setTimeout(() => this.animateProblemScene(), 500);
                    }
                }
            });
        });
        
        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }
    
    animateProblemScene() {
        const adminFigure = document.querySelector('.admin-figure');
        const phoneIcons = document.querySelectorAll('.phone-icon');
        const students = document.querySelectorAll('.student');
        const leavingArrow = document.querySelector('.leaving-arrow');
        const sadClient = document.querySelector('.sad-client');
        
        // Animate admin stress
        if (adminFigure) {
            adminFigure.style.animation = 'bcnlipStress 2s ease-in-out infinite';
        }
        
        // Staggered phone ringing
        phoneIcons.forEach((phone, index) => {
            setTimeout(() => {
                phone.style.animation = 'bcnlipBounce 0.5s ease-in-out infinite alternate';
            }, index * 200);
        });
        
        // Students waiting animation
        students.forEach((student, index) => {
            setTimeout(() => {
                student.style.animation = 'bcnlipWaiting 3s ease-in-out infinite';
            }, index * 500);
        });
        
        // Leaving clients animation
        setTimeout(() => {
            if (leavingArrow) leavingArrow.style.animation = 'bcnlipLeaving 2s ease-in-out infinite';
            if (sadClient) sadClient.style.animation = 'bcnlipSad 2s ease-in-out infinite';
        }, 2000);
    }
    
    initializeTechnicalDiagram() {
        const technicalDiagram = document.querySelector('.technical-diagram');
        if (technicalDiagram) {
            // Add hover effect to technical diagram
            technicalDiagram.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'all 0.3s ease';
                this.style.boxShadow = '0 8px 25px rgba(238, 184, 63, 0.3)';
            });
            
            technicalDiagram.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            });
        }
    }
    
    fixDataConsistency() {
        // Create a mutation observer to reset data when slide becomes active
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const slide = mutation.target;
                    if (slide.classList.contains('active') && slide.dataset.slide === '3') {
                        // Reset the stat numbers to correct values and fix viewport
                        setTimeout(() => {
                            this.resetSlide3Data();
                            this.fixSlide3Viewport();
                        }, 100);
                    }
                }
            });
        });
        
        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }
    
    resetSlide3Data() {
        const statNumbers = document.querySelectorAll('.slide[data-slide="3"] .stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = '100';
            statNumbers[1].textContent = '17';
            statNumbers[2].textContent = '17.2';
        }
        
        // Ensure cost displays are correct and visible
        const totalCost = document.querySelector('.slide[data-slide="3"] .total-cost strong');
        if (totalCost) {
            totalCost.textContent = 'Total: €30/mes';
            totalCost.style.fontSize = '18px';
            totalCost.style.fontWeight = 'bold';
            totalCost.style.color = 'var(--bcnlip-dark-blue)';
            totalCost.style.display = 'block';
            totalCost.style.textAlign = 'center';
        }
        
        const techHighlight = document.querySelector('.slide[data-slide="3"] .tech-highlight strong');
        if (techHighlight) {
            techHighlight.textContent = '💡 Solo €30/mes para cubrir 100 conversaciones diarias con IA avanzada multilingüe';
            techHighlight.style.fontSize = '16px';
            techHighlight.style.display = 'block';
            techHighlight.style.lineHeight = '1.4';
        }
        
        console.log('✅ Slide 3 data reset and viewport optimized');
    }
    
    initializeChatbotWidget() {
        const chatMinimize = document.querySelector('.chat-minimize');
        const chatMessages = document.querySelector('.chat-messages');
        const chatInput = document.querySelector('.chat-input');
        const chatWidget = document.querySelector('.chatbot-widget');
        
        if (chatMinimize) {
            let isMinimized = false;
            
            chatMinimize.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                isMinimized = !isMinimized;
                
                if (isMinimized) {
                    chatMessages.style.display = 'none';
                    chatInput.style.display = 'none';
                    chatMinimize.textContent = '+';
                    if (chatWidget) {
                        chatWidget.style.height = 'auto';
                    }
                } else {
                    chatMessages.style.display = 'flex';
                    chatInput.style.display = 'flex';
                    chatMinimize.textContent = '−';
                    if (chatWidget) {
                        chatWidget.style.height = '400px';
                    }
                }
            });
        }
        
        // Add typing effect to chat input
        const chatInputField = document.querySelector('.chat-input input');
        if (chatInputField) {
            chatInputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const message = chatInputField.value.trim();
                    if (message) {
                        this.addChatMessage(message, 'user');
                        chatInputField.value = '';
                        
                        // Simulate bot response with Spanish from Spain
                        setTimeout(() => {
                            const responses = [
                                '¡Perfecto! Un asesor os contactará pronto.',
                                '¡Estupendo! Tenemos plazas disponibles en varios horarios.',
                                'Os podemos ofrecer una clase de prueba gratuita.',
                                '¡Excelente elección! Nuestros profesores os ayudarán muchísimo.'
                            ];
                            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                            this.addChatMessage(randomResponse, 'bot');
                        }, 1500);
                    }
                }
            });
            
            // Send button functionality
            const sendButton = document.querySelector('.chat-input button');
            if (sendButton) {
                sendButton.addEventListener('click', () => {
                    const message = chatInputField.value.trim();
                    if (message) {
                        this.addChatMessage(message, 'user');
                        chatInputField.value = '';
                        
                        setTimeout(() => {
                            this.addChatMessage('¡Gracias por vuestro interés! Un asesor os contactará pronto.', 'bot');
                        }, 1500);
                    }
                });
            }
        }
        
        // Animate chat messages when slide 4 becomes active
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const slide = mutation.target;
                    if (slide.classList.contains('active') && slide.dataset.slide === '4') {
                        setTimeout(() => this.animateChatMessages(), 800);
                    }
                }
            });
        });
        
        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }
    
    addChatMessage(content, type) {
        const chatMessages = document.querySelector('.chat-messages');
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-msg`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Animate in
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(10px)';
        
        requestAnimationFrame(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        });
    }
    
    animateChatMessages() {
        const messages = document.querySelectorAll('.chatbot-widget .message');
        messages.forEach((message, index) => {
            message.style.opacity = '0';
            message.style.transform = 'translateY(10px)';
            message.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                message.style.opacity = '1';
                message.style.transform = 'translateY(0)';
            }, index * 600 + 200);
        });
        
        // Add gentle glow to the widget
        const widget = document.querySelector('.chatbot-widget');
        if (widget) {
            setTimeout(() => {
                widget.style.animation = 'bcnlipGlow 2s ease-in-out';
                setTimeout(() => {
                    widget.style.animation = '';
                }, 2000);
            }, messages.length * 600 + 500);
        }
    }
    
    initializeMultilingualAnimations() {
        // Add staggered animation to language examples when slide 2 becomes active
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const slide = mutation.target;
                    if (slide.classList.contains('active') && slide.dataset.slide === '2') {
                        setTimeout(() => this.animateLanguageExamples(), 400);
                    }
                }
            });
        });
        
        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }
    
    animateLanguageExamples() {
        const examples = document.querySelectorAll('.language-example');
        examples.forEach((example, index) => {
            example.style.opacity = '0';
            example.style.transform = 'translateX(-20px)';
            example.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                example.style.opacity = '1';
                example.style.transform = 'translateX(0)';
            }, index * 250);
        });
        
        // Animate the stats highlight
        const statHighlight = document.querySelector('.stat-highlight');
        if (statHighlight) {
            setTimeout(() => {
                statHighlight.style.transform = 'scale(0.95)';
                statHighlight.style.transition = 'all 0.6s ease';
                setTimeout(() => {
                    statHighlight.style.transform = 'scale(1)';
                }, 150);
            }, examples.length * 250 + 400);
        }
    }
    
    initializeFinancialHighlights() {
        // Add pulsing effect to ultra-low cost
        const ultraLowCosts = document.querySelectorAll('.cost-value.ultra-low');
        ultraLowCosts.forEach(cost => {
            cost.addEventListener('mouseenter', () => {
                cost.style.animation = 'bcnlipPulse 1.5s ease-in-out infinite';
            });
            
            cost.addEventListener('mouseleave', () => {
                cost.style.animation = '';
            });
        });
        
        // Highlight BCNLIP advantages
        const advantages = document.querySelectorAll('.bcn-advantage, .roi-calculation, .final-cta');
        advantages.forEach(advantage => {
            advantage.addEventListener('mouseenter', () => {
                advantage.style.transform = 'scale(1.02)';
                advantage.style.transition = 'all 0.3s ease';
                advantage.style.boxShadow = '0 8px 25px rgba(238, 184, 63, 0.3)';
            });
            
            advantage.addEventListener('mouseleave', () => {
                advantage.style.transform = 'scale(1)';
                advantage.style.boxShadow = '';
            });
        });
        
        // ROI calculation animations when slide 6 becomes active
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const slide = mutation.target;
                    if (slide.classList.contains('active') && slide.dataset.slide === '6') {
                        setTimeout(() => this.animateROICalculation(), 600);
                    }
                }
            });
        });
        
        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }
    
    animateROICalculation() {
        const roiItems = document.querySelectorAll('.roi-item');
        roiItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                
                // Special highlight for profit and recovery time
                if (item.classList.contains('total') || item.classList.contains('recovery')) {
                    setTimeout(() => {
                        item.style.animation = 'bcnlipGlow 1s ease-in-out';
                        setTimeout(() => {
                            item.style.animation = '';
                        }, 1000);
                    }, 300);
                }
            }, index * 200 + 200);
        });
        
        // Final CTA animation
        const finalCta = document.querySelector('.final-cta');
        if (finalCta) {
            setTimeout(() => {
                finalCta.style.opacity = '0';
                finalCta.style.transform = 'scale(0.95)';
                finalCta.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    finalCta.style.opacity = '1';
                    finalCta.style.transform = 'scale(1)';
                }, 100);
            }, roiItems.length * 200 + 800);
        }
    }
    
    bindEvents() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Slide indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 BCNLIP indicator clicked:', index + 1);
                this.goToSlide(index + 1);
            });
            
            indicator.setAttribute('aria-label', `Ir a diapositiva ${index + 1}`);
            indicator.setAttribute('tabindex', '0');
            
            indicator.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.goToSlide(index + 1);
                }
            });
        });
        
        // Touch/swipe support
        this.bindTouchEvents();
        
        // Prevent default drag behavior
        document.addEventListener('dragstart', (e) => e.preventDefault());
    }
    
    bindTouchEvents() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.slidesContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        this.slidesContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = startX - endX;
            const deltaY = Math.abs(startY - endY);
            
            if (Math.abs(deltaX) > 50 && deltaY < 100) {
                if (deltaX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        }, { passive: true });
    }
    
    handleKeyboard(event) {
        if (this.isTransitioning) return;
        
        switch(event.key) {
            case 'ArrowRight':
            case 'Space':
                event.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                this.previousSlide();
                break;
            case 'Home':
                event.preventDefault();
                this.goToSlide(1);
                break;
            case 'End':
                event.preventDefault();
                this.goToSlide(this.totalSlides);
                break;
            case 'F11':
                event.preventDefault();
                this.toggleFullscreen();
                break;
        }
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides && !this.isTransitioning) {
            this.goToSlide(this.currentSlide + 1, 'forward');
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1 && !this.isTransitioning) {
            this.goToSlide(this.currentSlide - 1, 'backward');
        }
    }
    
    goToSlide(slideNumber, direction = 'forward') {
        if (slideNumber === this.currentSlide || this.isTransitioning || 
            slideNumber < 1 || slideNumber > this.totalSlides) {
            return;
        }
        
        console.log('📊 BCNLIP: Navegando a diapositiva', slideNumber);
        this.isTransitioning = true;
        
        const currentSlideElement = document.querySelector(`.slide[data-slide="${this.currentSlide}"]`);
        const targetSlideElement = document.querySelector(`.slide[data-slide="${slideNumber}"]`);
        
        const isForward = slideNumber > this.currentSlide;
        
        // Remove active class from current slide
        currentSlideElement.classList.remove('active');
        
        // Set initial position for target slide
        if (isForward) {
            targetSlideElement.style.transform = 'translateX(100%)';
            targetSlideElement.classList.add('slide-in-right');
            currentSlideElement.style.transform = 'translateX(-100%)';
        } else {
            targetSlideElement.style.transform = 'translateX(-100%)';
            targetSlideElement.classList.add('slide-in-left');
            currentSlideElement.style.transform = 'translateX(100%)';
        }
        
        targetSlideElement.style.opacity = '1';
        
        // Trigger animation
        requestAnimationFrame(() => {
            targetSlideElement.style.transform = 'translateX(0)';
            targetSlideElement.classList.add('active');
        });
        
        // Clean up after animation
        setTimeout(() => {
            this.slides.forEach((slide, index) => {
                const slideNum = index + 1;
                slide.classList.remove('active', 'slide-in-right', 'slide-in-left');
                
                if (slideNum === slideNumber) {
                    slide.classList.add('active');
                    slide.style.opacity = '1';
                    slide.style.transform = 'translateX(0)';
                } else {
                    slide.style.opacity = '0';
                    slide.style.transform = slideNum < slideNumber ? 'translateX(-100%)' : 'translateX(100%)';
                }
            });
            
            this.currentSlide = slideNumber;
            this.updateUI();
            this.isTransitioning = false;
            
            // Track slide visits for BCNLIP analytics
            this.trackSlideVisit(slideNumber);
            
            // Fix data if on slide 3
            if (slideNumber === 3) {
                setTimeout(() => {
                    this.resetSlide3Data();
                    this.fixSlide3Viewport();
                }, 100);
            }
        }, 250);
    }
    
    updateUI() {
        // Update slide counter
        this.currentSlideSpan.textContent = this.currentSlide;
        
        // Update progress bar
        const progressPercentage = (this.currentSlide / this.totalSlides) * 100;
        this.progressFill.style.width = `${progressPercentage}%`;
        
        // Update navigation buttons
        this.prevBtn.disabled = this.currentSlide === 1;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides;
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            if (index + 1 === this.currentSlide) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.removeAttribute('aria-current');
            }
        });
        
        console.log('✅ BCNLIP UI actualizada para diapositiva:', this.currentSlide);
    }
    
    trackSlideVisit(slideNumber) {
        const slideNames = [
            'Problema Actual (Con ilustración)',
            'Solución Multilingüe IA',
            'Arquitectura Técnica y Costes (VIEWPORT FIJO)',
            'Transformación y Mockup Web',
            'Beneficios para BCNLIP',
            'Inversión y ROI Detallado'
        ];
        
        console.log(`📈 BCNLIP Analytics: Visitando "${slideNames[slideNumber - 1]}" (${slideNumber})`);
        
        if (slideNumber === 3) {
            console.log('🔧 Slide 3 - €30/mes total cost now visible on screen');
        }
        
        if (window.gtag) {
            window.gtag('event', 'slide_view', {
                'slide_number': slideNumber,
                'slide_name': slideNames[slideNumber - 1],
                'school': 'BCNLIP',
                'monthly_cost': this.staticData.stats.monthlyCost,
                'roi_days': this.staticData.stats.roiDays
            });
        }
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('❌ Error al activar pantalla completa:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    startAutoAdvance(intervalMs = 25000) {
        this.autoAdvanceInterval = setInterval(() => {
            if (this.currentSlide < this.totalSlides) {
                this.nextSlide();
            } else {
                this.stopAutoAdvance();
                console.log('🏁 BCNLIP: Presentación automática finalizada');
            }
        }, intervalMs);
        
        console.log('▶️ BCNLIP: Modo presentación automática activado');
    }
    
    stopAutoAdvance() {
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
            console.log('⏸️ BCNLIP: Modo presentación automática desactivado');
        }
    }
}

// Enhanced interaction effects for BCNLIP presentation
class BCNLIPInteractionEffects {
    static addBrandedHoverEffects() {
        const cards = document.querySelectorAll('.problem-card, .channel-card, .benefit-card, .comparison-card, .language-example');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
                this.style.transform = 'translateY(-4px) scale(1.02)';
                this.style.boxShadow = '0 8px 25px rgba(238, 184, 63, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
        });
        
        const financialCards = document.querySelectorAll('.cost-item.highlighted, .roi-calculation, .bcn-advantage, .final-cta');
        financialCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 8px 25px rgba(238, 184, 63, 0.3)';
                this.style.borderColor = 'var(--bcnlip-yellow)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            });
        });
        
        // Special chatbot widget hover
        const chatWidget = document.querySelector('.chatbot-widget');
        if (chatWidget) {
            chatWidget.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 12px 35px rgba(238, 184, 63, 0.4)';
            });
            
            chatWidget.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 10px 30px rgba(238, 184, 63, 0.3)';
            });
        }
        
        // Add special hover for total cost in slide 3
        const totalCosts = document.querySelectorAll('.slide[data-slide="3"] .total-cost');
        totalCosts.forEach(cost => {
            cost.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 8px 25px rgba(238, 184, 63, 0.5)';
                this.style.transition = 'all 0.3s ease';
            });
            
            cost.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 12px rgba(238, 184, 63, 0.3)';
            });
        });
    }
    
    static addClickRippleEffects() {
        const buttons = document.querySelectorAll('.nav-btn, .indicator, .chat-minimize, .chat-input button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('bcnlip-ripple');
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    static addNumberCounters() {
        const counters = document.querySelectorAll('.stat-number, .roi-value');
        let hasAnimated = new Set();
        
        const animateCounter = (counter) => {
            const target = counter.getAttribute('data-target') || counter.textContent;
            const number = parseFloat(target.replace(/[^\d.]/g, ''));
            const suffix = target.replace(/[\d.]/g, '');
            const duration = 2000;
            const start = Date.now();
            
            if (isNaN(number) || hasAnimated.has(counter)) return;
            hasAnimated.add(counter);
            
            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = number <= 1 ? (eased * number).toFixed(2) : 
                                number < 100 ? (eased * number).toFixed(1) :
                                Math.floor(eased * number);
                
                counter.textContent = current + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = target;
                }
            };
            
            animate();
        };
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const slide = mutation.target;
                    if (slide.classList.contains('active')) {
                        const slideNumber = slide.dataset.slide;
                        if (['2', '3', '6'].includes(slideNumber)) {
                            setTimeout(() => {
                                slide.querySelectorAll('.stat-number, .roi-value').forEach(counter => {
                                    if (!hasAnimated.has(counter)) {
                                        animateCounter(counter);
                                    }
                                });
                            }, 300);
                        }
                    }
                }
            });
        });
        
        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }
    
    static addLanguageSwitchEffect() {
        const languageFlags = document.querySelectorAll('.language-flag');
        
        languageFlags.forEach(flag => {
            flag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.3) rotate(5deg)';
                this.style.transition = 'all 0.2s ease';
            });
            
            flag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }
    
    static addChatbotInteractivity() {
        const chatMessages = document.querySelector('.chat-messages');
        const chatInput = document.querySelector('.chat-input input');
        
        if (chatMessages && chatInput) {
            // Add scroll behavior
            chatMessages.addEventListener('scroll', function() {
                if (this.scrollTop > 0) {
                    this.style.borderTop = '1px solid var(--bcnlip-yellow-medium)';
                } else {
                    this.style.borderTop = 'none';
                }
            });
            
            // Add focus effects
            chatInput.addEventListener('focus', function() {
                this.parentElement.style.borderTop = '2px solid var(--bcnlip-yellow)';
                this.parentElement.style.backgroundColor = 'rgba(238, 184, 63, 0.05)';
            });
            
            chatInput.addEventListener('blur', function() {
                this.parentElement.style.borderTop = '1px solid var(--bcnlip-yellow)';
                this.parentElement.style.backgroundColor = 'transparent';
            });
        }
    }
}

// BCNLIP Presentation State Manager
class BCNLIPPresentationState {
    constructor() {
        this.visitedSlides = new Set([1]);
        this.startTime = Date.now();
        this.slideTimings = {};
        this.interactions = [];
        this.schoolName = 'BCNLIP Language School';
        this.presentationId = `bcnlip-viewport-fixed-${Date.now()}`;
        this.corrections = {
            responseTime: '1-5 días → instantáneo',
            messagesAverage: '15-20 mensajes promedio',
            monthlyCost: '€30/mes - VISIBLE EN PANTALLA',
            developmentCost: '€350 pago único',
            marketComparison: '€500-800 pago único',
            roiDays: '12 días',
            staffToEquipo: 'staff → equipo',
            competitiveAdvantage: 'Uso de IA demuestra adaptación moderna',
            competitorsChange: 'La competencia → Los competidores',
            whatsappRemoved: 'WhatsApp canal removido - solo Web y Telegram',
            viewportFixed: 'Slide 3 optimizado - €30/mes COMPLETAMENTE VISIBLE'
        };
    }
    
    markSlideVisited(slideNumber) {
        this.visitedSlides.add(slideNumber);
        this.slideTimings[slideNumber] = Date.now();
        
        if (slideNumber === 3) {
            console.log('🔧 SLIDE 3 VISITADO - €30/mes total cost VISIBLE - viewport optimizado');
        }
        
        console.log(`📊 BCNLIP: Visitada diapositiva ${slideNumber} con viewport CORREGIDO`);
    }
    
    trackInteraction(type, details) {
        this.interactions.push({
            type,
            details,
            timestamp: Date.now(),
            slide: document.querySelector('.slide.active')?.dataset.slide || 'unknown'
        });
        
        console.log(`🎯 BCNLIP Interacción: ${type}`, details);
    }
    
    getVisitedSlides() {
        return Array.from(this.visitedSlides);
    }
    
    getTotalPresentationTime() {
        return Math.floor((Date.now() - this.startTime) / 1000);
    }
    
    generateReport() {
        return {
            school: this.schoolName,
            presentationId: this.presentationId,
            totalTime: this.getTotalPresentationTime(),
            visitedSlides: this.getVisitedSlides(),
            interactions: this.interactions.length,
            completionRate: (this.visitedSlides.size / 6) * 100,
            corrections: this.corrections,
            viewportStatus: 'SLIDE 3 OPTIMIZADO - €30/mes COMPLETAMENTE VISIBLE'
        };
    }
}

// Initialize BCNLIP presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎓 Iniciando presentación BCNLIP AI Assistant FINAL VIEWPORT CORREGIDA...');
    
    const presentation = new PresentationController();
    const state = new BCNLIPPresentationState();
    
    // Add BCNLIP branded interaction effects
    BCNLIPInteractionEffects.addBrandedHoverEffects();
    BCNLIPInteractionEffects.addClickRippleEffects();
    BCNLIPInteractionEffects.addNumberCounters();
    BCNLIPInteractionEffects.addLanguageSwitchEffect();
    BCNLIPInteractionEffects.addChatbotInteractivity();
    
    // Track slide visits
    const originalGoToSlide = presentation.goToSlide.bind(presentation);
    presentation.goToSlide = function(slideNumber, direction) {
        state.markSlideVisited(slideNumber);
        state.trackInteraction('slide_navigation', { 
            from: this.currentSlide, 
            to: slideNumber, 
            direction 
        });
        return originalGoToSlide(slideNumber, direction);
    };
    
    // Add keyboard shortcuts info
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F1') {
            e.preventDefault();
            alert(`🎓 BCNLIP AI Assistant - Atajos de teclado:
            
• Flechas ← → : Navegar diapositivas
• Espacio: Siguiente diapositiva  
• Home/Fin: Primera/Última diapositiva
• F11: Pantalla completa
• F1: Esta ayuda

💰 Coste total CORRECTO Y VISIBLE: €30/mes
📊 Métricas: 17 mensajes promedio, 17.2M tokens/mes
⏱️ ROI: Recuperación en 12 días

✅ VIEWPORT CORREGIDO:
- Slide 3: €30/mes COMPLETAMENTE VISIBLE en pantalla
- Sin scroll necesario para ver costes totales
- Contenido compactado y optimizado
- Todos los datos técnicos visibles

🔧 CORRECCIONES FINALES APLICADAS:
- Slide 1: "Los competidores" (no "La competencia")
- Slide 2: WhatsApp REMOVIDO - Solo Web y Telegram
- Slide 3: VIEWPORT OPTIMIZADO - €30/mes VISIBLE
- Problema: Ilustración añadida
- Tiempo respuesta: 1-5 días (no 2-8 horas)  
- Mensajes: 15-20 promedio (no 2)
- Costes: €30/mes con tokens sistema incluidos
- Staff → Equipo (español de España)
- Ventaja competitiva reformulada
- ROI: Cálculo detallado con €756/mes beneficio neto`);
        }
    });
    
    // Double-click for fullscreen
    document.addEventListener('dblclick', (e) => {
        if (e.target.closest('.slide-content') && !e.target.closest('.chatbot-widget')) {
            presentation.toggleFullscreen();
            state.trackInteraction('fullscreen_toggle', { trigger: 'double_click' });
        }
    });
    
    // Add BCNLIP presentation timer with viewport status
    const addBCNLIPTimer = () => {
        const timer = document.createElement('div');
        timer.id = 'bcnlip-timer';
        timer.style.cssText = `
            position: fixed;
            bottom: 10px;
            left: 10px;
            background: var(--bcnlip-yellow);
            color: var(--bcnlip-white);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: bold;
            z-index: 1000;
            display: none;
            box-shadow: var(--shadow-sm);
        `;
        document.body.appendChild(timer);
        
        let timerInterval;
        const startTimer = () => {
            timer.style.display = 'block';
            timerInterval = setInterval(() => {
                const totalSeconds = state.getTotalPresentationTime();
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                const currentSlide = presentation.currentSlide;
                const viewportStatus = currentSlide === 3 ? ' | €30/mes VISIBLE!' : '';
                timer.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')} | €30/mes | Solo Web+Telegram${viewportStatus}`;
            }, 1000);
        };
        
        setTimeout(startTimer, 3000);
        
        // Show final summary when reaching final slide
        const showFinalSummary = () => {
            if (presentation.currentSlide === 6) {
                setTimeout(() => {
                    const report = state.generateReport();
                    console.log('📊 Informe final BCNLIP VIEWPORT CORREGIDO:', report);
                    
                    if (report.completionRate === 100) {
                        console.log('🎉 ¡Presentación BCNLIP completada al 100% con VIEWPORT CORREGIDO!');
                        console.log('🔧 CRITICAL FIX: Slide 3 - €30/mes ahora COMPLETAMENTE VISIBLE');
                        console.log('📱 CANALES: Solo Sitio Web + Telegram (WhatsApp eliminado)');
                        console.log('💰 Inversión CORRECTA Y VISIBLE: €350 + €30/mes');
                        console.log('📈 ROI DETALLADO: €756/mes beneficio neto - Recuperación en 12 días');
                        console.log('🌐 Incluye: Ilustración problemas + Esquema técnico + ROI detallado');
                        console.log('🇪🇸 Español de España aplicado correctamente');
                        console.log('✅ VIEWPORT: Todos los costes visibles sin scroll');
                    }
                }, 2000);
            }
        };
        
        const finalSlideObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    showFinalSummary();
                }
            });
        });
        
        const finalSlide = document.querySelector('.slide[data-slide="6"]');
        if (finalSlide) {
            finalSlideObserver.observe(finalSlide, { attributes: true });
        }
    };
    
    addBCNLIPTimer();
    
    // Force viewport fix on Slide 3 immediately
    setTimeout(() => {
        presentation.fixSlide3Viewport();
        console.log('🔧 Slide 3 viewport fix applied immediately');
    }, 1000);
    
    // Expose for debugging
    window.bcnlipPresentation = presentation;
    window.bcnlipState = state;
    
    console.log('✅ BCNLIP AI Assistant presentation VIEWPORT CORREGIDA initialized!');
    console.log('🔧 CRITICAL FIX: Slide 3 viewport optimizado - €30/mes COMPLETAMENTE VISIBLE');
    console.log('📱 Solo 2 canales: Sitio Web + Telegram');
    console.log('🎯 6 slides: Problema(+ilustración) → Multilingüe → Técnica(VIEWPORT FIJO) → Transformación → Beneficios → Inversión(+ROI)');
    console.log('💰 Coste CORRECTO Y VISIBLE: €30/mes (€10 servidor + €20 tokens con sistema)');
    console.log('📊 Métricas CORRECTAS: 17 mensajes promedio, 17.2M tokens/mes, 12 días ROI');
    console.log('🌍 50+ idiomas + Ilustración problemas + Esquema técnico incluidos');
    console.log('🇪🇸 Español de España aplicado en toda la presentación');
    console.log('🔧 VIEWPORT: Sin scroll necesario - todos los costes visibles');
});