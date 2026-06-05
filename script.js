function askAI() {
    let question = document.getElementById("question").value;
    let answerDiv = document.getElementById("answer");
    
    if (!question.trim()) {
        answerDiv.innerText = "💬 Ask me anything about Sami — skills, projects, experience, earning potential, or achievements.";
        return;
    }
    
    let q = question.toLowerCase();
    let reply = "";
    
    // ==================== EARNING POTENTIAL (NEW) ====================
    if (q.includes("earn") || q.includes("salary") || q.includes("money") || q.includes("income") ||
        q.includes("paid") || q.includes("rate") || q.includes("how much") || q.includes("kama") ||
        q.includes("kitna") || q.includes("pesa") || q.includes("worth")) {
        
        reply = "💰 Sami's Earning Potential:\n\n" +
                "• AI Intern (current): Market rate ₹15k-25k/month\n" +
                "• Junior AI Engineer (next role): ₹30k-50k/month\n" +
                "• Freelance AI Projects: ₹20k-80k per project\n" +
                "• Full-time AI Engineer (1 year exp): ₹4-8 LPA\n\n" +
                "⭐ Skills that pay: RAG, AI Agents, Chatbots, LLM Integration\n" +
                "🔥 Sami is open for remote AI roles and freelance work!";
    }
    
    // ==================== ACHIEVEMENTS / RESULTS (NEW) ====================
    else if (q.includes("kar kia") || q.includes("results") || q.includes("achieved") || 
             q.includes("accomplished") || q.includes("kia kara") || q.includes("kya hasil") ||
             q.includes("what did he achieve") || q.includes("outcome") || q.includes("success") ||
             q.includes("itna sab kark") || q.includes("kya banaya") || q.includes("delivered")) {
        
        reply = "🏆 What Sami Achieved After All This:\n\n" +
                "✅ 6 Complete AI Projects (Real clients + Personal)\n" +
                "✅ 4+ Months AI Internship Experience\n" +
                "✅ Built Production-Ready Chatbots (Al Shifa, Siddique Brothers)\n" +
                "✅ Mastered RAG, AI Agents, LangChain, Groq API\n" +
                "✅ Deployed Live Portfolio: samiai.netlify.app\n" +
                "✅ From Zero to AI Engineer — in just 4 months!\n\n" +
                "🎯 Current Goal: Fine-tuning LLMs & Landing Junior AI Engineer Role\n" +
                "💡 Next: Earning ₹4-8 LPA within 1 year";
    }
    
    // ==================== SKILLS ====================
    else if (q.includes("skill") || q.includes("know") || q.includes("can") || q.includes("able") || 
        q.includes("python") || q.includes("langchain") || q.includes("rag") || q.includes("agent") ||
        q.includes("chatbot") || q.includes("html") || q.includes("css") || q.includes("javascript") ||
        q.includes("groq") || q.includes("numpy") || q.includes("pandas") || q.includes("node") ||
        q.includes("technology") || q.includes("tech stack") || q.includes("framework")) {
        
        reply = "✅ Sami's Technical Skills:\n\n" +
                "🐍 Python | LangChain | LangGraph\n" +
                "📚 RAG (Retrieval Augmented Generation)\n" +
                "🤖 AI Agents with Tools\n" +
                "💬 Chatbots Development (5+ bots)\n" +
                "🌐 HTML5, CSS3, JavaScript\n" +
                "⚡ Groq API | OpenAI API\n" +
                "📊 NumPy | Pandas\n" +
                "🟢 Node.js\n" +
                "🎨 Streamlit | Flask\n" +
                "🗄️ ChromaDB (Vector Database)";
    }
    
    // ==================== PROJECTS ====================
    else if (q.includes("project") || q.includes("build") || q.includes("made") || q.includes("create") ||
             q.includes("developed") || q.includes("portfolio") || q.includes("what did he make") ||
             q.includes("showcase") || q.includes("bot") || q.includes("al shifa") || 
             q.includes("siddique") || q.includes("urdu") || q.includes("healthcare") || 
             q.includes("career advisor") || q.includes("agent")) {
        
        reply = "🚀 Sami's Projects (6 complete):\n\n" +
                "1. 🤖 AI Career Advisor — Live on this website!\n" +
                "2. 🏥 Al Shifa Healthcare Chatbot — Medical queries & appointments\n" +
                "3. 🏢 Siddique Brothers (SB Group) — Business inquiry & customer support\n" +
                "4. 📄 RAG Document Q&A — Upload documents, get answers\n" +
                "5. 🧠 AI Agent with Tools — Web search + calculator\n" +
                "6. 🗣️ Urdu Bilingual Bot — Urdu/English hybrid chatbot\n\n" +
                "🔗 All projects on GitHub: github.com/samimuhajir666-cmd";
    }
    
    // ==================== EXPERIENCE ====================
    else if (q.includes("experience") || q.includes("intern") || q.includes("job") || q.includes("company") ||
             q.includes("worked") || q.includes("professional") || q.includes("career") ||
             q.includes("where did he work")) {
        
        reply = "💼 Sami's Experience:\n\n" +
                "• AI Intern (4+ months)\n" +
                "• Built 5+ production-ready chatbots\n" +
                "• Implemented RAG pipelines for real clients\n" +
                "• Created AI agents with LangGraph\n" +
                "• Deployed multiple projects on Streamlit & Netlify\n" +
                "• Currently working on Fine-tuning LLMs";
    }
    
    // ==================== LEARNING ====================
    else if (q.includes("learn") || q.includes("next") || q.includes("future") || q.includes("plan") ||
             q.includes("studying") || q.includes("improve") || q.includes("upcoming") ||
             q.includes("what should he learn") || q.includes("goal")) {
        
        reply = "📚 Sami's Learning Path:\n\n" +
                "✅ Already Mastered: RAG, AI Agents, Chatbots, Deployment\n" +
                "🔜 Currently Learning: Fine-tuning LLMs (Unsloth, LoRA)\n" +
                "🔜 Next: Advanced RAG, Backend Integration (Node.js/Flask)\n" +
                "🔜 Future: MLOps, Vector Databases Optimization";
    }
    
    // ==================== ISLAMIC STUDIES ====================
    else if (q.includes("dars") || q.includes("nizami") || q.includes("islam") || q.includes("quran") ||
             q.includes("religious") || q.includes("madrasa") || q.includes("alim")) {
        
        reply = "🕌 Sami's Islamic Studies:\n\n" +
                "• Student of Dars-e-Nizami (Traditional Islamic Sciences)\n" +
                "• Balancing Islamic education with AI engineering\n" +
                "• Bringing ethics & values into technology";
    }
    
    // ==================== NAME ====================
    else if (q.includes("name") || q.includes("who") || q.includes("introduce") || q.includes("about")) {
        
        reply = "🧑‍💻 This is Sami — AI Engineer, Dars-e-Nizami student.\n\n" +
                "From heartbreak to hard work. Built 6 AI projects in 4 months.\n" +
                "Ask me about skills, projects, earning potential, or achievements!";
    }
    
    // ==================== CONTACT ====================
    else if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") ||
             q.includes("linkedin") || q.includes("github")) {
        
        reply = "📫 Connect with Sami:\n\n" +
                "• GitHub: github.com/samimuhajir666-cmd\n" +
                "• Email: samimuhajir666@gmail.com\n" +
                "• Portfolio: samiai.netlify.app\n\n" +
                "Open for AI internships and junior AI engineer roles!";
    }
    
    // ==================== JOURNEY ====================
    else if (q.includes("journey") || q.includes("story") || q.includes("how long") || q.includes("started")) {
        
        reply = "🏆 Sami's Journey:\n\n" +
                "• Started from zero — 4 months ago\n" +
                "• Learned RAG, AI Agents, Chatbots from scratch\n" +
                "• Built 6 complete AI projects\n" +
                "• From heartbreak to hard work — transformed life through skills";
    }
    
    // ==================== DEFAULT ====================
    else {
        reply = "💡 I can tell you about:\n\n" +
                "• 🔧 Skills — Python, LangChain, RAG, AI Agents\n" +
                "• 🚀 Projects — 6 completed AI projects\n" +
                "• 💼 Experience — 4+ months AI internship\n" +
                "• 💰 Earnings — Salary & freelance potential (NEW!)\n" +
                "• 🏆 Achievements — What he did with all this (NEW!)\n" +
                "• 📚 Learning — Fine-tuning LLMs\n" +
                "• 🕌 Islamic Studies — Dars-e-Nizami\n\n" +
                "Try: 'what he can earn' or 'is ny ye sab kark kia kara'";
    }
    
   <!-- Projects Section -->
<section id="projects" class="projects">
    <h2 class="section-title">🚀 Featured Projects</h2>
    <div class="projects-grid">
        
        <div class="project-card" onclick="askAboutProject('Al Shifa Healthcare')">
            <h3>🏥 Al Shifa Healthcare</h3>
            <p>Medical chatbot for appointments and health queries</p>
            <button class="project-btn">Ask about this project →</button>
        </div>
        
        <div class="project-card" onclick="askAboutProject('Siddique Brothers')">
            <h3>🏢 Siddique Brothers</h3>
            <p>Business inquiry and customer support chatbot</p>
            <button class="project-btn">Ask about this project →</button>
        </div>
        
        <div class="project-card" onclick="askAboutProject('RAG Document Q&A')">
            <h3>📄 RAG Document Q&A</h3>
            <p>Upload documents and get AI-powered answers</p>
            <button class="project-btn">Ask about this project →</button>
        </div>
        
        <div class="project-card" onclick="askAboutProject('AI Agent with Tools')">
            <h3>🧠 AI Agent with Tools</h3>
            <p>Web search + calculator integrated AI agent</p>
            <button class="project-btn">Ask about this project →</button>
        </div>
        
        <div class="project-card" onclick="askAboutProject('Urdu Bilingual Bot')">
            <h3>🗣️ Urdu Bilingual Bot</h3>
            <p>Urdu/English hybrid chatbot</p>
            <button class="project-btn">Ask about this project →</button>
        </div>
        
        <div class="project-card" onclick="askAboutProject('Sirat-e-Mustaqeem AI Agent')">
            <h3>🕌 Sirat-e-Mustaqeem AI Agent</h3>
            <p>Voice-enabled halal career guidance + haram warnings</p>
            <button class="project-btn">Ask about this project →</button>
        </div>
        
    </div>
</section>

<!-- Skills ka clickable section bhi add karo -->
<section class="skills-clickable">
    <h2 class="section-title">💡 Click on any skill to learn more</h2>
    <div class="skills-grid">
        <div class="skill-card" onclick="askAboutSkill('Python')">🐍 Python</div>
        <div class="skill-card" onclick="askAboutSkill('LangChain')">🦜 LangChain</div>
        <div class="skill-card" onclick="askAboutSkill('RAG')">📚 RAG</div>
        <div class="skill-card" onclick="askAboutSkill('AI Agents')">🤖 AI Agents</div>
        <div class="skill-card" onclick="askAboutSkill('Chatbots')">💬 Chatbots</div>
        <div class="skill-card" onclick="askAboutSkill('Groq API')">⚡ Groq API</div>
    </div>
</section>
