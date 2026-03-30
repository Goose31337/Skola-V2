import './SunMoonToggle.css'

// I kryssrutan: checked = mörkt läge (samma som tidigare)
function ThemeToggle({ isDark, onChange }) {
  function handleChange(e) {
    onChange(e.target.checked)
  }

  return (
    <label id="theme-toggle-button">
      <input
        id="toggle"
        type="checkbox"
        checked={isDark}
        onChange={handleChange}
        aria-label="Byt mellan ljust och mörkt läge"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 112 48"
        width="112"
        height="48"
        aria-hidden="true"
      >
        <g id="container">
          <rect width="112" height="48" rx="24" />
        </g>

        <g id="patches" />

        <g id="cloud">
          <ellipse cx="78" cy="30" rx="14" ry="9" fill="rgba(255,255,255,0.85)" />
          <ellipse cx="92" cy="30" rx="11" ry="7" fill="rgba(255,255,255,0.85)" />
        </g>

        <g id="stars">
          <circle cx="40" cy="10" r="1" fill="#ffffff" />
          <circle cx="52" cy="14" r="1.2" fill="#ffffff" />
          <circle cx="72" cy="12" r="1.5" fill="#ffffff" />
          <circle cx="84" cy="18" r="0.8" fill="#ffffff" />
          <circle cx="58" cy="20" r="0.9" fill="#ffffff" />
        </g>

        <g id="sun">
          <circle cx="88" cy="16" r="10" fill="#fbbf24" />
        </g>

        <g id="moon">
          <circle cx="22" cy="16" r="9" fill="#e5e7eb" />
          <circle cx="30" cy="16" r="8" fill="#2b4360" />
        </g>

        <g id="button">
          <circle cx="24" cy="24" r="14" fill="#ffffff" stroke="#d1d5db" />
        </g>
      </svg>
    </label>
  )
}

export default ThemeToggle
