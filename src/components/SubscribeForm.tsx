import React, { useState } from 'react';

const API_URL = 'https://backend-beige-six-80.vercel.app';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${API_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'blog' }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message || 'Subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || data.errors?.[0]?.message || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '28rem', margin: '2rem auto', textAlign: 'center' }}>
      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
        Get weekly updates on the coding agent ecosystem — new agents, format changes, benchmarks.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={status === 'loading'}
          style={{
            flex: '1 1 200px',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '0.5rem',
            color: 'var(--sl-color-white)',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--sl-color-accent)',
            color: 'var(--sl-color-black)',
            fontWeight: 700,
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
            opacity: status === 'loading' ? 0.6 : 1,
          }}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe →'}
        </button>
      </form>
      {status !== 'idle' && (
        <p style={{
          marginTop: '0.75rem',
          fontSize: '0.85rem',
          color: status === 'success' ? 'var(--sl-color-accent)' : '#f87171',
        }}>
          {message}
        </p>
      )}
    </div>
  );
}
