"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Converted to JS-friendly: remove TypeScript type annotations
export default function Typewriter({
  children,
  speed = 40,
  delay = 0,
  cursor = true,
  loop = false,
  pauseBetweenLoops = 800,
  className,
  onDone,
}) {
  const fullText = useMemo(() => children ?? "", [children]);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(delay === 0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const isDone = index >= fullText.length;

  // Kick off after initial delay
  useEffect(() => {
    if (started) return;
    timeoutRef.current = window.setTimeout(() => setStarted(true), Math.max(0, delay));
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [started, delay]);

  // Main typing loop
  useEffect(() => {
    if (!started) return;
    if (isDone) {
      if (loop) {
        timeoutRef.current = window.setTimeout(() => setIndex(0), Math.max(0, pauseBetweenLoops));
      } else if (onDone) {
        onDone();
      }
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => Math.min(i + 1, fullText.length));
    }, Math.max(1, speed));

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [started, isDone, loop, pauseBetweenLoops, speed, fullText.length, onDone]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const visible = fullText.slice(0, index);

  const defaultCursor = (
    <span className="tw-cursor" aria-hidden>
      |
      <style jsx>{`
        .tw-cursor { display:inline-block; animation: tw-blink 1s step-end infinite; }
        @keyframes tw-blink { 0%, 50% { opacity: 1 } 50.01%, 100% { opacity: 0 } }
      `}</style>
    </span>
  );

  return (
    <span
      className={className}
      aria-live="polite"
      aria-atomic="true"
      style={{ whiteSpace: "pre-wrap" }}
    >
      {visible}
      {cursor && (cursor === true ? defaultCursor : cursor)}
    </span>
  );
}