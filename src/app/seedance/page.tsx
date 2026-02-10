'use client';

import { useState, useMemo } from 'react';

// Configuration options for Seedance prompt generation
const videoStyles = [
  { id: 'cinematic', label: 'Cinematic', emoji: '🎬', en: 'cinematic film style, professional cinematography' },
  { id: 'anime', label: 'Anime', emoji: '🎌', en: 'anime style, Japanese animation aesthetic' },
  { id: 'realistic', label: 'Realistic', emoji: '📷', en: 'photorealistic, hyperrealistic detail' },
  { id: '3d_render', label: '3D Render', emoji: '🎮', en: '3D rendered, CGI quality' },
  { id: 'vintage', label: 'Vintage', emoji: '📼', en: 'vintage film grain, retro aesthetic, nostalgic' },
  { id: 'documentary', label: 'Documentary', emoji: '🎥', en: 'documentary style, raw footage feel' },
  { id: 'fantasy', label: 'Fantasy', emoji: '✨', en: 'fantasy style, magical, ethereal' },
  { id: 'noir', label: 'Film Noir', emoji: '🖤', en: 'film noir style, high contrast, dramatic shadows' },
];

const sceneTypes = [
  { id: 'nature', label: 'Nature', emoji: '🌿', en: 'natural environment, outdoor scenery' },
  { id: 'urban', label: 'Urban/City', emoji: '🏙️', en: 'urban cityscape, metropolitan setting' },
  { id: 'indoor', label: 'Indoor', emoji: '🏠', en: 'indoor setting, interior space' },
  { id: 'abstract', label: 'Abstract', emoji: '🎨', en: 'abstract environment, surreal space' },
  { id: 'underwater', label: 'Underwater', emoji: '🌊', en: 'underwater scene, ocean depths' },
  { id: 'space', label: 'Space', emoji: '🌌', en: 'outer space, cosmic environment' },
  { id: 'beach', label: 'Beach', emoji: '🏖️', en: 'beach setting, coastal scenery' },
  { id: 'mountain', label: 'Mountain', emoji: '⛰️', en: 'mountain landscape, alpine scenery' },
  { id: 'forest', label: 'Forest', emoji: '🌲', en: 'dense forest, woodland environment' },
  { id: 'desert', label: 'Desert', emoji: '🏜️', en: 'desert landscape, arid environment' },
];

const cameraMovements = [
  { id: 'static', label: 'Static', emoji: '📍', en: 'static shot, fixed camera position' },
  { id: 'pan', label: 'Pan', emoji: '↔️', en: 'smooth horizontal pan' },
  { id: 'tilt', label: 'Tilt', emoji: '↕️', en: 'vertical tilt movement' },
  { id: 'zoom_in', label: 'Zoom In', emoji: '🔍', en: 'slow zoom in, dramatic close-up' },
  { id: 'zoom_out', label: 'Zoom Out', emoji: '🔭', en: 'zoom out, revealing wide shot' },
  { id: 'tracking', label: 'Tracking', emoji: '🎯', en: 'tracking shot, following subject' },
  { id: 'dolly', label: 'Dolly', emoji: '🛤️', en: 'dolly movement, smooth forward motion' },
  { id: 'crane', label: 'Crane', emoji: '🏗️', en: 'crane shot, sweeping vertical movement' },
  { id: 'handheld', label: 'Handheld', emoji: '✋', en: 'handheld camera, slight shake for realism' },
  { id: 'aerial', label: 'Aerial/Drone', emoji: '🚁', en: 'aerial drone shot, bird\'s eye view' },
  { id: 'orbit', label: 'Orbit', emoji: '🔄', en: 'orbiting around subject, 360 degree rotation' },
];

const characterActions = [
  { id: 'none', label: 'No Character', emoji: '🚫', en: '' },
  { id: 'walking', label: 'Walking', emoji: '🚶', en: 'person walking' },
  { id: 'running', label: 'Running', emoji: '🏃', en: 'person running' },
  { id: 'dancing', label: 'Dancing', emoji: '💃', en: 'person dancing gracefully' },
  { id: 'talking', label: 'Talking', emoji: '🗣️', en: 'person talking, speaking' },
  { id: 'sitting', label: 'Sitting', emoji: '🧘', en: 'person sitting calmly' },
  { id: 'standing', label: 'Standing', emoji: '🧍', en: 'person standing' },
  { id: 'looking', label: 'Looking Around', emoji: '👀', en: 'person looking around curiously' },
  { id: 'working', label: 'Working', emoji: '💼', en: 'person working, focused activity' },
  { id: 'playing', label: 'Playing', emoji: '🎮', en: 'person playing, playful movement' },
];

const atmosphereLighting = [
  { id: 'golden_hour', label: 'Golden Hour', emoji: '🌅', en: 'golden hour lighting, warm sunset tones' },
  { id: 'blue_hour', label: 'Blue Hour', emoji: '🌆', en: 'blue hour, twilight atmosphere' },
  { id: 'neon', label: 'Neon', emoji: '💜', en: 'neon lights, cyberpunk aesthetic, vibrant colors' },
  { id: 'dramatic', label: 'Dramatic', emoji: '🎭', en: 'dramatic lighting, high contrast, chiaroscuro' },
  { id: 'soft', label: 'Soft/Dreamy', emoji: '☁️', en: 'soft diffused lighting, dreamy atmosphere' },
  { id: 'bright', label: 'Bright Day', emoji: '☀️', en: 'bright daylight, clear sunny day' },
  { id: 'overcast', label: 'Overcast', emoji: '🌥️', en: 'overcast sky, even soft lighting' },
  { id: 'night', label: 'Night', emoji: '🌙', en: 'nighttime, moonlit scene' },
  { id: 'foggy', label: 'Foggy/Misty', emoji: '🌫️', en: 'foggy atmosphere, mysterious mist' },
  { id: 'studio', label: 'Studio Light', emoji: '💡', en: 'professional studio lighting, clean' },
];

export default function SeedancePage() {
  const [style, setStyle] = useState('cinematic');
  const [scene, setScene] = useState('nature');
  const [camera, setCamera] = useState('tracking');
  const [action, setAction] = useState('walking');
  const [atmosphere, setAtmosphere] = useState('golden_hour');
  const [customInput, setCustomInput] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate the prompt based on selections
  const generatedPrompt = useMemo(() => {
    const selectedStyle = videoStyles.find(s => s.id === style);
    const selectedScene = sceneTypes.find(s => s.id === scene);
    const selectedCamera = cameraMovements.find(c => c.id === camera);
    const selectedAction = characterActions.find(a => a.id === action);
    const selectedAtmosphere = atmosphereLighting.find(a => a.id === atmosphere);

    const parts: string[] = [];

    // Start with style
    if (selectedStyle) parts.push(selectedStyle.en);
    
    // Add atmosphere/lighting
    if (selectedAtmosphere) parts.push(selectedAtmosphere.en);
    
    // Add scene
    if (selectedScene) parts.push(selectedScene.en);
    
    // Add character action if selected
    if (selectedAction && selectedAction.en) parts.push(selectedAction.en);
    
    // Add camera movement
    if (selectedCamera) parts.push(selectedCamera.en);
    
    // Add custom input if provided
    if (customInput.trim()) {
      // Simple translation hint for Chinese input
      parts.push(customInput.trim());
    }

    // Add quality boosters
    parts.push('high quality', '4K resolution', 'smooth motion');

    return parts.join(', ');
  }, [style, scene, camera, action, atmosphere, customInput]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const SelectGrid = ({ 
    options, 
    value, 
    onChange, 
    label 
  }: { 
    options: typeof videoStyles;
    value: string;
    onChange: (id: string) => void;
    label: string;
  }) => (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`p-3 rounded-xl text-left transition-all duration-200 ${
              value === option.id
                ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-2 border-blue-500'
                : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
            }`}
          >
            <span className="text-xl">{option.emoji}</span>
            <p className="text-sm mt-1 font-medium">{option.label}</p>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full mb-4">
          🎬 AI Video Prompt Generator
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">Seedance</span> Prompt Generator
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Create optimized prompts for ByteDance&apos;s Seedance AI video generation tool. 
          Select your preferences and get a ready-to-use English prompt.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Options Panel */}
        <div className="space-y-8">
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>⚙️</span> Configuration
            </h2>
            
            <div className="space-y-6">
              <SelectGrid
                options={videoStyles}
                value={style}
                onChange={setStyle}
                label="🎨 Video Style"
              />

              <SelectGrid
                options={sceneTypes}
                value={scene}
                onChange={setScene}
                label="🌍 Scene Type"
              />

              <SelectGrid
                options={cameraMovements}
                value={camera}
                onChange={setCamera}
                label="📹 Camera Movement"
              />

              <SelectGrid
                options={characterActions}
                value={action}
                onChange={setAction}
                label="🧑 Character Action"
              />

              <SelectGrid
                options={atmosphereLighting}
                value={atmosphere}
                onChange={setAtmosphere}
                label="💡 Atmosphere & Lighting"
              />

              {/* Custom Input */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">
                  ✏️ Custom Details (Optional - Chinese or English)
                </label>
                <textarea
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Add any custom details... (e.g., 一个女孩在樱花树下, a cat on the windowsill)"
                  className="input-field min-h-[100px] resize-none"
                />
                <p className="text-xs text-gray-500">
                  Tip: You can type in Chinese, but for best results with Seedance, consider using English descriptions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>✨</span> Generated Prompt
            </h2>
            
            <div className="bg-gray-800/50 rounded-xl p-4 mb-4 min-h-[200px]">
              <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">
                {generatedPrompt}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={copyToClipboard}
                className={`btn-primary flex-1 flex items-center justify-center gap-2 ${
                  copied ? 'bg-green-500 from-green-500 to-green-600' : ''
                }`}
              >
                {copied ? (
                  <>
                    <span>✓</span> Copied!
                  </>
                ) : (
                  <>
                    <span>📋</span> Copy Prompt
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="card p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <span>💡</span> Tips for Better Results
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Be specific about what you want to see in the video
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Combine complementary styles (e.g., Cinematic + Dramatic lighting)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Camera movement adds dynamism - try different options
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Add custom details to make your prompt unique
              </li>
            </ul>
          </div>

          {/* Current Selection Summary */}
          <div className="card p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <span>📊</span> Current Selection
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span>{videoStyles.find(s => s.id === style)?.emoji}</span>
                <span className="text-gray-400">Style:</span>
                <span className="font-medium">{videoStyles.find(s => s.id === style)?.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{sceneTypes.find(s => s.id === scene)?.emoji}</span>
                <span className="text-gray-400">Scene:</span>
                <span className="font-medium">{sceneTypes.find(s => s.id === scene)?.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{cameraMovements.find(c => c.id === camera)?.emoji}</span>
                <span className="text-gray-400">Camera:</span>
                <span className="font-medium">{cameraMovements.find(c => c.id === camera)?.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{characterActions.find(a => a.id === action)?.emoji}</span>
                <span className="text-gray-400">Action:</span>
                <span className="font-medium">{characterActions.find(a => a.id === action)?.label}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <span>{atmosphereLighting.find(a => a.id === atmosphere)?.emoji}</span>
                <span className="text-gray-400">Atmosphere:</span>
                <span className="font-medium">{atmosphereLighting.find(a => a.id === atmosphere)?.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
