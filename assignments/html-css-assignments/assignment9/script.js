document.addEventListener('DOMContentLoaded', () => {
    
    
    // DATA ENGINE STORAGE ARCHITECTURE
    
    let state = {
        todos: JSON.parse(localStorage.getItem('dash-v2-todos')) || [],
        plannerBlocks: JSON.parse(localStorage.getItem('dash-v2-planner')) || [],
        goals: JSON.parse(localStorage.getItem('dash-v2-goals')) || [],
        savedQuotes: JSON.parse(localStorage.getItem('dash-v2-quotes')) || [],
        theme: localStorage.getItem('dashboard-theme') || 'dark',
        sidebarCollapsed: localStorage.getItem('sidebar-collapsed') === 'true',
        currentQuote: { text: '', author: '' },
        pomoConfig: JSON.parse(localStorage.getItem('dash-v2-pomo-cfg')) || { work: 25, short: 5, long: 15, rounds: 4 }
    };

    
    // MAIN INITIALIZATION LAYER
    
    function init() {
        initNavigation();
        initDateTimeAndBackground();
        initTheme();
        initWeatherEngine();
        
        // Render module logic boards
        renderTodos();
        initTimePickerWheels();
        renderPlanner();
        renderGoals();
        initPomodoroEngine();
        initQuoteEngine();
    }

    // UPDATED NAVIGATION: TOGGLE BUTTON HIDES & LOGO EXPANDS WHEN COLLAPSED
    function initNavigation() {
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const logoNode = document.getElementById('sidebar-logo-node');
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.view-section');

        if (state.sidebarCollapsed) {
            sidebar.classList.add('collapsed');
        }

        // Toggle button collapses sidebar
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.add('collapsed');
            state.sidebarCollapsed = true;
            localStorage.setItem('sidebar-collapsed', 'true');
        });

        // Logo handles expand when clicked inside a collapsed state frame
        logoNode.addEventListener('click', () => {
            if (state.sidebarCollapsed) {
                sidebar.classList.remove('collapsed');
                state.sidebarCollapsed = false;
                localStorage.setItem('sidebar-collapsed', 'false');
            }
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.dataset.target;
                
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                sections.forEach(s => s.classList.add('hidden'));
                document.getElementById(targetId).classList.remove('hidden');
            });
        });

        document.getElementById('close-celebration').addEventListener('click', () => {
            document.getElementById('celebration-overlay').classList.add('hidden');
        });
    }

    function triggerCelebration(msg) {
        document.getElementById('celebration-message').textContent = msg;
        document.getElementById('celebration-overlay').classList.remove('hidden');
    }

    
    // CHRONO TIMER CLOCKS & AMBIENCE INDUCTION
    
    function initDateTimeAndBackground() {
        const clockEl = document.getElementById('live-clock');
        const dateEl = document.getElementById('live-date');

        function tick() {
            const now = new Date();
            clockEl.textContent = now.toLocaleTimeString([], { hour12: false });
            dateEl.textContent = now.toLocaleDateString([], { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
            
            let hr = now.getHours();
            let tint = 'var(--bg-night)';
            if (hr >= 5 && hr < 12) tint = 'var(--bg-morning)';
            else if (hr >= 12 && hr < 17) tint = 'var(--bg-afternoon)';
            else if (hr >= 17 && hr < 21) tint = 'var(--bg-evening)';
            
            if (document.body.style.backgroundColor !== tint) {
                document.body.style.backgroundColor = tint;
            }
        }
        tick();
        setInterval(tick, 1000);
    }

    function initTheme() {
        const toggle = document.getElementById('theme-toggle');
        document.documentElement.setAttribute('data-theme', state.theme);
        toggle.addEventListener('click', () => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('dashboard-theme', state.theme);
        });
    }

    
    // MODULE: ADVANCED PRIORITY TASK MANAGER
    
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoPriority = document.getElementById('todo-priority');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if(!text) return;

        state.todos.push({
            id: Date.now().toString(),
            text,
            priority: todoPriority.value,
            completed: false
        });
        
        todoInput.value = '';
        saveAndRenderTodos();
    });

    todoList.addEventListener('click', (e) => {
        const target = e.target;
        const row = target.closest('.item-row');
        if (!row) return;
        const id = row.dataset.id;

        if (target.classList.contains('btn-complete')) {
            let previouslyCompleted = state.todos.every(t => t.completed);
            state.todos = state.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
            
            if (!previouslyCompleted && state.todos.length > 0 && state.todos.every(t => t.completed)) {
                triggerCelebration("Outstanding engineering! You have entirely cleared your active operational task backlog.");
            }
        } else if (target.classList.contains('btn-delete')) {
            state.todos = state.todos.filter(t => t.id !== id);
        }
        saveAndRenderTodos();
    });

    function saveAndRenderTodos() {
        localStorage.setItem('dash-v2-todos', JSON.stringify(state.todos));
        renderTodos();
    }

    function renderTodos() {
        const weights = { high: 3, medium: 2, low: 1 };
        const sorted = [...state.todos].sort((a,b) => weights[b.priority] - weights[a.priority]);

        todoList.innerHTML = sorted.map(t => `
            <li class="item-row ${t.completed ? 'completed' : ''}" data-id="${t.id}">
                <div>
                    <span class="tag-badge tag-${t.priority}">${t.priority}</span>
                    <span>${t.text}</span>
                </div>
                <div class="item-actions">
                    <button class="btn-complete success-btn">✓</button>
                    <button class="btn-delete danger-btn">✕</button>
                </div>
            </li>
        `).join('');
    }

    
    // MODULE: DYNAMIC ACCESSIBLE TIMESLOT WHEELS
    
    const plannerForm = document.getElementById('planner-form');
    const plannerLabel = document.getElementById('planner-label');
    const plannerContainer = document.getElementById('planner-container');

    function initTimePickerWheels() {
        const sHour = document.getElementById('planner-start-hour');
        const sMin = document.getElementById('planner-start-min');
        const eHour = document.getElementById('planner-end-hour');
        const eMin = document.getElementById('planner-end-min');

        // Build 24 hour selections
        let hourOptions = '';
        for(let i=0; i<24; i++) {
            let val = i.toString().padStart(2, '0');
            hourOptions += `<option value="${val}">${val}</option>`;
        }
        
        // Build streamlined 5-minute selector segments
        let minOptions = '';
        for(let i=0; i<60; i+=5) {
            let val = i.toString().padStart(2, '0');
            minOptions += `<option value="${val}">${val}</option>`;
        }

        sHour.innerHTML = hourOptions;
        eHour.innerHTML = hourOptions;
        sMin.innerHTML = minOptions;
        eMin.innerHTML = minOptions;

        // Set practical dynamic default seeds
        sHour.value = "09";
        eHour.value = "10";
    }

    plannerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const start = `${document.getElementById('planner-start-hour').value}:${document.getElementById('planner-start-min').value}`;
        const end = `${document.getElementById('planner-end-hour').value}:${document.getElementById('planner-end-min').value}`;
        const text = plannerLabel.value.trim();

        if(!text) return;

        state.plannerBlocks.push({ id: Date.now().toString(), start, end, text });
        state.plannerBlocks.sort((a,b) => a.start.localeCompare(b.start));
        
        plannerLabel.value = '';
        localStorage.setItem('dash-v2-planner', JSON.stringify(state.plannerBlocks));
        renderPlanner();
    });

    function renderPlanner() {
        if(state.plannerBlocks.length === 0) {
            plannerContainer.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:2rem;">No system timeline blocks allocated yet.</p>`;
            return;
        }

        plannerContainer.innerHTML = state.plannerBlocks.map(b => `
            <div class="planner-block" data-id="${b.id}">
                <div class="planner-timestamp">⏳ ${b.start} - ${b.end}</div>
                <div class="planner-text">${b.text}</div>
                <button class="danger-btn btn-del-block" style="padding: 0.35rem 0.75rem; font-size:0.8rem;">Remove</button>
            </div>
        `).join('');

        plannerContainer.querySelectorAll('.btn-del-block').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.closest('.planner-block').dataset.id;
                state.plannerBlocks = state.plannerBlocks.filter(b => b.id !== id);
                localStorage.setItem('dash-v2-planner', JSON.stringify(state.plannerBlocks));
                renderPlanner();
            });
        });
    }

    
    // MODULE: MACRO TARGET OBJECTIVES ENGINE
    
    const goalsForm = document.getElementById('goals-form');
    const goalInput = document.getElementById('goal-input');
    const goalsList = document.getElementById('goals-list');

    goalsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = goalInput.value.trim();
        if(!text) return;

        state.goals.push({ id: Date.now().toString(), text, completed: false });
        goalInput.value = '';
        saveAndRenderGoals();
    });

    goalsList.addEventListener('click', (e) => {
        const target = e.target;
        const row = target.closest('.item-row');
        if(!row) return;
        const id = row.dataset.id;

        if (target.classList.contains('btn-goal-toggle')) {
            let baselineState = state.goals.every(g => g.completed);
            state.goals = state.goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g);
            
            if(!baselineState && state.goals.length > 0 && state.goals.every(g => g.completed)) {
                triggerCelebration("🎯 Macro Vector Complete! 100% processing efficiency recorded across all primary milestones.");
            }
        } else if (target.classList.contains('btn-goal-del')) {
            state.goals = state.goals.filter(g => g.id !== id);
        }
        saveAndRenderGoals();
    });

    function saveAndRenderGoals() {
        localStorage.setItem('dash-v2-goals', JSON.stringify(state.goals));
        renderGoals();
    }

    function renderGoals() {
        goalsList.innerHTML = state.goals.map(g => `
            <li class="item-row ${g.completed ? 'completed' : ''}" data-id="${g.id}">
                <span>${g.completed ? '🟢' : '⚪'} &nbsp; ${g.text}</span>
                <div class="item-actions">
                    <button class="btn-goal-toggle primary-btn">Toggle State</button>
                    <button class="btn-goal-del danger-btn">✕</button>
                </div>
            </li>
        `).join('');

        const total = state.goals.length;
        const completed = state.goals.filter(g => g.completed).length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        document.getElementById('goals-metrics').textContent = `${completed} of ${total} Critical Benchmarks Resolved`;
        document.getElementById('goals-percentage').textContent = `${percent}% Completed`;
        document.getElementById('goals-progress-fill').style.width = `${percent}%`;
    }

    
    // MODULE: PARAMETRIC STEPPER POMODORO ENGINE
    
    function initPomodoroEngine() {
        let timer = null;
        let timeLeft = state.pomoConfig.work * 60;
        let currentMode = 'work'; 
        let currentRound = 1;

        const display = document.getElementById('pomodoro-display');
        const status = document.getElementById('pomodoro-status');
        const roundTracker = document.getElementById('pomo-round-tracker');

        // Load visual elements from saved structural profiles
        document.getElementById('pomo-work-val').textContent = state.pomoConfig.work;
        document.getElementById('pomo-short-val').textContent = state.pomoConfig.short;
        document.getElementById('pomo-long-val').textContent = state.pomoConfig.long;
        document.getElementById('pomo-rounds-val').textContent = state.pomoConfig.rounds;

        function syncEngineTime() {
            if (currentMode === 'work') timeLeft = state.pomoConfig.work * 60;
            else if (currentMode === 'shortBreak') timeLeft = state.pomoConfig.short * 60;
            else if (currentMode === 'longBreak') timeLeft = state.pomoConfig.long * 60;
            updateUI();
        }

        function updateUI() {
            const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const secs = (timeLeft % 60).toString().padStart(2, '0');
            display.textContent = `${mins}:${secs}`;
            roundTracker.textContent = `Loop Tracker: Cycle ${currentRound} / ${state.pomoConfig.rounds}`;
            
            if (currentMode === 'work') status.textContent = "🔥 Deep Focus Execution";
            else if (currentMode === 'shortBreak') status.textContent = "☕ Decompression Phase";
            else if (currentMode === 'longBreak') status.textContent = "🌲 Extended Recharge Interval";
        }

        // Stepper click listener registration matrix
        document.querySelectorAll('.stepper-control').forEach(stepper => {
            const valEl = stepper.querySelector('.step-value');
            const targetKey = valEl.id.split('-')[1]; // Grabs 'work', 'short', etc.

            stepper.addEventListener('click', (e) => {
                const btn = e.target.closest('.step-btn');
                if(!btn) return;

                let curVal = parseInt(valEl.textContent);
                if (btn.textContent === '+') {
                    curVal = Math.min(curVal + (targetKey === 'rounds' ? 1 : 5), 180);
                } else {
                    curVal = Math.max(curVal - (targetKey === 'rounds' ? 1 : 5), 1);
                }

                valEl.textContent = curVal;
                state.pomoConfig[targetKey] = curVal;
                localStorage.setItem('dash-v2-pomo-cfg', JSON.stringify(state.pomoConfig));

                if (!timer) syncEngineTime();
            });

            // Convert raw element container to act as implicit hit increments
            const plusBtn = document.createElement('button');
            plusBtn.type = 'button';
            plusBtn.className = 'step-btn up';
            plusBtn.textContent = '+';
            stepper.appendChild(plusBtn);
        });

        document.getElementById('pomo-start').addEventListener('click', () => {
            if (timer) return;
            timer = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateUI();
                } else {
                    clearInterval(timer);
                    timer = null;
                    
                    if (currentMode === 'work') {
                        if (currentRound >= state.pomoConfig.rounds) {
                            currentMode = 'longBreak';
                            triggerCelebration("Pomodoro Set Completed! Transitioning system state to macro recovery mode.");
                        } else {
                            currentMode = 'shortBreak';
                            alert("Focus block closed. Step back and breathe.");
                        }
                    } else {
                        if (currentMode === 'longBreak') {
                            currentRound = 1;
                        } else {
                            currentRound++;
                        }
                        currentMode = 'work';
                        alert("Interval resetting. Begin production workflows immediately.");
                    }
                    syncEngineTime();
                }
            }, 1000);
        });

        document.getElementById('pomo-pause').addEventListener('click', () => {
            clearInterval(timer);
            timer = null;
            status.textContent = "⏸️ Clocking Suspended";
        });

        document.getElementById('pomo-reset').addEventListener('click', () => {
            clearInterval(timer);
            timer = null;
            currentMode = 'work';
            currentRound = 1;
            syncEngineTime();
        });

        syncEngineTime();
    }

    
    // MODULE: INSIGHT KNOWLEDGE STORAGE DATABASE
    
    function initQuoteEngine() {
        const textEl = document.getElementById('quote-text');
        const authorEl = document.getElementById('quote-author');
        const favList = document.getElementById('favorites-list');

        async function pullMatrixQuote() {
            textEl.textContent = "Polling asynchronous streaming servers...";
            try {
                const res = await fetch('https://dummyjson.com/quotes/random');
                if(!res.ok) throw new Error();
                const data = await res.json();
                state.currentQuote = { text: data.quote, author: data.author };
                textEl.textContent = `“${data.quote}”`;
                authorEl.textContent = `— ${data.author}`;
            } catch {
                state.currentQuote = { text: "Strategic execution outperforms structural perfection daily.", author: "Fallback Kernel" };
                textEl.textContent = `“${state.currentQuote.text}”`;
                authorEl.textContent = `— ${state.currentQuote.author}`;
            }
        }

        document.getElementById('favorite-quote-btn').addEventListener('click', () => {
            if(state.savedQuotes.some(q => q.text === state.currentQuote.text)) return;
            
            state.savedQuotes.push({ ...state.currentQuote });
            localStorage.setItem('dash-v2-quotes', JSON.stringify(state.savedQuotes));
            renderFavorites();
        });

        function renderFavorites() {
            if(state.savedQuotes.length === 0) {
                favList.innerHTML = `<li style="font-size:0.8rem; color:var(--text-light); text-align:center;">Archive is clear.</li>`;
                return;
            }
            favList.innerHTML = state.savedQuotes.map((q, idx) => `
                <li class="fav-quote-item">
                    <p>“${q.text}”</p>
                    <span>— ${q.author}</span>
                    <div style="text-align:right; margin-top:0.35rem;">
                        <button class="danger-btn btn-del-quote" data-idx="${idx}" style="padding:0.15rem 0.4rem; font-size:0.7rem;">Purge</button>
                    </div>
                </li>
            `).join('');

            favList.querySelectorAll('.btn-del-quote').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(e.target.dataset.idx);
                    state.savedQuotes.splice(idx, 1);
                    localStorage.setItem('dash-v2-quotes', JSON.stringify(state.savedQuotes));
                    renderFavorites();
                });
            });
        }

        document.getElementById('new-quote-btn').addEventListener('click', pullMatrixQuote);
        pullMatrixQuote();
        renderFavorites();
    }

    
    // MODULE: CHRONOLOGICAL WEATHER TIMELINE
    
    function initWeatherEngine() {
        const minimalEl = document.getElementById('header-weather');
        const expandedEl = document.getElementById('weather-expanded');
        const hourlyGrid = document.getElementById('weather-hourly-grid');

        let baseLat = 51.5074, baseLon = -0.1278; 

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => runFetch(pos.coords.latitude, pos.coords.longitude),
                () => runFetch(baseLat, baseLon)
            );
        } else {
            runFetch(baseLat, baseLon);
        }

        async function runFetch(lat, lon) {
            try {
                const query = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&forecast_days=1`;
                const res = await fetch(query);
                if(!res.ok) throw new Error();
                const data = await res.json();

                const cTemp = Math.round(data.current.temperature_2m);
                const codeMap = { 0: 'Clear', 1: 'Fine', 2: 'Cloudy', 3: 'Overcast', 45: 'Fog', 61: 'Rain' };
                const cDesc = codeMap[data.current.weather_code] || 'Stable';

                minimalEl.textContent = `${cTemp}°C / ${cDesc}`;
                expandedEl.innerHTML = `
                    <div style="font-size:3.5rem; font-weight:800; color:var(--primary-color); line-height:1; margin-bottom:1rem;">${cTemp}°C</div>
                    <h3>Localized Context: ${cDesc}</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem; margin-top:0.25rem;">Telemetry mapped dynamically from satellite positioning data.</p>
                `;

                const currentHourIndex = new Date().getHours();
                let timelineHTML = '';
                
                for(let i = 0; i < 6; i++) {
                    const targetIdx = (currentHourIndex + i) % 24;
                    const hTime = `${targetIdx.toString().padStart(2, '0')}:00`;
                    const hTemp = Math.round(data.hourly.temperature_2m[targetIdx]);
                    const hDesc = codeMap[data.hourly.weather_code[targetIdx]] || 'Stable';

                    timelineHTML += `
                        <div class="hourly-weather-node">
                            <span class="hourly-node-time">${hTime}</span>
                            <span class="hourly-node-temp">${hTemp}°C</span>
                            <span class="hourly-node-desc">${hDesc}</span>
                        </div>
                    `;
                }
                hourlyGrid.innerHTML = timelineHTML;

            } catch {
                minimalEl.textContent = "Offline Terminal";
                expandedEl.innerHTML = `<p style="color:var(--text-muted)">Satellite arrays could not map metrics cleanly.</p>`;
                hourlyGrid.innerHTML = '';
            }
        }
    }

    init();
});