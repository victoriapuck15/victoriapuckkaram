import * as React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./globals.css";
import '@fontsource-variable/rubik';
import '@fontsource/calistoga';


export default function Home() {
  const handleTileClick = (tileIndex) => {
    // Handle click logic, for example, show an alert or navigate
    alert(`Tile ${tileIndex + 1} clicked!`);
  };

  return (
    <div id="home-page">
      {/* Header */}
      <header id="header" className="sticky top-0 z-10">
        Welcome to My Page
      </header>

      {/* Main Content */}
      <main id="main-content" className="pt-4">
        <div className="tile-grid">
          {[...Array(6)].map((_, index) => (
            <Card 
              key={index} 
              className={`tile tile-${index + 1}`}  
              onClick={() => handleTileClick(index)} // Handle tile click
            >
              <div className="tile-content">
                <h2 className="tile-title">Tile {index + 1}</h2>
                <p className="tile-description">Description for tile {index + 1}.</p>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="footer">
        <p>&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

