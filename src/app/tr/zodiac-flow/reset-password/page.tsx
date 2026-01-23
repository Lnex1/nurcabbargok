"use client";

import { useEffect, useState, FormEvent } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Page states
type PageState = "loading" | "form" | "success" | "error";

// Supabase Configuration
const SUPABASE_URL = "https://nieganzmbocgkoibnerr.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZWdhbnptYm9jZ2tvaWJuZXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0ODAzOTUsImV4cCI6MjA4MTA1NjM5NX0.ikizZoin7gwCFn5h-PvvBRzORt_p-PTqCFcne51hQxw";

export default function ResetPasswordWebPage() {
    const [state, setState] = useState<PageState>("loading");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [formMessage, setFormMessage] = useState<{ text: string; isError: boolean } | null>(null);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                // Initialize Supabase client
                const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                setSupabase(supabaseClient);

                // Get tokens from URL hash
                const hash = window.location.hash.substring(1);
                const params = new URLSearchParams(hash);

                const accessToken = params.get("access_token");
                const refreshToken = params.get("refresh_token");
                const type = params.get("type");

                console.log("Şifre sıfırlama - type:", type);

                if (!accessToken || !refreshToken) {
                    throw new Error("Geçersiz veya süresi dolmuş sıfırlama bağlantısı");
                }

                // Set the session with the tokens
                const { data, error } = await supabaseClient.auth.setSession({
                    access_token: accessToken,
                    refresh_token: refreshToken,
                });

                if (error) {
                    throw error;
                }

                if (!data.session) {
                    throw new Error("Oturum oluşturulamadı");
                }

                // Success - show form
                setState("form");
            } catch (error) {
                console.error("Başlatma hatası:", error);
                setState("error");
                setErrorMessage(
                    error instanceof Error
                        ? error.message
                        : "Bu bağlantı geçersiz veya süresi dolmuş. Lütfen uygulamadan yeni bir şifre sıfırlama isteği gönderin."
                );
            }
        };

        initializeAuth();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormMessage(null);

        // Validation
        if (password.length < 6) {
            setFormMessage({ text: "Şifre en az 6 karakter olmalıdır", isError: true });
            return;
        }

        if (password !== confirmPassword) {
            setFormMessage({ text: "Şifreler eşleşmiyor", isError: true });
            return;
        }

        if (!supabase) {
            setFormMessage({ text: "Bağlantı hatası. Lütfen sayfayı yenileyin.", isError: true });
            return;
        }

        setIsSubmitting(true);

        try {
            const { error } = await supabase.auth.updateUser({
                password: password,
            });

            if (error) {
                throw error;
            }

            // Sign out after password change
            await supabase.auth.signOut();

            // Show success
            setState("success");
        } catch (error) {
            console.error("Güncelleme hatası:", error);
            setFormMessage({
                text: error instanceof Error ? error.message : "Şifre güncellenemedi. Lütfen tekrar deneyin.",
                isError: true,
            });
            setIsSubmitting(false);
        }
    };

    return (
        <div className="reset-password-container">
            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .reset-password-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif;
                    background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    padding: 20px;
                }

                .container {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border-radius: 24px;
                    padding: 40px;
                    max-width: 400px;
                    width: 100%;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .logo {
                    text-align: center;
                    font-size: 48px;
                    margin-bottom: 16px;
                }

                h1 {
                    font-size: 24px;
                    text-align: center;
                    margin-bottom: 8px;
                    background: linear-gradient(135deg, #8b5cf6, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .subtitle {
                    text-align: center;
                    color: #94a3b8;
                    margin-bottom: 32px;
                    font-size: 14px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: #e2e8f0;
                }

                .input-wrapper {
                    position: relative;
                }

                input {
                    width: 100%;
                    padding: 14px 16px;
                    padding-right: 48px;
                    border: 1.5px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    font-size: 16px;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                input:focus {
                    outline: none;
                    border-color: #ec4899;
                    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.2);
                }

                input::placeholder {
                    color: #64748b;
                }

                .toggle-password {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: #64748b;
                    cursor: pointer;
                    font-size: 18px;
                    padding: 4px;
                }

                .toggle-password:hover {
                    color: #94a3b8;
                }

                .btn {
                    width: 100%;
                    padding: 16px;
                    border: none;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #8b5cf6, #ec4899);
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    margin-top: 12px;
                }

                .btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
                }

                .btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .message {
                    padding: 16px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    text-align: center;
                    font-size: 14px;
                }

                .message.error {
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    color: #fca5a5;
                }

                .message.success {
                    background: rgba(34, 197, 94, 0.1);
                    border: 1px solid rgba(34, 197, 94, 0.3);
                    color: #86efac;
                }

                .spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    margin-right: 8px;
                    vertical-align: middle;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                .loading-container {
                    text-align: center;
                    padding: 40px 0;
                }

                .loading-container .spinner {
                    width: 40px;
                    height: 40px;
                    border-width: 3px;
                    margin: 0 auto 20px;
                    display: block;
                }

                .success-container {
                    text-align: center;
                }

                .success-icon {
                    font-size: 64px;
                    margin-bottom: 16px;
                }

                .open-app-btn {
                    display: inline-block;
                    margin-top: 24px;
                    padding: 14px 32px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 12px;
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: background 0.2s;
                }

                .open-app-btn:hover {
                    background: rgba(255, 255, 255, 0.15);
                }

                .password-requirements {
                    font-size: 12px;
                    color: #64748b;
                    margin-top: 8px;
                }
            `}</style>

            <div className="container">
                <div className="logo">🔐</div>

                {/* Loading State */}
                {state === "loading" && (
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <p>İsteğiniz doğrulanıyor...</p>
                    </div>
                )}

                {/* Error State */}
                {state === "error" && (
                    <>
                        <h1>Bağlantı Süresi Doldu</h1>
                        <p className="subtitle">Bu şifre sıfırlama bağlantısı geçersiz veya süresi dolmuş.</p>
                        <div className="message error">{errorMessage}</div>
                        <a
                            href="zodiacflow://"
                            className="btn"
                            style={{ textAlign: "center", textDecoration: "none", display: "block" }}
                        >
                            Zodiac Flow&apos;u Aç
                        </a>
                    </>
                )}

                {/* Password Form */}
                {state === "form" && (
                    <>
                        <h1>Yeni Şifre Belirle</h1>
                        <p className="subtitle">Hesabınız için yeni bir şifre oluşturun.</p>

                        {formMessage && (
                            <div className={`message ${formMessage.isError ? "error" : "success"}`}>
                                {formMessage.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="password">Yeni Şifre</label>
                                <div className="input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        minLength={6}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </button>
                                </div>
                                <p className="password-requirements">En az 6 karakter</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Şifreyi Onayla</label>
                                <div className="input-wrapper">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        required
                                        minLength={6}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? "🙈" : "👁️"}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Güncelleniyor...
                                    </>
                                ) : (
                                    "Şifreyi Güncelle"
                                )}
                            </button>
                        </form>
                    </>
                )}

                {/* Success State */}
                {state === "success" && (
                    <div className="success-container">
                        <div className="success-icon">✅</div>
                        <h1>Şifre Güncellendi!</h1>
                        <p className="subtitle">
                            Şifreniz başarıyla değiştirildi. Artık yeni şifrenizle giriş yapabilirsiniz.
                        </p>
                        <a href="zodiacflow://" className="open-app-btn">
                            Zodiac Flow&apos;u Aç
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
