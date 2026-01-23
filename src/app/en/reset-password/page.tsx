"use client";

import { useEffect, useState } from "react";

type PageState = "loading" | "success" | "error";

interface TokenData {
    accessToken: string | null;
    refreshToken: string | null;
    error: string | null;
    errorDescription: string | null;
}

export default function ResetPasswordPage() {
    const [state, setState] = useState<PageState>("loading");
    const [appUrl, setAppUrl] = useState<string>("zodiacflow://");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [buttonText, setButtonText] = useState<string>("Open Zodiac Flow");

    useEffect(() => {
        // Get tokens from URL hash (Supabase sends them as fragments)
        const hash = window.location.hash.substring(1);
        const hashParams = new URLSearchParams(hash);

        // Also check query string as fallback
        const queryParams = new URLSearchParams(window.location.search);

        const tokenData: TokenData = {
            accessToken: hashParams.get("access_token") || queryParams.get("access_token"),
            refreshToken: hashParams.get("refresh_token") || queryParams.get("refresh_token"),
            error: hashParams.get("error") || queryParams.get("error"),
            errorDescription: hashParams.get("error_description") || queryParams.get("error_description"),
        };

        console.log("Password reset redirect - tokens found:", !!tokenData.accessToken);

        if (tokenData.accessToken && tokenData.refreshToken) {
            // Build the deep link URL
            const deepLinkUrl = `zodiacflow://reset-password#access_token=${encodeURIComponent(
                tokenData.accessToken
            )}&refresh_token=${encodeURIComponent(tokenData.refreshToken)}`;

            setAppUrl(deepLinkUrl);
            setState("success");

            // Try to open the app automatically after a short delay
            const autoRedirectTimer = setTimeout(() => {
                window.location.href = deepLinkUrl;
            }, 500);

            // Fallback: if still on page after 2 seconds, update button text
            const fallbackTimer = setTimeout(() => {
                setButtonText("Tap to Open Zodiac Flow");
            }, 2000);

            return () => {
                clearTimeout(autoRedirectTimer);
                clearTimeout(fallbackTimer);
            };
        } else {
            // No tokens found - show error
            setState("error");

            if (tokenData.error || tokenData.errorDescription) {
                setErrorMessage(
                    tokenData.errorDescription || tokenData.error || "Invalid or expired reset link."
                );
            } else {
                setErrorMessage("Invalid or expired reset link. Please request a new password reset from the app.");
            }
        }
    }, []);

    return (
        <div className="reset-password-container">
            <style jsx>{`
        .reset-password-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background: linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #415A77 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .content-wrapper {
          text-align: center;
          padding: 40px;
          max-width: 400px;
        }

        .logo {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .title {
          font-size: 24px;
          margin-bottom: 16px;
          color: #E11D48;
          font-weight: 600;
        }

        .description {
          font-size: 16px;
          color: #94A3B8;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-top-color: #E11D48;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .btn {
          display: inline-block;
          background: linear-gradient(135deg, #8B5CF6, #EC4899);
          color: white;
          padding: 14px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
        }

        .error-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 16px;
          border-radius: 12px;
          margin-top: 20px;
        }

        .error-title {
          color: #EF4444;
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .error-message {
          color: #94A3B8;
          font-size: 14px;
          line-height: 1.5;
        }
      `}</style>

            <div className="content-wrapper">
                <div className="logo">🔐</div>

                {state === "loading" && (
                    <>
                        <h1 className="title">Redirecting to App...</h1>
                        <p className="description">
                            Please wait while we redirect you to Zodiac Flow to reset your password.
                        </p>
                        <div className="spinner" />
                    </>
                )}

                {state === "success" && (
                    <>
                        <h1 className="title">Opening App...</h1>
                        <p className="description">
                            If the app doesn&apos;t open automatically, tap the button below.
                        </p>
                        <a href={appUrl} className="btn">
                            {buttonText}
                        </a>
                    </>
                )}

                {state === "error" && (
                    <>
                        <div className="error-box">
                            <h2 className="error-title">Something went wrong</h2>
                            <p className="error-message">{errorMessage}</p>
                        </div>
                        <a href="zodiacflow://" className="btn">
                            Open App
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}
