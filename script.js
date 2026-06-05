function askAI() {
    let question = document.getElementById("question").value;
    let answerDiv = document.getElementById("answer");
    
    if (!question.trim()) {
        answerDiv.innerText = "💬 Ask me anything about Sami — skills, projects, experience, learning, or background.";
        return;
    }
    
    let q = question.toLowerCase();
    let reply = "";
    
    // ==================== SKILLS (10+ ways to ask) ====================
    if (q.includes("skill") || q.includes("know") || q.includes("can") || q.includes("able") || 
        q.includes("python") || q.includes("langchain") || q.includes("rag") || q.includes("agent") ||
        q.includes("chatbot") || q.includes("html") || q.includes("css") || q.includes("javascript") ||
        q.includes("groq") || q.includes("numpy") || q.includes("pandas") || q.includes("node") ||
        q.includes("technology") || q.includes("tech stack") || q.includes("framework") ||
        q.includes("what can he do") || q.includes("expert") || q.includes("proficient")) {
        
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
    
    // ==================== PROJECTS (real ones) ====================
    else if (q.includes("project") || q.includes("build") || q.includes("made") || q.includes("create") ||
             q.includes("developed") || q.includes("work") || q.includes("portfolio") ||
             q.includes("what did he make") || q.includes("showcase") || q.includes("bot") ||
             q.includes("al shifa") || q.includes("siddique") || q.includes("urdu") ||
             q.includes("healthcare") || q.includes("career advisor") || q.includes("agent")) {
        
        reply = "🚀 Sami's Projects (6 complete):\n\n" +
                "1. 🤖 AI Career Advisor — Live on this website!\n" +
                "2. 🏥 Al Shifa Healthcare Chatbot — Medical queries & appointments\n" +
                "3. 🏢 Siddique Brothers (SB Group) — Business inquiry & customer support\n" +
                "4. 📄 RAG Document Q&A — Upload documents, get answers\n" +
                "5. 🧠 AI Agent with Tools — Web search + calculator\n" +
                "6. 🗣️ Urdu Bilingual Bot — Urdu/English hybrid chatbot\n\n" +
                "🔗 All projects on GitHub: github.com/samimuhajir666-cmd";
    }
    
    // ==================== EXPERIENCE / INTERNSHIP ====================
    else if (q.includes("experience") || q.includes("intern") || q.includes("job") || q.includes("company") ||
             q.includes("worked") || q.includes("professional") || q.includes("career") ||
             q.includes("where did he work") || q.includes("background")) {
        
        reply = "💼 Sami's Experience:\n\n" +
                "• AI Intern (4+ months)\n" +
                "• Built 5+ production-ready chatbots\n" +
                "• Implemented RAG pipelines for real clients\n" +
                "• Created AI agents with LangGraph\n" +
                "• Deployed multiple projects on Streamlit & Netlify\n" +
                "• Currently working on Fine-tuning LLMs";
    }
    
    // ==================== LEARNING / NEXT STEPS ====================
    else if (q.includes("learn") || q.includes("next") || q.includes("future") || q.includes("plan") ||
             q.includes("studying") || q.includes("improve") || q.includes("upcoming") ||
             q.includes("what should he learn") || q.includes("goal") || q.includes("target")) {
        
        reply = "📚 Sami's Learning Path (Current & Next):\n\n" +
                "✅ Already Mastered: RAG, AI Agents, Chatbots, Deployment\n" +
                "🔜 Currently Learning: Fine-tuning LLMs (Unsloth, LoRA)\n" +
                "🔜 Next: Advanced RAG, Backend Integration (Node.js/Flask)\n" +
                "🔜 Future: MLOps, Vector Databases Optimization";
    }
    
    // ==================== DARS-E-NIZAMI / ISLAMIC STUDIES ====================
    else if (q.includes("dars") || q.includes("nizami") || q.includes("islam") || q.includes("quran") ||
             q.includes("religious") || q.includes("madrasa") || q.includes("alim") ||
             q.includes("studies") && q.includes("islamic")) {
        
        reply = "🕌 Sami's Islamic Studies:\n\n" +
                "• Student of Dars-e-Nizami (Traditional Islamic Sciences)\n" +
                "• Balancing Islamic education with AI engineering\n" +
                "• Bringing ethics & values into technology\n" +
                "• Unique combination: Deen + Dunya";
    }
    
    // ==================== NAME / INTRODUCTION ====================
    else if (q.includes("name") || q.includes("who") || q.includes("introduce") || q.includes("about") ||
             q.includes("tell me") || q.includes("sami") && q.length < 15) {
        
        reply = "🧑‍💻 This is Sami — AI Engineer, Dars-e-Nizami student, and tech enthusiast.\n\n" +
                "From heartbreak to hard work. Built 6 AI projects in 4 months.\n" +
                "Currently learning Fine-tuning LLMs. Ask me anything about his skills, projects, or journey!";
    }
    
    // ==================== CONTACT / SOCIAL ====================
    else if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") ||
             q.includes("linkedin") || q.includes("github") || q.includes("social")) {
        
        reply = "📫 Connect with Sami:\n\n" +
                "• GitHub: github.com/samimuhajir666-cmd\n" +
                "• Email: samimuhajir666@gmail.com\n" +
                "• Portfolio: sami-ai-portfolio.netlify.app\n\n" +
                "Open for AI internships and junior AI engineer roles!";
    }
    
    // ==================== ACHIEVEMENTS / JOURNEY ====================
    else if (q.includes("achievement") || q.includes("journey") || q.includes("success") ||
             q.includes("how long") || q.includes("started") || q.includes("background") ||
             q.includes("story")) {
        
        reply = "🏆 Sami's Journey:\n\n" +
                "• Started from zero — 4 months ago\n" +
                "• Learned ML, RAG, AI Agents, Chatbots from scratch\n" +
                "• Built 6 complete AI projects\n" +
                "• Completed 4+ months AI internship\n" +
                "• From heartbreak to hard work — transformed life through skills\n\n" +
                "⭐ Currently: Learning Fine-tuning LLMs";
    }
    
    // ==================== MOTIVATION / ADVICE ====================
    else if (q.includes("motivation") || q.includes("advice") || q.includes("inspire") ||
             q.includes("message") || q.includes("suggest")) {
        
        reply = "💪 Sami's Message:\n\n" +
                "\"From heartbreak to hard work. Agar main seekh sakta hoon, to aap bhi seekh sakte ho. Consistency over intensity.\"\n\n" +
                "Advice: Start small, code daily (even 30 mins), and never copy-paste — type everything yourself.";
    }
    
    // ==================== DEFAULT (catch-all) ====================
    else {
        reply = "💡 I can tell you about:\n\n" +
                "• 🔧 Skills — Python, LangChain, RAG, AI Agents, etc.\n" +
                "• 🚀 Projects — 6 completed AI projects\n" +
                "• 💼 Experience — 4+ months AI internship\n" +
                "• 📚 Learning — Fine-tuning LLMs\n" +
                "• 🕌 Islamic Studies — Dars-e-Nizami student\n" +
                "• 🧑‍💻 Name & Background\n" +
                "• 📫 Contact info\n" +
                "• 🏆 Achievements & Journey\n\n" +
                "Try asking: 'What can Sami do?' or 'Tell me about his projects'";
    }
    
    // Display with typing effect (optional)
    answerDiv.style.opacity = "0";
    answerDiv.innerText = reply;
    setTimeout(() => { answerDiv.style.opacity = "1"; }, 50);
}
