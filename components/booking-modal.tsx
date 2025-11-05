"use client";

import React, { useEffect, useRef, useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "cab" | "bike";
}

export default function BookingModal({ isOpen, onClose, type }: BookingModalProps) {
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const dropLocations = [
    "Airport",
    "City Center",
    "Train Station",
    "Bus Terminal",
    "Hotel District",
    "Shopping Mall",
    "Business Park",
  ];

  // Styles (shadcn-inspired: rounded-2xl, soft shadow, subtle glassy overlay)
  const styles: Record<string, React.CSSProperties> = {
    backdrop: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(4px)",
      zIndex: 999,
    },
    container: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    dialog: {
      width: "100%",
      maxWidth: 480,
      borderRadius: 18,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(2,6,23,0.2)",
      padding: 20,
      transformOrigin: "center",
      zIndex: 1001,
      fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 700,
      margin: 0,
      color: "#0f172a", // dark-foreground
      lineHeight: 1.1,
    },
    headerDesc: {
      margin: "6px 0 0 0",
      fontSize: 13,
      color: "#64748b", // muted
    },
    label: {
      display: "block",
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 8,
      color: "#0f172a",
    },
    input: {
      width: "100%",
      borderRadius: 10,
      border: "1px solid #e6e9ef",
      padding: "10px 12px",
      fontSize: 14,
      outline: "none",
      boxSizing: "border-box",
    },
    inputFocus: {
      boxShadow: "0 0 0 4px rgba(250,204,21,0.08)", // yellow-ish focus
      border: "1px solid rgba(250,204,21,0.9)",
    },
    radioInline: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      paddingRight: 12,
    },
    selectButton: {
      width: "100%",
      textAlign: "left" as const,
      borderRadius: 10,
      border: "1px solid #e6e9ef",
      padding: "10px 12px",
      fontSize: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#fff",
      cursor: "pointer",
    },
    dropdown: {
      position: "absolute" as const,
      left: 0,
      right: 0,
      marginTop: 8,
      maxHeight: 180,
      overflow: "auto",
      borderRadius: 10,
      border: "1px solid #e6e9ef",
      background: "#fff",
      boxShadow: "0 8px 20px rgba(2,6,23,0.08)",
      zIndex: 1010,
    },
    option: {
      padding: "10px 12px",
      cursor: "pointer",
      fontSize: 14,
      color: "#0f172a",
    },
    optionHover: {
      background: "#f8fafc",
    },
    footerRow: {
      display: "flex",
      gap: 12,
      marginTop: 16,
    },
    btn: {
      flex: 1,
      borderRadius: 10,
      padding: "12px 14px",
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
      fontSize: 14,
    },
    cancelBtn: {
      background: "#fff",
      border: "1px solid #e6e9ef",
      color: "#0f172a",
    },
    cabBtn: {
      background: "#f59e0b", // yellow-500
      color: "#0b0b0b",
    },
    bikeBtn: {
      background: "#ef4444", // red-500
      color: "#fff",
    },
    priceRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 12,
    },
    smallMuted: {
      fontSize: 12,
      color: "#64748b",
    },
  };

  // close on ESC / click outside
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    function onClick(e: MouseEvent) {
      if (!modalRef.current) return;
      if (modalRef.current.contains(e.target as Node)) return;
      onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
      // lock scroll
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // close select when clicking outside it
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!selectRef.current) return;
      if (!selectRef.current.contains(e.target as Node)) setSelectOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleBook = () => {
    if (!pickupLocation || !dropLocation || !date || !time) {
      window.alert("Please fill all fields");
      return;
    }

    const bookingDetails = {
      type,
      tripType,
      pickupLocation,
      dropLocation,
      date,
      time,
    };

    // replace with your API call
    console.log("Booking:", bookingDetails);
    window.alert(`${type === "cab" ? "Cab" : "Bike"} booked successfully! Check console for details.`);
    onClose();
  };

  if (!isOpen) return null;

  // small helper for input focus styling (adds focus ring inline)
  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLButtonElement>) => {
    (e.target as HTMLElement).style.boxShadow = styles.inputFocus.boxShadow!;
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLButtonElement>) => {
    (e.target as HTMLElement).style.boxShadow = "none";
    (e.target as HTMLElement).style.border = "1px solid #e6e9ef";
  };

  return (
    <>
      <div style={styles.backdrop} />
      <div style={styles.container}>
        <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="booking-title" style={styles.dialog}>
          <header>
            <h2 id="booking-title" style={styles.headerTitle}>
              {type === "cab" ? "Book a Cab" : "Rent a Bike"}
            </h2>
            <p style={styles.headerDesc}>
              {type === "cab" ? "Quick booking for your cab ride" : "Quick booking for your bike rental"}
            </p>
          </header>

          {/* content */}
          <div style={{ marginTop: 16 }}>
            <div style={{ marginBottom: 12 }}>
              <label style={styles.label}>Trip Type</label>
              <div style={{ display: "flex", gap: 12 }}>
                <label style={styles.radioInline}>
                  <input
                    type="radio"
                    name="tripType"
                    value="one-way"
                    checked={tripType === "one-way"}
                    onChange={() => setTripType("one-way")}
                    style={{ width: 16, height: 16 }}
                  />
                  <span style={{ fontSize: 14 }}>One Way</span>
                </label>

                <label style={styles.radioInline}>
                  <input
                    type="radio"
                    name="tripType"
                    value="round-trip"
                    checked={tripType === "round-trip"}
                    onChange={() => setTripType("round-trip")}
                    style={{ width: 16, height: 16 }}
                  />
                  <span style={{ fontSize: 14 }}>Round Trip</span>
                </label>
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="pickup" style={styles.label}>
                Pick Up Location
              </label>
              <input
                id="pickup"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Enter pickup location"
                style={styles.input}
                onFocus={focusInput}
                onBlur={blurInput}
              />
            </div>

            <div style={{ marginBottom: 12, position: "relative" }} ref={selectRef}>
              <label style={styles.label}>Drop Location</label>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={selectOpen}
                onClick={() => setSelectOpen((s) => !s)}
                style={styles.selectButton}
                onFocus={focusInput}
                onBlur={blurInput}
              >
                <span style={{ color: dropLocation ? "#0f172a" : "#94a3b8" }}>
                  {dropLocation || "Select drop location"}
                </span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M6 8l4 4 4-4" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {selectOpen && (
                <div style={styles.dropdown}>
                  {dropLocations.map((loc) => (
                    <div
                      key={loc}
                      role="option"
                      onClick={() => {
                        setDropLocation(loc);
                        setSelectOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setDropLocation(loc);
                          setSelectOpen(false);
                        }
                      }}
                      tabIndex={0}
                      style={{
                        ...styles.option,
                      }}
                      onMouseEnter={(e) => ((e.currentTarget.style.background = "#f8fafc"))}
                      onMouseLeave={(e) => ((e.currentTarget.style.background = "transparent"))}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="date" style={styles.label}>
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={styles.input}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>

              <div style={{ width: 140 }}>
                <label htmlFor="time" style={styles.label}>
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={styles.input}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>
            </div>

            <div style={styles.priceRow}>
              <div>
                <div style={{ fontSize: 13, color: "#0f172a", fontWeight: 700 }}>{/* price placeholder */}</div>
                <div style={styles.smallMuted}>{/* optional subtitle */}</div>
              </div>
            </div>

            <div style={styles.footerRow}>
              <button
                onClick={onClose}
                style={{ ...styles.btn, ...styles.cancelBtn }}
                aria-label="Cancel booking"
              >
                Cancel
              </button>

              <button
                onClick={handleBook}
                style={{
                  ...styles.btn,
                  ...(type === "cab" ? styles.cabBtn : styles.bikeBtn),
                }}
                aria-label="Confirm booking"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
