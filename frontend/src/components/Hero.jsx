function Hero() {
  return (
    <section className="hero container" id="top">

      {/* Left side */}
      <div className="hero-content">

        <span className="tag">
          India · Software Developer
        </span>

        <h1>
          I build AI that <span>ships.</span>
        </h1>

        <p>
          Software developer interested in Python,
          Data Engineering, Generative AI, LLMs,
          RAG and building real-world applications.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View work →
          </a>

          <a href="#quiz" className="btn btn-outline">
            Take the quiz
          </a>
        </div>

      </div>

      {/* Right side */}
      <div className="assistant-card" id="chat">

        <div className="assistant-header">
          <h3>Ask Sandeep's assistant</h3>
          <span className="label">Groq · Llama</span>
        </div>

        <div className="chat-message user-message">
          What is RAG?
        </div>

        <div className="chat-message bot-message">
          RAG lets an LLM fetch relevant chunks
          from stored documents at question time,
          so answers come from real data instead
          of guesses.

          <div className="source-tag">
            Source: RAG basics
          </div>
        </div>

        <input
          type="text"
          placeholder="Ask about my projects or notes"
          disabled
        />

        <span className="assistant-hint">
          AI assistant coming soon
        </span>

      </div>

    </section>
  );
}

export default Hero;