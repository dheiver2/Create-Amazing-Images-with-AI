import React, { useState } from 'react';
import { Wand2, Loader2, ImageDown } from 'lucide-react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, negative_prompt: negativePrompt })
      });

      if (!response.ok) throw new Error('Failed to generate image');
      const data = await response.json();
      if (data.image) setGeneratedImage(data.image);
    } catch (err) {
      setError(err.message || 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Create Your Image</h2>
            <div className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full rounded-lg border-gray-300"
                placeholder="Describe what you want to create..."
              />
              <textarea
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                rows={4}
                className="w-full rounded-lg border-gray-300"
                placeholder="What to avoid..."
              />
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg font-medium disabled:bg-gray-400"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-5 w-5" />
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Wand2 className="h-5 w-5" />
                    Generate
                  </div>
                )}
              </button>
              {error && <div className="text-red-600 text-sm">{error}</div>}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Preview</h2>
            <div className="aspect-square w-full bg-gray-100 rounded-lg flex items-center justify-center">
              {generatedImage ? (
                <img
                  src={generatedImage}
                  alt="Generated artwork"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center p-4">
                  <ImageDown className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Your image will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;
