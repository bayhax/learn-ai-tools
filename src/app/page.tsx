'use client';

import { useState } from 'react';

const tools = [
  { name: 'ChatGPT', category: 'Chatbot', icon: '💬', description: 'OpenAI\'s conversational AI for text generation and assistance' },
  { name: 'Claude', category: 'Chatbot', icon: '🤖', description: 'Anthropic\'s helpful, harmless, and honest AI assistant' },
  { name: 'MidJourney', category: 'Image', icon: '🎨', description: 'AI-powered image generation for stunning visuals' },
  { name: 'Cursor', category: 'Coding', icon: '⚡', description: 'AI-first code editor for faster development' },
  { name: 'Seedance', category: 'Video', icon: '🎬', description: 'ByteDance\'s AI video generation tool', featured: true },
  { name: 'Suno', category: 'Music', icon: '🎵', description: 'Create AI-generated music from text prompts' },
];

const categories = [
  { name: 'Chatbots', icon: '💬', count: 5 },
  { name: 'Image Generation', icon: '🎨', count: 8 },
  { name: 'Video Generation', icon: '🎬', count: 4 },
  { name: 'Coding Assistants', icon: '⚡', count: 6 },
  { name: 'Music & Audio', icon: '🎵', count: 3 },
  { name: 'Productivity', icon: '📊', count: 10 },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/20 via-transparent to-transparent rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">AI Tools</span>
            <br />
            Learning Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Master the future of AI. Tutorials, guides, and tools for ChatGPT, Claude, MidJourney, Seedance, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/seedance" className="btn-primary inline-flex items-center justify-center gap-2">
              <span>🎬</span>
              Try Seedance Prompt Generator
            </a>
            <a href="#tools" className="btn-secondary inline-flex items-center justify-center gap-2">
              <span>📚</span>
              Browse Tools
            </a>
          </div>
        </div>
      </section>

      {/* Featured Tool Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <a href="/seedance" className="block card p-6 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl">🎬</div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full mb-2">
                  NEW TOOL
                </span>
                <h2 className="text-2xl font-bold mb-2">Seedance Prompt Generator</h2>
                <p className="text-gray-400">
                  Generate optimized prompts for ByteDance&apos;s Seedance AI video tool. Choose style, scene, camera movement, and more.
                </p>
              </div>
              <div className="gradient-bg px-6 py-3 rounded-xl font-medium group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all">
                Try Now →
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section id="tools" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore by <span className="gradient-text">Category</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div key={cat.name} className="card p-4 text-center hover:border-blue-500/50 transition-all cursor-pointer group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="font-medium mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.count} tools</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular <span className="gradient-text">AI Tools</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className={`card p-6 hover:border-blue-500/50 transition-all group ${tool.featured ? 'ring-2 ring-blue-500/30' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{tool.name}</h3>
                      {tool.featured && (
                        <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full">Featured</span>
                      )}
                    </div>
                    <span className="inline-block px-2 py-0.5 text-xs bg-gray-800 text-gray-400 rounded-full mb-2">
                      {tool.category}
                    </span>
                    <p className="text-sm text-gray-400">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay <span className="gradient-text">Updated</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Get weekly updates on new AI tools, tutorials, and tips. Join 1,000+ AI enthusiasts.
          </p>
          
          {subscribed ? (
            <div className="card p-6 text-center">
              <span className="text-4xl mb-4 block">🎉</span>
              <p className="text-green-400 font-medium">Thanks for subscribing! Check your inbox soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field flex-1"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
