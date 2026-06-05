function askAI() {
    let question = document.getElementById("question").value;
    let answerDiv = document.getElementById("answer");
    
    let lowerQ = question.toLowerCase();
    
    if (lowerQ.includes("skill")) {
        answerDiv.innerText = "Sami knows Python, LangChain, RAG, AI Agents, Chatbots, HTML/CSS, JavaScript, Groq API";
    }
    else if (lowerQ.includes("project")) {
        answerDiv.innerText = "Sami built: AI Career Advisor, Al Shifa Healthcare, Siddique Brothers, RAG Q&A, AI Agent, Urdu Bot";
    }
    else if (lowerQ.includes("experience")) {
        answerDiv.innerText = "Sami has 4+ months of AI internship experience";
    }
    else if (lowerQ.includes("learn")) {
        answerDiv.innerText = "Sami should learn Fine-tuning, Advanced RAG, and Backend next";
    }
    else {
        answerDiv.innerText = "Ask me about Sami's skills, projects, experience, or what he should learn next.";
    }
}