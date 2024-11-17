import React, { useState, useEffect } from 'react';
import styles from './colorPicker.module.css';

const ColorPicker = () => {
  const [previewColor, setPreviewColor] = useState("#FFFFFF");
  const [bgColor, setBgColor] = useState("#0F172A");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);

  const handlePreviewColorChange = (event) => {
    setPreviewColor(event.target.value);
  };

  const handleBgColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Color Picker</h1>
        
        <div 
          className={styles.preview}
          style={{ backgroundColor: previewColor }}
        >
          <p className={styles.previewText}>
            {previewColor.toUpperCase()}
          </p>
        </div>

        <div className={styles.controlGroup}>
          <label className={styles.label}>
            Canvas Color
          </label>
          <div className={styles.inputGroup}>
            <input
              type="color"
              value={previewColor}
              onChange={handlePreviewColorChange}
              className={styles.colorInput}
            />
            <input
              type="text"
              value={previewColor.toUpperCase()}
              onChange={(e) => {
                const newColor = e.target.value;
                if (/^#[0-9A-F]{0,6}$/i.test(newColor)) {
                  setPreviewColor(newColor);
                }
              }}
              className={styles.textInput}
              placeholder="#FFFFFF"
            />
          </div>
        </div>

        <div className={styles.controlGroup}>
          <label className={styles.label}>
            Background Color
          </label>
          <div className={styles.inputGroup}>
            <input
              type="color"
              value={bgColor}
              onChange={handleBgColorChange}
              className={styles.colorInput}
            />
            <input
              type="text"
              value={bgColor.toUpperCase()}
              onChange={(e) => {
                const newColor = e.target.value;
                if (/^#[0-9A-F]{0,6}$/i.test(newColor)) {
                  setBgColor(newColor);
                }
              }}
              className={styles.textInput}
              placeholder="#0F172A"
            />
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoGroup}>
            <h2 className={styles.infoTitle}>Canvas Color</h2>
            <div className={styles.infoContent}>
              <p>HEX: {previewColor.toUpperCase()}</p>
              <p>RGB: {hexToRgb(previewColor)}</p>
            </div>
          </div>
          <div className={styles.infoGroup}>
            <h2 className={styles.infoTitle}>Background Color</h2>
            <div className={styles.infoContent}>
              <p>HEX: {bgColor.toUpperCase()}</p>
              <p>RGB: {hexToRgb(bgColor)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
